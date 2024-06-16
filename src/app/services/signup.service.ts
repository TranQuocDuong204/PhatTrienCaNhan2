import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private urlSign: string = 'http://localhost:9999/auth/signup';
  constructor(private http: HttpClient) {}

  signup(DataForm: {
    _id: null;
    name: string;
    email: string;
    password: string;
    role: string;
  }): Observable<any> {
    return this.http.post(this.urlSign, DataForm, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
