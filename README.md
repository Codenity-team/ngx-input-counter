# NgxInputCounter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Getting Started

### Versions

| Angular  | lib |
| -------- |:------:| 
| >=15.0.0 | v0.0.x |

### Instalation

```
npm i lib
```

## Usage

Import the module

```typescript
import { NgxInputCounterModule } from 'lib';
@NgModule({
  ...
  imports: [
    ...,
    NgxInputCounterModule,
  ],
})
```

Use in your components

<ngx-input-counter [(ngModel)]="qty"></ngx-input-counter>


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Contributing

See Contributing Guide.

## License

MIT
