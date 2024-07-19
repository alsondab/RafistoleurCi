import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../../Services/backend.service';
import { TokenService } from '../../../Services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service'; // Ensure this import is correct

@Component({
  selector: 'app-admin-log',
  templateUrl: './admin-log.component.html',
  styleUrls: ['./admin-log.component.css']
})
export class AdminLogComponent implements OnInit {
  public form = {
    email: null,
    password: null
  };
  
  public error= null ;

  constructor(
    private backend: BackendService,
    private token: TokenService,
    private router: Router,
    private Auth: AuthService
  ) {}

  public loggedIn:boolean=false;
  ngOnInit(): void {
    this.Auth.authStatus.subscribe(
      (value:boolean)=>{
        this.loggedIn = value;
      }
    );
  }

  submitLoginAdmin() {
    console.log(this.form);
    return this.backend.admilogin(this.form).subscribe(
      data => this.handleResponse(data),
      (error) => this.handleError(error)
    );
  }

  handleResponse(data: any) {
    console.log(data.access_token);
    this.token.handle(data.access_token);
    // this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/rafistoleurs');
  }

  handleError(error: any) {
    this.error = error.error.error;
  }
}
