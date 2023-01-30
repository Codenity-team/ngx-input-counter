import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxInputCounterComponent } from './ngx-input-counter.component';



@NgModule({
  declarations: [
    NgxInputCounterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxInputCounterComponent
  ]
})
export class NgxInputCounterModule { }
