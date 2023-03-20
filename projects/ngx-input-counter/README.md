# NgxInputCounter

The input number with counter for Angular

## Getting Started

### Versions

| Angular  | ngx-input-counter |
| -------- |:------:| 
| >=15.0.0 | v0.0.x |

### Instalation

```
npm i ngx-input-counter
```

## Usage

Import the module

```typescript
import { NgxInputCounterModule } from 'ngx-input-counter';
@NgModule({
  ...
  imports: [
    ...,
    NgxInputCounterModule,
  ],
})
```

Use in your components

```html
<ngx-input-counter [(ngModel)]="qty"></ngx-input-counter>
```

### Props

| Name | Type | Default | Description |
|-------------|--------------------|-------------|-------------|
| value | `number` | `0` | Initial state of the toggle button |
| min | `number` | `-Infinity` | Transition time for the animation |
| max | `number` | `Infinity`  | Transition time for the animation |
| step | `number` | `1` | Transition time for the animation |
| minusTemplate | `TemplateRef` | `-` | Pass a TemplateRef to replace the minus button content |
| plusTemplate | `TemplateRef` | `+` | Pass a TemplateRef to replace the plus button content |
| minusClass | `string` | `'ngx-input-counter-button'` | Classes of the minus button |
| plusClass | `string` | `'ngx-input-counter-button'` | Classes of the plus button |
| valueClass | `string` | `'ngx-input-counter-value'` | Classes of value text |
| disabled | `boolean` | `false` | Disables the buttons

### Outputs

| Name   | Payload | Description |
| ---    | ------  | -------     |
| change | value   | Triggered when state of the component changes. <br>Contains: <br>`value` - state of the component |
