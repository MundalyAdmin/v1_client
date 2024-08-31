import { Component } from '@angular/core';
import { DashboardOrganizationInsightsScalesTrendComponent } from '../../dashboard-organization-insights/dashboard-organization-insights-scales-trend/dashboard-organization-insights-scales-trend.component';
import { InsightsTrendData } from '../../dashboard-organization-insights/insights-trend.data.model';
import { BaseComponent } from '../../../../shared/base-component';
import { PhysicalWellbeingScoringService } from '../../../../wellbeing-scoring/physical-wellbeing-scoring/physical-wellbeing-scoring.service';
import { PsychologicalWellbeingScoring } from '../../../../wellbeing-scoring/psychological-wellbeing-scoring/psychological-wellbeing-scoring.model';
import { PsychologicalWellbeingScoringService } from '../../../../wellbeing-scoring/psychological-wellbeing-scoring/psychological-wellbeing-scoring.service';
import { EnvironmentWellbeingScoringService } from '../../../../wellbeing-scoring/environment-wellbeing-scoring/environment-wellbeing-scoring.service';
import { SocialWellbeingScoringService } from '../../../../wellbeing-scoring/social-wellbeing-scoring/social-wellbeing-scoring.service';
import { OrganizationService } from '../../../organization.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-organization-insights-wellbeing-trend',
  templateUrl:
    './dashboard-organization-insights-wellbeing-trend.component.html',
  styleUrls: [
    './dashboard-organization-insights-wellbeing-trend.component.scss',
  ],
})
export class DashboardOrganizationInsightsWellbeingTrendComponent extends BaseComponent<any> {
  chartData: any;
  chartLabels: string[] = [];
  options: any;
  physicalWellbeingTrend: InsightsTrendData[] = [];
  psychologicalWellbeingTrend: InsightsTrendData[] = [];
  environmentalWellbeingTrend: InsightsTrendData[] = [];
  socialWellbeingTrend: InsightsTrendData[] = [];

  constructor(
    public physicalWellbeingScoringServince: PhysicalWellbeingScoringService,
    public psychologicalWellbeingScoringService: PsychologicalWellbeingScoringService,
    public environmentWellbeingScoringService: EnvironmentWellbeingScoringService,
    public socialWellbeingScoringService: SocialWellbeingScoringService,
    public organizationService: OrganizationService,
    public route: ActivatedRoute
  ) {
    super();
  }

  override ngOnInit() {
    super.ngOnInit();

    this.route.queryParams.subscribe((params) => {
      const queryParams: {
        startDate?: string;
        endDate?: string;
        location?: string;
      } = {};
      if (params['startDate']) {
        queryParams.startDate = params['startDate'];
      }
      if (params['endDate']) {
        queryParams.endDate = params['endDate'];
      }

      if (params['community']) {
        queryParams.location = params['community'];
      }

      this.subscribeToOrganizationData(queryParams);
    });

    this.subscriptions['physicalWellbeingTrend'] =
      this.physicalWellbeingScoringServince.trends$.subscribe((trends) => {
        this.physicalWellbeingTrend = trends;
        this.initChart();
      });

    this.subscriptions['psychologicalWellbeingTrend'] =
      this.psychologicalWellbeingScoringService.trends$.subscribe((trends) => {
        this.psychologicalWellbeingTrend = trends;
        this.initChart();
      });

    this.subscriptions['environmentalWellbeingTrend'] =
      this.environmentWellbeingScoringService.trends$.subscribe((trends) => {
        this.environmentalWellbeingTrend = trends;
        this.initChart();
      });

    this.subscriptions['socialWellbeingTrend'] =
      this.socialWellbeingScoringService.trends$.subscribe((trends) => {
        this.socialWellbeingTrend = trends;
        this.initChart();
      });
  }

  subscribeToOrganizationData(queryParams?: any) {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.getEnvironmentalWellbeingScoringTrendByOrganization(
            organization.id!,
            queryParams
          );

          this.getSocialWellbeingScoringTrendByOrganization(
            organization.id!,
            queryParams
          );
        }
      });
  }

  getEnvironmentalWellbeingScoringTrendByOrganization(
    organizationId: number,
    queryParams?: any
  ) {
    this.loading = true;
    this.environmentWellbeingScoringService
      .getTrendScoreByOrganization(organizationId, { params: queryParams })
      .subscribe(() => {
        this.loading = false;
      });
  }

  getSocialWellbeingScoringTrendByOrganization(
    organizationId: number,
    queryParams?: any
  ) {
    this.loading = true;
    this.socialWellbeingScoringService
      .getTrendScoreByOrganization(organizationId, { params: queryParams })
      .subscribe(() => {
        this.loading = false;
      });
  }

  updateChartLabels(trends: InsightsTrendData[]) {
    this.chartLabels = [
      // Remove duplicates
      ...new Set(
        trends
          // Convert to date
          .map((trend) => new Date(` 01 ${trend.month} ${trend.year}`))
          // // Sort by date
          .sort((a, b) => a.getTime() - b.getTime())
          // // Convert back to string
          .map((label) =>
            label.toLocaleString('default', { month: 'short', year: 'numeric' })
          )
      ),
    ];
  }

  getChartDataSets() {
    const trends = [
      {
        name: 'Physical',
        data: this.physicalWellbeingTrend,
        color: this.helper.color.getPredictableColor(0),
      },
      {
        name: 'Psychological',
        data: this.psychologicalWellbeingTrend,
        color: this.helper.color.getPredictableColor(5),
      },
      {
        name: 'Environmental',
        data: this.environmentalWellbeingTrend,
        color: this.helper.color.getPredictableColor(2),
      },
      {
        name: 'Social',
        data: this.socialWellbeingTrend,
        color: this.helper.color.getPredictableColor(4),
      },
    ];

    const datasets: any[] = [];

    trends.forEach((trend) => {
      if (trend.data.length) {
        const dataset = this.createChartDataSet(
          trend.name,
          trend.color,
          trend.data
        );

        datasets.push(dataset);
      }
    });

    return datasets;
  }

  createChartDataSet(
    dataSetName: string,
    color: string,
    trendData: InsightsTrendData[]
  ) {
    return {
      label: dataSetName,
      fill: false,
      borderColor: color,
      yAxisID: 'y',
      tension: 0.4,
      spanGaps: true,
      data: this.chartLabels.map((chartLabel) => {
        const trend = trendData.find((trend) => {
          const trendMonth = trend.month.substring(0, 3);
          const trendYear = +trend.year;
          const chartLabelMonth = chartLabel.split(' ')[0];
          const chartLabelYear = +chartLabel.split(' ')[1];

          return trendMonth === chartLabelMonth && trendYear === chartLabelYear;
        });
        return trend ? trend.score : null;
      }),
    };
  }

  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.updateChartLabels([
      ...this.physicalWellbeingTrend,
      ...this.psychologicalWellbeingTrend,
      ...this.environmentalWellbeingTrend,
      ...this.socialWellbeingTrend,
    ]);

    const chartDataSets = this.getChartDataSets();

    this.chartData = {
      labels: this.chartLabels,
      datasets: chartDataSets,
    };

    this.options = {
      stacked: false,
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
            maxTicksLimit: 6,
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          min: 0,
          max: 100,
          type: 'linear',
          display: true,
          position: 'left',
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
