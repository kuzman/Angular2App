import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, REACTIVE_FORM_DIRECTIVES} from '@angular/forms';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

/**
 * This class represents the lazy loaded LoginComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-login',
  templateUrl: 'login.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES, MD_BUTTON_DIRECTIVES],
  styleUrls: ['login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  logoSrc: string;
   constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.logoSrc = './assets/images/quode_logo.png';

  }

   login(event: any) {
        console.log("model-based form submitted");
        console.log(this.loginForm);
    }
}
