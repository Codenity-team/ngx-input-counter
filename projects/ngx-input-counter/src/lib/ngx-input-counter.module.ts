import { NgModule } from '@angular/core';
import { MinusContentDirective, NgxInputCounterComponent, PlusContentDirective } from './ngx-input-counter.component';

@NgModule({
  imports: [
    NgxInputCounterComponent,
    PlusContentDirective,
    MinusContentDirective,
  ],
  exports: [
    NgxInputCounterComponent,
    PlusContentDirective,
    MinusContentDirective
  ]
})
export class NgxInputCounterModule { }
