import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from './shared/auth/auth.service';
import { CommonModule } from '@angular/common';
import { PlotlyModule } from 'angular-plotly.js';
import { HomepageComponent } from './dashboard/homepage/homepage.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, FormsModule, PlotlyModule, CommonModule, HomepageComponent] // Import RouterModule for routing to work
})
export class AppComponent {
  title = 'assessment';

}
