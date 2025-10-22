import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { HasErrorPipe } from './pipes/has-error.pipe';

@NgModule({
  declarations: [LoaderComponent, HasErrorPipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    // Módulos do Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    // Componentes
    LoaderComponent,

    // Pipes
    HasErrorPipe,
  ],
})
export class SharedModule {}
