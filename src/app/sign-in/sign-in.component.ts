import { Component, inject, OnInit } from '@angular/core';
import { SignInModel } from './sign-in-model';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../shared/auth/auth.service';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
/*
  constructor(private authService: AuthService, 
    private router:Router) {}
  */

    loginForm: SignInModel = {
      username: "",
      password: ""
    };

  http = inject(HttpClient);

  constructor (private authService: AuthService, private router:Router) {

  }
/*
  userSignIn() {
    console.log('Login Form:', this.loginForm); // Log the loginForm for debugging
    this.authService.login(this.loginForm)
      .subscribe({
        next: (res: any) => {
          console.log('Response:', res); // Log response for debugging
          if (res.result) {
            alert("Login Success");
            localStorage.setItem('angular18Token', res.data.token);
            this.router.navigateByUrl("dashboard");
          } else {
            alert(res.message);
          }
        },
        error: (err: any) => {
          console.error('Login error:', err); // Log error for debugging
          if (err.status === 400) {
            alert("Login Failed: Incorrect username or password.");
          } else {
            alert("An error occurred. Please try again later.");
          }
        }
      });
  }
}
*/
  
  userSignIn() {
    this.http.post("http://test-demo.aemenersol.com/api/account/login", this.loginForm)
    .pipe(
      catchError((error) => {
        console.error('Error during login:', error);
        alert("Login Failed: Incorrect username or password.");
        return throwError(error);
      })
    )
    .subscribe((res:any) => {
      //to check what res is
      console.log('res', res);
      //res = token
      if(res) {
        alert("Login Success");
        localStorage.setItem("token", res)
        this.router.navigateByUrl("dashboard");        
      } else {
        alert("Login Failed: Incorrect username or password.");
      }
    })
  }
}


