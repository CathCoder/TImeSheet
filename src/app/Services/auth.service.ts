import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = 'https://localhost:7053/api/User/';
  constructor(private _http: HttpClient) {}

  signUp(userobj: any) {
    return this._http.post<any>(`${this.baseUrl}register`, userobj);
  }

  logIn(loginObj: any) {
    return this._http.post<any>(`${this.baseUrl}authenticate`, loginObj);
  }
}
