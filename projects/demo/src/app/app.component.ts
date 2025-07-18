import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxInputCounterComponent, PlusContentDirective, NgxInputCounterService  } from '../../../ngx-input-counter/src/public-api';
import { CommonModule, JsonPipe } from '@angular/common';
import { AppCounterComponent } from "./app-counter/app-counter.component";

@Component({
  selector: 'app-minus',
  standalone: true,
  template: `@if (value !== min + step) {
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
    </svg>
    } @else {
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#EF2F35">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    }
  `,
})
export class MinusTemplateComponent {
  @Input() value = 0;
  @Input() min!: number;
  @Input() max!: number;
  @Input() step = 1;
}
@Component({
  selector: 'app-plus',
  standalone: true,
  template: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>`,
})
export class PlusTemplateComponent {
  @Input() value = 0;
  @Input() min!: number;
  @Input() max!: number;
  @Input() step = 1;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [NgxInputCounterComponent, JsonPipe, ReactiveFormsModule, FormsModule, CommonModule, PlusContentDirective, AppCounterComponent]
})
export class AppComponent {
  title = 'demo';
  qty = 2
  custom = 1

  myForm: FormGroup = new FormGroup({
    age: new FormControl(2, [Validators.min(18)])
  })

  constructor (private config: NgxInputCounterService) {
    this.config.minusComponent = MinusTemplateComponent
    this.config.plusComponent = PlusTemplateComponent
  }

  onChange(e: any) {
    console.log(e, 'onChange called');
  }
}
