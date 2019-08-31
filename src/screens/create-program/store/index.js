import React from 'react'
import { observable, action, computed } from 'mobx'


class DayStore {
  
  @observable isAddLecturePopupVisible = false
  @observable isUpdatelecturePopUpVisible = false

  @observable _lectureName = null
  @observable _section = null
  @observable _classRoom = null
  @observable _startHour = null
  @observable _startMinute = null
  @observable _finishHour = null
  @observable _finishMinute = null

  

  @observable selectedLessonIndex = null
  
  @observable
  schedule = [
    { // day start
      selected: true,
      lessons: [
        {
          lectureName: null,
          section: null,
          classRoom: null,
          absent: true,
          startHour: null,
          startMinute: null,
          finishHour: null,
          finishMinute: null
        }
      ]
    }, // day end,

    { // day start
      selected: false,
      lessons: [
        {
          lectureName: null,
          section: null,
          classRoom: null,
          absent: true,
          startHour: null,
          startMinute: null,
          finishHour: null,
          finishMinute: null
        }
      ]
    }, // day end,

    { // day start
      selected: false,
      lessons: [
        {
          lectureName: null,
          section: null,
          classRoom: null,
          absent: true,
          startHour: null,
          startMinute: null,
          finishHour: null,
          finishMinute: null
        }
      ]
    }, // day end,

    { // day start
      selected: false,
      lessons: [
        {
          lectureName: null,
          section: null,
          classRoom: null,
          absent: true,
          startHour: null,
          startMinute: null,
          finishHour: null,
          finishMinute: null
        }
      ]
    }, // day end,

    { // day start
      selected: false,
      lessons: [
        {
          lectureName: null,
          section: null,
          classRoom: null,
          absent: true,
          startHour: null,
          startMinute: null,
          finishHour: null,
          finishMinute: null
        }
      ]
    }, // day end,

    { // day start
      selected: false,
      lessons: [
        {
          lectureName: null,
          section: null,
          classRoom: null,
          absent: true,
          startHour: null,
          startMinute: null,
          finishHour: null,
          finishMinute: null
        }
      ]
    }, // day end,

    { // day start
      selected: false,
      lessons: [
        {
          lectureName: null,
          section: null,
          classRoom: null,
          absent: true,
          startHour: null,
          startMinute: null,
          finishHour: null,
          finishMinute: null
        }
      ]
    } // day end,
  ]
  

  @action
  showAddLecture() {
    this.isAddLecturePopupVisible = true
  }

  @action
  closeAddLecture() {
    this.isAddLecturePopupVisible = false
    this.resetLessonInformation()
  }

  @action
  showUpdateLecture() {
    this.isUpdatelecturePopUpVisible = true
  }

  @action
  closeUpdateLecture() {
    this.isUpdatelecturePopUpVisible = false
    this.resetLessonInformation()
  } 

  @action
  resetLessonInformation() {
    this._lectureName = null,
    this._section = null,
    this._classRoom = null,
    this._startHour = null,
    this._startMinute = null,
    this._finishHour = null,
    this._finishMinute = null
  }

  @action
  resetTimeInformation() {
    this._startHour = null,
    this._startMinute = null,
    this._finishHour = null,
    this._finishMinute = null
  }

  @action
  setSelectedLessonIndex(index) {
    this.selectedLessonIndex = index
  }
    
  @action
  goToNextDay() {
    
    for(let i = 0 ; i < this.schedule.length ; i ++) {
      if(this.selectedIndex === i) {
        this.schedule[i].selected = false
        i === 6 ? this.schedule[0].selected = true : this.schedule[++i].selected = true
        break
      }
    }
  }

  @action
  goToYesterDay() {

    for(let i = 0 ; i < this.schedule.length ; i ++) {
      if(this.selectedIndex === i) {
        this.schedule[i].selected = false
        i === 0 ? this.schedule[6].selected = true : this.schedule[--i].selected = true
        break
      }
    }
  }

  @action
  printDays() {
      const keys = this.schedule[this.selectedIndex].lessons
      keys.forEach(currentKey => {
        console.log(currentKey.lectureName)
        console.log(currentKey.section)
        console.log(currentKey.classRoom)
        console.log(currentKey.start)
        console.log(currentKey.finish)
      })

  }

  @action
  fetchLectureNameInformation(lecture){
    this._lectureName = lecture
  }

  @action
  fetchSectionInformation(section){
    this._section = section
  }

  @action
  fetchClassRoomInformation(classRoom){
    this._classRoom = classRoom
  }

  @action
  fetchStartTimeInformation(hour, minute){
    this._startHour = hour
    this._startMinute = minute
  }

  @action
  fetchFinishTimeInformation(hour, minute){
    this._finishHour = hour
    this._finishMinute = minute
  }

  @action
  addLecture() {
    this.selectedDay.lessons.push({
      lectureName: this._lectureName.props.value,
      section: this._section.props.value,
      classRoom: this._classRoom.props.value,
      startHour: this._startHour,
      startMinute: this._startMinute,
      finishHour: this._finishHour,
      finishMinute: this._finishMinute
    })
  }

  @action
  updateLecture(lesson) {
    if(this._lectureName)
      lesson.lectureName = this._lectureName
    if(this._section)
      lesson.section = this._section
    if(this._classRoom)
      lesson.classRoom = this._classRoom
    if(this._startHour)
      lesson.startHour = this._startHour
    if(this._startMinute)
      lesson.startMinute = this._startMinute
    if(this._finishHour)
      lesson.finishHour = this._finishHour
    if(this._finishMinute)
      lesson.finishMinute = this._finishMinute
  }

  @action
  deleteSelectedLesson(index) {
    this.selectedDay.lessons.splice(index,1)
  }

  @action
  changeAbsentStatus(lesson) {
    lesson.absent === true ? lesson.absent = false : lesson.absent = true
  }

  @computed
  get selectedIndex() {
    let value = {}
  
    this.schedule.forEach(currentDay => {
      if(currentDay.selected === true) {
        //console.log(this.schedule.indexOf(currentDay))
        value = this.schedule.indexOf(currentDay)
      }
    })
    return value
  }

  @computed
  get selectedDay() {
    return this.schedule[this.selectedIndex]
  }

  @computed
  get selectedDayName() {
    let day
    
    switch(this.selectedIndex) {
      case 0:
        day = "PAZARTESİ"
        break
      case 1: 
        day = "SALI"
        break
      case 2: 
        day = "ÇARŞAMBA"
        break
      case 3: 
        day = "PERŞEMBE"
        break
      case 4: 
        day = "CUMA"
        break
      case 5: 
        day = "CUMARTESİ"
        break
      case 6: 
        day = "PAZAR"
        break
      default:
        day = "pazartesi"
    }

    return day
  }

  @computed
  get sortLessons() {
    this.selectedDay.lessons.sort((l1,l2) => {
      return l1.startHour > l2.startHour
    })

    return this.selectedDay.lessons
  }
}

  


const store = new DayStore()
export default store