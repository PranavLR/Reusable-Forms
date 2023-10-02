import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  form = new FormGroup({
    displayName: new FormControl(''), 
  });

  submit() {
    // do whatever you need with it...
    console.log(this.form.value);
    this.form.reset();
  }
}
