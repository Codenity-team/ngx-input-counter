# NgxInputCounter

<p align="center">
  <img src="projects/demo/src/assets/demo.gif" alt="project-logo" width="50%" />
</p>

[![npm version](https://img.shields.io/npm/v/ngx-input-counter)][npm-url]
[![npm dlm](https://img.shields.io/npm/dm/ngx-input-counter)][npm-url]

[npm-url]: https://www.npmjs.com/package/ngx-input-counter

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
|-------------|--------------------|-------------|------------------------------------------|
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

## Styling

You can use the default classes and add your own styles or using a custom class:

The classes in the component are:

- `ngx-input-counter-container`: The container element.
- `ngx-input-counter-button`: The buttons element.
- `ngx-input-counter-value`: The value element .

```scss
ngx-input-counter.custom {
  .ngx-input-counter-container {
    border-radius: 50px;
    text-align: center;
    .ngx-input-counter-value {
      width: 30px;
      font-weight: bold;
      font-size: 18px;
    }
  }
  .ngx-input-counter-button {
    border: 1px solid #999;
    border-radius: 100%;
    background-color: white;
    width: 36px;
    height: 36px;
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
      background-color: #ddd;
      box-shadow: 1px 1px 2px 1px #ccc;
    }
  }
}
```

Then in your component:

```html
<ngx-input-counter [(ngModel)]="qty" class="custom"></ngx-input-counter>
```

You can use the Input props `minusClass`, `plusClass` and `valueClass` to override the default value class and use your own classes, this is usefull if you are using CSS frameworks.

```html
<ngx-input-counter
  ...
  minusClass="btn btn-info"
  plusClass="btn btn-primary"
></ngx-input-counter>
```

If you want to use custom icons in the counter buttons use the `minusTemplate` and `plusTemplate` passing a TemplateRef with the content you want to show

```html
<ng-template #plusTemplate>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
</ng-template>
<ng-template #minusTemplate>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
  </svg>
</ng-template>

<ngx-input-counter
  class="custom-class"
  [plusTemplate]="plusTemplate"
  [minusTemplate]="minusTemplate"
></ngx-input-counter>
```

You can use the slot, using `minus` for the `minusTemplate` and `plus` for the `plusTemplate` slot

```html
<ngx-input-counter>
  <ng-template plus>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  </ng-template>
  <ng-template minus>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
    </svg>
  </ng-template>
</ngx-input-counter>
```

When you use the slot template you can pass classes to override the button class:

```html
<ng-template minus class="rounded p-4">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
  </svg>
</ng-template>
```

## Development

Clone this repo and install the dependencies. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Contributing

See Contributing Guide.

## License

MIT
