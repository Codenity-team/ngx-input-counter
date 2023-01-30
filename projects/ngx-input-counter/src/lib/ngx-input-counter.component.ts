import { Component, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-input-counter',
  templateUrl: './ngx-input-counter.component.html',
  styleUrls: ['./ngx-input-counter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxInputCounterComponent),
      multi: true
    }
  ]
})
export class NgxInputCounterComponent implements ControlValueAccessor {

  onChange = (_:any) => { }
  onTouch = () => { }

  onInput(value: number) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  @Input() value: number = 0;
  @Input() step: number = 1;
  @Input() min: number | undefined;
  @Input() max: number = Infinity;
  @Input() disabled: boolean = false;

  addItem(step: number) {
    this.onInput(this.value + step)
  }
}
