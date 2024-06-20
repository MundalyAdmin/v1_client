import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-organization-insights-scale-score',
  templateUrl: './dashboard-organization-insights-scale-score.component.html',
  styleUrls: ['./dashboard-organization-insights-scale-score.component.scss'],
})
export class DashboardOrganizationInsightsScaleScoreComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) score!: number;
  data: any;
  options: any;

  ngOnInit(): void {
    this.data = {
      datasets: [
        {
          data: [50, 50],
          backgroundColor: ['#FF6384', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#FFCE56'],
          borderWidth: 0,
        },
      ],
    };

    this.options = {
      rotation: 1 * Math.PI,
      circumference: 1 * Math.PI,
      cutoutPercentage: 70,
      plugins: {
        legend: {
          display: false,
        },
      },
      tooltips: {
        enabled: false,
      },
    };
  }
}
