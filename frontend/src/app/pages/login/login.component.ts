import { Component,OnInit } from '@angular/core';
import { BackendService } from '../../Services/backend.service';
import { TokenService } from '../../Services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {


  ngOnInit(){

  }

  public form={
    email: null,
    password: null
  }
  public error= null ;
  constructor(private backend: BackendService, private token:TokenService, private router:Router, private Auth:AuthService) { }
  submitLogin(){
    // console.log(this.form);
    return this.backend.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  
  handleResponse(data: any) {
    // this.error = error.error.error;
    console.log(data.access_token);
    this.token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/home')

  }
  handleError(error: any) {
    this.error = error.error.error;
  }

  // loggedIn(){
    
  // }
}
