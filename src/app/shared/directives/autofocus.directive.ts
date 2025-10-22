import { Directive, ElementRef, AfterViewInit } from '@angular/core';

/// usage reference: <input appAutofocus type="text" placeholder="Digite aqui" />
@Directive({
  selector: '[appAutofocus]',
  standalone: true,
})
export class AutofocusDirective implements AfterViewInit {
  constructor(private el: ElementRef<HTMLInputElement>) {}

  ngAfterViewInit(): void {
    this.el.nativeElement.focus();
  }
}
