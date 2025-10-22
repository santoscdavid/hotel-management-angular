import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <label [for]="id" class="label">{{ label }}</label>
    <input [id]="id" class="input" [type]="type" [placeholder]="placeholder" [(ngModel)]="value" />
  `,
  styleUrls: ['input.component.scss'],
})
export class InputComponent {
  /** Identificador do input (para acessibilidade) */
  @Input() id = '';
  /** Texto do rótulo */
  @Input() label = '';
  /** Tipo de input (text, password, email...) */
  @Input() type = 'text';
  /** Placeholder (texto de dica) */
  @Input() placeholder = '';
  /** Valor vinculado (two-way data binding) */
  @Input() value = '';
}
