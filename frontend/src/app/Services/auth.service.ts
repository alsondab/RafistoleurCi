import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean>;
  authStatus: any;

  constructor(private token: TokenService) {
    this.loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn());
    this.authStatus = this.loggedIn.asObservable();
  }

  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }
}

