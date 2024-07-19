import { Component } from '@angular/core';
import { BackendService } from '../../Services/backend.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public form = {
    name: null,
    email: null,
    tel: null,
    location: null,
    password: null,
    password_confirmation: null
  };

  constructor(private backend: BackendService) {}

  public error: any = [];

  submitSignup() {
    console.log(this.form);
    return this.backend.signup(this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );
  }

  handleError(error: any) {
    this.error = error.error.errors;
  }
}
