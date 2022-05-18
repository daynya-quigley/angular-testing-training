import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'dateDiff'})
export class DateDiffPipe implements PipeTransform {
  transform(value: string, startDate: string) {
    const startDateAsDate = new Date(startDate);
    const endDateAsDate = new Date(value);

    const diffInTime = endDateAsDate.getTime() - startDateAsDate.getTime();
    return (diffInTime / (1000 * 3600 * 24)).toString()
  }
}
