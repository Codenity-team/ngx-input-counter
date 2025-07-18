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
| >=18.0.0 | v1.1.x |
| >=16.0.0 | v1.0.x |
| >=15.0.0 | v0.0.x |

### Instalation

```
npm i ngx-input-counter
```

## Usage

NgModule: Import the module

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

Standalone: Import the component, optional: if you are using the directives

```ts
import { NgxInputCounterComponent } from 'ngx-input-counter';
@NgModule({
  ...
  imports: [
    ...,
    NgxInputCounterComponent,
    PlusContentDirective,
    MinusContentDirective,
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
| minusComponent | `Type` | `undefined` | Pass a Component to replace the minus button content |
| plusComponent | `Type` | `undefined` | Pass a Component to replace the plus button content |
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

## Global Configuration

You can configure all `ngx-input-counter` components in your app using the `NgxInputCounterService` provider.
This allows you to set default values for all instances of `ngx-input-counter` throughout your application.

```ts
constructor (private config: NgxInputCounterService) {
  this.config.min = 0
  this.config.valueClass = 'p-2 border border-gray-400 font-monospace'
  this.config.minusClass = 'btn border-gray-400 rounded-l-md opacity-50 hover:opacity-40'
  this.config.plusClass = 'btn border-gray-400 rounded-r-md opacity-50 hover:opacity-40'
}
```

These settings will apply to all `ngx-input-counter` components in your application. However, you can still override individual values
directly through their input properties in your templates.

### Advanced Customization

For more advanced use cases, you can use the plusComponent and minusComponent properties to define custom components for the plus and minus buttons:

```ts
constructor (private config: NgxInputCounterService) {
  ...
  this.config.minusComponent = MinusTemplateComponent;
  this.config.plusComponent = PlusTemplateComponent;
}
```

This is useful when you have dynamic or reusable templates for your button content and want to configure them globally via the service.

### Extending the Component

Another powerful way to customize `ngx-input-counter` is by extending the `NgxInputCounterComponent` itself.
This allows you to create your own custom input counter component, add new properties, and directly modify the button content templates within your extended component.

```ts
@Component({
  selector: 'app-input-counter',
  standalone: true,
  imports: [NgxInputCounterComponent],
  template: `
    <ng-template #plusTemplateIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </ng-template>
    <ng-template #minusTemplateIcon let-step="step" let-min="min" let-value="value">
      @if (value !== min + step) {
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
      </svg>
      } @else {
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#EF2F35">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
      }
    </ng-template>
    <ngx-input-counter class="custom-plus" style="margin: auto;"
      [plusTemplate]="plusTemplateIcon"
      [minusTemplate]="minusTemplateIcon"
      [min]="min"
      [max]="max"
      [step]="step"
      [value]="value"
      [disabled]="disabled"
      (change)="onInput($event)"
    >
    </ngx-input-counter>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppCounterComponent),
      multi: true
    }
  ]
})
export class AppCounterComponent extends NgxInputCounterComponent {}
```

By creating your own component that extends the original, you can:

- Add custom inputs and behavior
- Override the button content templates
- Fully customize the appearance and functionality

You can then use `<app-input-counter>` instead of `<ngx-input-counter>` in your templates.

> ![NOTE]
> If you plan to use your extended component with Angular Forms, don't forget to provide the `NG_VALUE_ACCESSOR`

```ts
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppCounterComponent),
      multi: true
    }
  ]
```

This ensures your custom counter component works properly with ngModel or reactive forms.

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
