import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

/// usage reference: {{ user.createdAt | dateFormat:'short' }}
@Pipe({
  name: 'dateFormat',
  standalone: false,
})
export class DateFormatPipe implements PipeTransform {
  transform(value: Date | string | number, format = 'mediumDate', locale = 'pt-BR'): string {
    return value ? formatDate(value, format, locale) : '';
  }
}
