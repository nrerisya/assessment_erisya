import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface SignInModel {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://test-demo.aemenersol.com/api/account/login';

  constructor(private http: HttpClient) { }

  login(signInModel: SignInModel): Observable<any> {
    return this.http.post(this.loginUrl, signInModel);
  }
}
