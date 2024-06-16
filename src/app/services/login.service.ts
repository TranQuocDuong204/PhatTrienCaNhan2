import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = 'http://localhost:9999/auth/login';

  constructor(private http: HttpClient) {}

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(this.url, data, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
