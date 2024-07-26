import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  constructor(private router: Router) {}

  logout() {
    // Remove the token from localStorage
    localStorage.removeItem('token');
    // Navigate back to the sign-in page
    this.router.navigateByUrl("login");
  }

}
