import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  constructor(private Auth: AuthService) {}
  public loggedIn:boolean=false;
  ngOnInit(): void {
    this.Auth.authStatus.subscribe(
      (value:boolean)=>{
        this.loggedIn = value;
      }
    );
  }
}
