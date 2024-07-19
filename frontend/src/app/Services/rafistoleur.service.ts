import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

export interface RafistoleurResponse {
  id: number;
  name: string;
  email: string;
  location: string;
  tel: string;
  created_at: string;
  updated_at: string;
}

export interface RafistoleurResponseType {
  status: number;
  message: RafistoleurResponse[];
}

export interface RafistoleurEditResponse {
  status: number;
  message: RafistoleurResponse;
}

@Injectable({
  providedIn: 'root'
})
export class RafistoleurService {

  constructor(private httpclient: HttpClient) { }

  getRafistoleurs(): Observable<RafistoleurResponseType> {
    return this.httpclient.get<RafistoleurResponseType>('http://127.0.0.1:8000/api/rafistoleurs');
  }

  getRafistoleur(id: string): Observable<RafistoleurEditResponse> {
    return this.httpclient.get<RafistoleurEditResponse>(`http://127.0.0.1:8000/api/rafistoleurs/${id}/edit`);
  }


    
  // saveRafistoleur(inputData: object): Observable<any> {
  //   return this.httpclient.post('http://127.0.0.1:8000/api/rafistoleurs', inputData);
  // }

  saveRafistoleur(data: any) {
    return this.httpclient.post('http://127.0.0.1:8000/api/rafistoleurs', data);
  }


  updateRafistoleur(id: string, inputData: object): Observable<any> {
    return this.httpclient.put(`http://127.0.0.1:8000/api/rafistoleurs/${id}/edit`, inputData);
  }

  deleteRafistoleur(id: string): Observable<any> {
    return this.httpclient.delete(`http://127.0.0.1:8000/api/rafistoleurs/${id}/delete`);
  }
}
