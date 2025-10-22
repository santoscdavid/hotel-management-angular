import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'hasError',
  standalone: false,
})
export class HasErrorPipe implements PipeTransform {
  transform(control: AbstractControl | null, errorCode: string): boolean {
    return !!control && control.touched && control.hasError(errorCode);
  }
}
