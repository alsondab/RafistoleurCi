import { Component,OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../Services/token.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  ngOnInit(): void {
    this.Auth.authStatus.subscribe(
      (value:boolean)=>{
        this.loggedIn = value;
      }
    );
  }

  
  constructor(private Auth: AuthService,private router: Router ,private token: TokenService) {}

  public loggedIn:boolean=false;

  feedback = {
    name: '',
    email: '',
    message: ''
  };
  sendFeedback() {
    const subject = `Feedback from ${this.feedback.name}`;
    const body = `
      Nom: ${this.feedback.name}
      Email: ${this.feedback.email}
      Commentaire: ${this.feedback.message}
    `;
    const mailtoLink = `mailto:alsondab9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }

  logout(event:MouseEvent){
    event.preventDefault();
    this.token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }
}
