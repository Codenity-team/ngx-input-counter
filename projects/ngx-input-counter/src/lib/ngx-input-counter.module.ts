import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MinusContentDirective, NgxInputCounterComponent, PlusContentDirective } from './ngx-input-counter.component';



@NgModule({
  declarations: [
    NgxInputCounterComponent,
    PlusContentDirective,
    MinusContentDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxInputCounterComponent,
    PlusContentDirective,
    MinusContentDirective
  ]
})
export class NgxInputCounterModule { }
