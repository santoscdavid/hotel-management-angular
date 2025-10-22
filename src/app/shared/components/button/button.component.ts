import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="btn" [ngClass]="type" [disabled]="disabled" (click)="onClick.emit($event)">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['button.component.scss'],
})
export class ButtonComponent {
  /** Tipo visual do botão: 'primary', 'secondary', etc */
  @Input() type: 'primary' | 'secondary' | 'danger' = 'primary';

  /** Desabilita o botão */
  @Input() disabled = false;

  /** Emite o evento de clique */
  @Output() onClick = new EventEmitter<Event>();
}
