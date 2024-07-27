import { Component, OnInit, inject } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import { DashboardService } from '../../shared/dashboard/homepage.service';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  standalone: true,
  imports: [PlotlyModule, CommonModule, RouterOutlet]
})
export class HomepageComponent implements OnInit {

  router = inject(Router);
  donutChartData: any = {
    values: [],
    labels: [],
    hole: 0.4,
    type: 'pie',
    textinfo: 'none',
    marker: {
      colors: ['#d3d3d3', '#b0b0b0', '#808080', '#a0a0a0']
    }
  };
  donutChartLayout: any = {
    title: 'Donut Chart',
    showlegend: false
  };
  barChartData: any = {
    x: [],
    y: [],
    type: 'bar',
    marker: {
      color: '#a0a0a0'
    }
  };
  barChartLayout: any = {
    title: '',  // No title
    showlegend: false,
    xaxis: {
      linecolor: '#a0a0a0',
      showgrid: false,
      showticklabels: false,
      showline: false,
    },
    yaxis: {
      linecolor: '#a0a0a0',
      showgrid: false,
      showticklabels: false
    }
  }
  tableUsers: any[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token'); 
    if (token) {
      this.dashboardService.getDashboardData(token).subscribe({
        next: data => {
          console.log('data', data);
          this.donutChartData = this.transformDonutData(data.chartDonut);
          this.barChartData = this.transformBarData(data.chartBar);
          console.log('Bar Chart Data:', this.barChartData);
          this.tableUsers = data.tableUsers;
          console.log('Table Users:', this.tableUsers);
        },
        error: error => {
          console.error('Error fetching dashboard data', error);
        }
      });
    } else {
      this.router.navigateByUrl("login");
    }
  }
  
  transformDonutData(data: any[]): any {
    return {
      values: data.map(item => item.value),
      labels: data.map(item => item.name),
      hole: 0.4,
      type: 'pie',
      textinfo: 'none',
      marker: {
        colors: ['#d3d3d3', '#b0b0b0', '#808080', '#a0a0a0']
      }
    };
  }
  
  transformBarData(data: any[]): any {
    return {
      x: data.map(item => item.name),
      y: data.map(item => item.value),
      type: 'bar',
      marker: {
        color: '#a0a0a0'
      }
    };
  }
}
