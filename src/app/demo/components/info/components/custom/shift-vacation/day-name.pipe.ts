import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayName',
  standalone: true
})

export class DayNamePipe implements PipeTransform {

    transform(value: number): string {
        const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        return days[value];
    }

}
