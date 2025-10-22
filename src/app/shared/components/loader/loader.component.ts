import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: false,
  template: `
    <div class="loader-container">
      <div class="spinner"></div>
    </div>
  `,
  styleUrls: ['loader.component.scss'],
})
export class LoaderComponent {}
