import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  signup(data: any) {
    return this.http.post('http://127.0.0.1:8000/api/signup', data);
  }
  adminsign(data: any) {
    return this.http.post('http://127.0.0.1:8000/api/adminsign', data);
  }
  login(data: any) {
    return this.http.post('http://127.0.0.1:8000/api/login', data);
  }
  
  rafistoleurLogin(data: any) {
    return this.http.post('http://127.0.0.1:8000/api/rafistoleur/login', data);
  }
  admilogin(data: any) {
    return this.http.post('http://127.0.0.1:8000/api/admilogin', data);
  }
}
