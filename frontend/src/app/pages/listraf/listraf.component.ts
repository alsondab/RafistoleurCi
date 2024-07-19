import { Component,OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-listraf',
  templateUrl: './listraf.component.html',
  styleUrls: ['./listraf.component.css']
})
export class ListrafComponent implements OnInit {

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
