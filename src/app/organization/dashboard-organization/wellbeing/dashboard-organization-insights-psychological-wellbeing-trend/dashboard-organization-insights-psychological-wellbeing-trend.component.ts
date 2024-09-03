import { Component } from '@angular/core';
import { DashboardOrganizationInsightsCommunityReputationTrendComponent } from '../../dashboard-organization-insights/dashboard-organization-insights-community-reputation-trend/dashboard-organization-insights-community-reputation-trend.component';
import { DashboardOrganizationBaseScaleTrendComponent } from '../../dashboard-organization-base-scale-trend/dashboard-organization-base-scale-trend.component';
import { PsychologicalWellbeingScoring } from '../../../../wellbeing-scoring/psychological-wellbeing-scoring/psychological-wellbeing-scoring.model';
import { OrganizationService } from '../../../organization.service';
import { ActivatedRoute } from '@angular/router';
import { PsychologicalWellbeingScoringService } from '../../../../wellbeing-scoring/psychological-wellbeing-scoring/psychological-wellbeing-scoring.service';

@Component({
  selector: 'app-dashboard-organization-insights-psychological-wellbeing-trend',
  templateUrl:
    './dashboard-organization-insights-psychological-wellbeing-trend.component.html',
  styleUrls: [
    './dashboard-organization-insights-psychological-wellbeing-trend.component.scss',
  ],
})
export class DashboardOrganizationInsightsPsychologicalWellbeingTrendComponent extends DashboardOrganizationBaseScaleTrendComponent {
  chartLabels: string[] = [];
  chartDataset: number[] = [];
  chartData: any;

  options: any;

  constructor(
    public psychologicalWellbeingService: PsychologicalWellbeingScoringService,
    public override organizationService: OrganizationService,
    public override route: ActivatedRoute
  ) {
    super(psychologicalWellbeingService, organizationService, route);
  }

  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    const labels = this.chartLabels;
    this.chartData = {
      labels,
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

  override getTrendByOrganization(organizationId: number, queryParams?: any) {
    this.loading = true;
    this.psychologicalWellbeingService
      .getTrendScoreByOrganization(organizationId, { params: queryParams })
      .subscribe((data) => {
        this.chartLabels = data.map((data) => {
          return data.month.substring(0, 3) + ' ' + data.year;
        });
        this.chartDataset = data.map((data) => {
          return data.score;
        });
        this.loading = false;
        this.initChart();
      });
  }
}
