

export class Lesson {

  constructor(data = {}) {
    this.name = data.name
    this.section = data.section
    this.classRoom = data.classRoom
    this.startHour = data.startHour
    this.startMinute = data.startMinute
    this.finishHour = data.finishHour
    this.finishMinute = data.finishMinute
  }

}