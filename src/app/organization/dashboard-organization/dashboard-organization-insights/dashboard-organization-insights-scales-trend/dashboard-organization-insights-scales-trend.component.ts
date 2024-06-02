import { Component } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { SocialImpactFidelityService } from '../../../../scale/social-impact-fidelity/social-impact-fidelity.service';
import { CommunityPerceptionIndexService } from '../../../../scale/community-perception-index/community-perception-index.service';
import { FacilitationStrategyService } from '../../../../scale/facilitation-strategy/facilitation-strategy.service';
import { InsightsTrendData } from '../insights-trend.data.model';
import { min } from 'rxjs';
import { OrganizationService } from '../../../organization.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-organization-insights-scales-trend',
  templateUrl: './dashboard-organization-insights-scales-trend.component.html',
  styleUrls: ['./dashboard-organization-insights-scales-trend.component.scss'],
})
export class DashboardOrganizationInsightsScalesTrendComponent extends BaseComponent<any> {
  chartData: any;
  chartLabels: string[] = [];
  options: any;
  impactFidelityTrend: InsightsTrendData[] = [];
  communityPerceptionTrend: InsightsTrendData[] = [];
  facilitationStrategyTrend: InsightsTrendData[] = [];

  constructor(
    public impactFidelityService: SocialImpactFidelityService,
    public communityPerceptionService: CommunityPerceptionIndexService,
    public facilitationStrategyService: FacilitationStrategyService,
    public organizationService: OrganizationService,
    public route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const queryParams: { startDate?: string; endDate?: string } = {};
      if (params['startDate']) {
        queryParams.startDate = params['startDate'];
      }
      if (params['endDate']) {
        queryParams.endDate = params['endDate'];
      }
      this.subscriptions['organization'] =
        this.organizationService.singleData$.subscribe((organization) => {
          if (organization) {
            this.getFaciliatationStrategyTrendByOrganization(
              organization.id!,
              queryParams
            );
          }
        });
    });

    this.subscriptions['impactFidelityTrend'] =
      this.impactFidelityService.trends$.subscribe((trends) => {
        this.impactFidelityTrend = trends;
        this.initChart();
      });

    this.communityPerceptionService.trends$.subscribe((trends) => {
      this.communityPerceptionTrend = trends;
      this.initChart();
    });

    this.facilitationStrategyService.trends$.subscribe((trends) => {
      this.facilitationStrategyTrend = trends;
      this.initChart();
    });
  }

  getFaciliatationStrategyTrendByOrganization(
    organization: number,
    queryParams?: any
  ) {
    this.loading = true;
    this.facilitationStrategyService
      .getTrendScore(organization, { params: queryParams })
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
        name: 'IFS',
        data: this.impactFidelityTrend,
        color: this.helper.color.getPredictableColor(0),
      },
      {
        name: 'CPI',
        data: this.communityPerceptionTrend,
        color: this.helper.color.getPredictableColor(5),
      },
      {
        name: 'FS',
        data: this.facilitationStrategyTrend,
        color: this.helper.color.getPredictableColor(2),
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
      ...this.impactFidelityTrend,
      ...this.communityPerceptionTrend,
      ...this.facilitationStrategyTrend,
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
