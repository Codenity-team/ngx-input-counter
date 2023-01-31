import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  qty = 2
  custom = 1

  myForm: FormGroup = new FormGroup({
    age: new FormControl(2, [Validators.min(18)])
  })
}
