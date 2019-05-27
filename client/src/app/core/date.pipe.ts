import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'appDate'})
export class AppDatePipe implements PipeTransform  {
  constructor() {}

  /**
   * Transform function of the pipe
   * @param value Date value from the database
   */
  transform(value: string, time: boolean): string {
    if (!value) {
      return '';
    }
    if (time) {
      let date = new Date(value);
      return this.getTimestamp(date);
    }
    // Return transformed date
    return value.substr(0, 10);
  }

  /**
   * Helper function to get the date and time as a string
   */
  getTimestamp(date: Date): string {
    let dateString = [];
    let month = date.getMonth();
    dateString.push(month.toString().length == 1 ? '0' + month.toString() : month.toString());
    let day = date.getDate();
    dateString.push(day.toString().length == 1 ? '0' + day.toString() : day.toString());
    dateString.push(date.getFullYear());
    
    let timeString = [];
    let meridian = 'AM';
    let hours = date.getHours();
    if (hours > 11) {
      meridian = 'PM';
      hours -= 12;
    }
    timeString.push(hours.toString().length == 1 ? '0' + hours.toString() : hours.toString());
    let minutes = date.getMinutes();
    timeString.push(minutes.toString().length == 1 ? '0' + minutes.toString() : minutes.toString());

    return dateString.join('/') + ' ' + timeString.join(':') + meridian;
  }
}
