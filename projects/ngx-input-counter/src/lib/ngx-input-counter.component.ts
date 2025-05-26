import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ComponentRef, ContentChild, Directive, EventEmitter, forwardRef, inject, Input, OnInit, Output, TemplateRef, Type } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgxInputCounterService } from './ngx-input-counter.service';

export interface TemplateContext {
	min: number;
	step: number;
  value: number;
}

@Directive({
  selector: '[plus]',
  standalone: true,
})
export class PlusContentDirective {
  @Input() class: string = '';
  constructor(public templateRef: TemplateRef<TemplateContext>) {}
}
@Directive({
  selector: '[minus]',
  standalone: true,
})
export class MinusContentDirective {
  @Input() class: string = '';
  constructor(public templateRef: TemplateRef<TemplateContext>) {}
}

let nextUniqueId = 0;

@Component({
  selector: 'ngx-input-counter',
  standalone: true,
  imports: [CommonModule],
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
  config = inject(NgxInputCounterService);
  @Input() id: string = ''
  @Input() name: string = this.config.name || '';
  @Input('aria-label') ariaLabel: string | null = null;
  @Input('aria-labelledby') ariaLabelledby: string | null = null;
  @Input('aria-describedby') ariaDescribedby: string | null = null;
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
  constructor(
  ) {
    console.log(this.config)
    this._uniqueId = 'ngx-counter-'+(++nextUniqueId);
    this.id = this.id || this._uniqueId
    this.ariaLabel = this.ariaLabel || this.name || this.id
  }

  @Input() minusTemplate: TemplateRef<TemplateContext> = this.config.minusTemplate!;
	@ContentChild(MinusContentDirective) minusTemplateFromContent: MinusContentDirective | undefined;

  @Input() plusTemplate: TemplateRef<TemplateContext> = this.config.plusTemplate!;
	@ContentChild(PlusContentDirective) plusTemplateFromContent: PlusContentDirective | undefined;

  @Input() plusComponent: Type<any> = this.config.plusComponent!;
  @Input() minusComponent: Type<any> = this.config.minusComponent!;

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

  @Input() value: number = this.config.value || 0;
  @Input() step: number =this.config.step ||  1;
  @Input() min: number = this.config.min || -Infinity;
  @Input() max: number = this.config.max || Infinity;
  @Input() disabled: boolean = this.config.disabled || false;

  @Input() minusClass = this.config.minusClass || 'ngx-input-counter-button';
  @Input() plusClass = this.config.plusClass || 'ngx-input-counter-button';
  @Input() valueClass = this.config.valueClass || 'ngx-input-counter-value';

  @Output() change = new EventEmitter;

  private _uniqueId: string;

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
