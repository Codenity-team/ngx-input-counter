import { Injectable, TemplateRef, Type } from '@angular/core';
import { TemplateContext } from './ngx-input-counter.component';

@Injectable({
  providedIn: 'root'
})
export class NgxInputCounterService {
  value?: number;
  name?: string;
  class?: string;
  min?: number;
  max?: number;
  step?: number;
  minusTemplate?: TemplateRef<TemplateContext>;
  plusTemplate?: TemplateRef<TemplateContext>;
  plusComponent?: Type<any>;
  minusComponent?: Type<any>;
  minusClass?: string;
  plusClass?: string;
  valueClass?: string;
  disabled?: boolean;
}
