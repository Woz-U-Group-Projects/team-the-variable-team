import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'appDate'})
export class AppDatePipe implements PipeTransform  {
  constructor() {}

  /**
   * Transform function of the pipe
   * @param value Date value from the database
   */
  transform(value: string): string {
    if (!value) {
      return '';
    }
    // Return transformed date
    return value.substr(0, 10);
  }
}
