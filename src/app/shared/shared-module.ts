import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './components/loader/loader.component';
import { HasErrorPipe } from './pipes/has-error.pipe';
import { DateFormatPipe } from './pipes/datetime.pipe';

@NgModule({
  declarations: [LoaderComponent, HasErrorPipe, DateFormatPipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,

    LoaderComponent,

    HasErrorPipe,
    DateFormatPipe,
  ],
})
export class SharedModule {}
