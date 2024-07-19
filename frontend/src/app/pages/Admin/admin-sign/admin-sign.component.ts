
import { Component } from '@angular/core';
import { BackendService } from '../../../Services/backend.service';

@Component({
  selector: 'app-admin-sign',
  templateUrl: './admin-sign.component.html',
  styleUrl: './admin-sign.component.css'
})
export class AdminSignComponent {
  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  };

  constructor(private backend: BackendService) {}

  public error: any = [];

  submitAdminSignup() {
    console.log(this.form);
    return this.backend.adminsign(this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );
  }

  handleError(error: any) {
    console.error('Error occurred:', error); // Log the full error for debugging
    this.error = error.error.errors; // Assuming `errors` is the structure returned by Laravel
  }
  
}
