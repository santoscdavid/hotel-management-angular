import { Pipe, PipeTransform } from '@angular/core';

/// usage reference: <p>{{ article.content | truncate:100 }}</p>
@Pipe({
  name: 'truncate',
  standalone: true,
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 20, ellipsis = '...'): string {
    if (!value) return '';
    return value.length > limit ? value.substring(0, limit) + ellipsis : value;
  }
}
