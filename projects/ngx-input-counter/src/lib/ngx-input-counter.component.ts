import { AfterContentInit, Component, ContentChild, Directive, EventEmitter, forwardRef, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface TemplateContext {
	min: number;
	step: number;
  class: string;
}

@Directive({
  selector: '[plus]'
})
export class PlusContentDirective {
  @Input() class: string = '';
  constructor(public templateRef: TemplateRef<TemplateContext>) {}
}
@Directive({
  selector: '[minus]'
})
export class MinusContentDirective {
  @Input() class: string = '';
  constructor(public templateRef: TemplateRef<TemplateContext>) {}
}

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
export class NgxInputCounterComponent implements ControlValueAccessor, OnInit, AfterContentInit {
  ngAfterContentInit(): void {
    console.log(this.minusTemplate)
  }
  ngOnInit(): void {
    this.context = {
      min: this.min,
      step: this.step,
      value: this.value
    }
  }

  @Input() minusTemplate!: TemplateRef<TemplateContext>;
	@ContentChild(MinusContentDirective) minusTemplateFromContent: MinusContentDirective | undefined;

  @Input() plusTemplate!: TemplateRef<TemplateContext>;
	@ContentChild(PlusContentDirective) plusTemplateFromContent: PlusContentDirective | undefined;

  onChange = (_:any) => { }
  onTouch = () => { }

  onInput(value: number) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
    this.change.emit(this.value);
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
  @Input() min: number = -Infinity;
  @Input() max: number = Infinity;
  @Input() disabled: boolean = false;

  @Input() minusClass = 'ngx-input-counter-button';
  @Input() plusClass = 'ngx-input-counter-button';
  @Input() valueClass = 'ngx-input-counter-value';

  @Output() change = new EventEmitter;

  context = {
    min: this.min,
    step: this.step,
    value: this.value
  }

  addItem(step: number) {
    let newValue = this.value + step;
    if(this.value < this.min) newValue = this.min
    if(this.value > this.max) newValue = this.max
    const minValue = newValue >= this.min
    if(this.max >= newValue && minValue)
      this.onInput(newValue)
  }
}
