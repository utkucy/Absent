import React from 'react'
import { observable, action, computed } from 'mobx'
import moment from 'moment'

import DayStore from '../../create-program/store/index'

class CalendarStore {

  @observable absentInformation = null
  @observable today = null
  @observable schedule = []

  @observable selectedDay = 
    {
      name: null,
      lessons: [
        {
          name: null,
          section: null,
          classRoom: null,
          absent: true,
          startHour: null,
          startMinute: null,
          finishHour: null,
          finishMinute: null
        }
      ],
      dateString: null
    }
  

  @action
  setSelectedDay(day) {
    this.selectedDay.name = moment(day.dateString).format('dddd')
    let dayName = this.selectedDay.name
    
    if(dayName === 'Monday')
      this.selectedDay.lessons = DayStore.schedule[0].lessons
    else if(dayName === 'Tuesday')
      this.selectedDay.lessons = DayStore.schedule[1].lessons
    else if(dayName === 'Wednesday')
      this.selectedDay.lessons = DayStore.schedule[2].lessons
    else if(dayName === 'Thursday')
      this.selectedDay.lessons = DayStore.schedule[3].lessons
    else if(dayName === 'Friday')
      this.selectedDay.lessons = DayStore.schedule[4].lessons
    else if(dayName === 'Saturday')
      this.selectedDay.lessons = DayStore.schedule[5].lessons
    else if(dayName === 'Sunday')
      this.selectedDay.lessons = DayStore.schedule[6].lessons

    console.log("selected day is:" ,this.selectedDay.name)

    this.selectedDay.lessons.forEach((lesson) => {
      console.log(lesson.name)
      console.log(lesson.section)
      console.log(lesson.classRoom)
      console.log(lesson.startHour + ":" + lesson.startMinute)
      console.log(lesson.finishHour + ":" + lesson.finishMinute)
    })

  }

  @computed 
  get currentDay() {
    this.today = require('moment')
    return this.today()
  }

  @computed 
  get currentDayName() {
    let dayName = this.currentDay.format('dddd')

    if(dayName === 'Monday')
      return 'Pazartesi'
    else if(dayName === 'Tuesday')
      return 'Salı'
    else if(dayName === 'Wednesday')
      return 'Çarşamba'
    else if(dayName === 'Thursday')
      return 'Perşembe'
    else if(dayName === 'Friday')
      return 'Cuma'
    else if(dayName === 'Saturday')
      return 'Cumartesi'
    else if(dayName === 'Sunday')
      return 'Pazar'
  }

  @computed
  get selectedDayName() {
    let selectedDayName = this.selectedDay

    if(selectedDayName === 'Monday')
      return 'Pazartesi'
    else if(selectedDayName === 'Tuesday')
      return 'Salı'
    else if(selectedDayName === 'Wednesday')
      return 'Çarşamba'
    else if(selectedDayName === 'Thursday')
      return 'Perşembe'
    else if(selectedDayName === 'Friday')
      return 'Cuma'
    else if(selectedDayName === 'Saturday')
      return 'Cumartesi'
    else if(selectedDayName === 'Sunday')
      return 'Pazar'
  }
}




const store = new CalendarStore()
export default store