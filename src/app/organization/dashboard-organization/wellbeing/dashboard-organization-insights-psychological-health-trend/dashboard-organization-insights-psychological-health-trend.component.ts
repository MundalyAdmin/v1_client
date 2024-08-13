import { Component } from '@angular/core';
import { DashboardOrganizationInsightsCommunityReputationTrendComponent } from '../../dashboard-organization-insights/dashboard-organization-insights-community-reputation-trend/dashboard-organization-insights-community-reputation-trend.component';

@Component({
  selector: 'app-dashboard-organization-insights-psychological-health-trend',
  templateUrl:
    './dashboard-organization-insights-psychological-health-trend.component.html',
  styleUrls: [
    './dashboard-organization-insights-psychological-health-trend.component.scss',
  ],
})
export class DashboardOrganizationInsightsPsychologicalHealthTrendComponent extends DashboardOrganizationInsightsCommunityReputationTrendComponent {
  override initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.chartData = {
      labels: this.chartLabels,
      datasets: [
        {
          label: 'Avg. Psychological Health',
          data: this.chartDataset,
          fill: true,
          borderColor: '#4f46e5',
          tension: 0.4,
          backgroundColor: '#c1ddff',
        },
      ],
    };

    this.options = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            maxTicksLimit: 6,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          min: 0,
          max: 100,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };
  }
}
