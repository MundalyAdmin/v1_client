import { Component } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { SocialImpactFidelityService } from '../../../../scale/social-impact-fidelity/social-impact-fidelity.service';
import { CommunityPerceptionIndexService } from '../../../../scale/community-perception-index/community-perception-index.service';
import { FacilitationStrategyService } from '../../../../scale/facilitation-strategy/facilitation-strategy.service';
import { InsightsTrendData } from '../insights-trend.data.model';
import { OrganizationService } from '../../../organization.service';
import { ActivatedRoute } from '@angular/router';
import { TypeOrganizationEnum } from '../../../type-organization/type-organization.enum';
import { AuthService } from '../../../../auth/auth.service';
import { ImpactInitiativeService } from '../../../../scale/impact-initiative/impact-initiative.service';

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
    public route: ActivatedRoute,
    public impactInitiativeService: ImpactInitiativeService
  ) {
    super();
  }

  override ngOnInit() {
    super.ngOnInit();

    this.route.queryParams.subscribe((params) => {
      const queryParams: { startDate?: string; endDate?: string } = {};
      if (params['startDate']) {
        queryParams.startDate = params['startDate'];
      }
      if (params['endDate']) {
        queryParams.endDate = params['endDate'];
      }

      this.subscriptions['currentLogOrganization'] =
        this.authService.organization$.subscribe((organization) => {
          if (
            organization?.type_organization_id ===
              TypeOrganizationEnum.IMPACT_FUNDER ||
            organization?.type_organization_id ===
              TypeOrganizationEnum.CORPORATION
          ) {
            this.subscribeToOrganizationData(queryParams);
          } else if (
            organization?.type_organization_id ===
              TypeOrganizationEnum.IMPACT_IMPLEMENTER ||
            organization?.type_organization_id === TypeOrganizationEnum.SUPPLIER
          ) {
            this.subscribeToImpactInitiativeData(queryParams);
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

  subscribeToOrganizationData(queryParams?: any) {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.getFaciliatationStrategyTrendByOrganization(
            organization.id!,
            queryParams
          );
        }
      });
  }

  subscribeToImpactInitiativeData(queryParams?: any) {
    this.subscriptions['impactInitiative'] =
      this.impactInitiativeService.singleData$.subscribe((impactInitiative) => {
        if (impactInitiative) {
          this.getFaciliatationStrategyTrendByImpactInitiative(
            impactInitiative.id!,
            queryParams
          );
        }
      });
  }

  getFaciliatationStrategyTrendByOrganization(
    organizationId: number,
    queryParams?: any
  ) {
    this.loading = true;
    this.facilitationStrategyService
      .getTrendScoreByOrganization(organizationId, { params: queryParams })
      .subscribe(() => {
        this.loading = false;
      });
  }

  getFaciliatationStrategyTrendByImpactInitiative(
    organization: number,
    queryParams?: any
  ) {
    this.loading = true;
    this.facilitationStrategyService
      .getTrendScoreByImpactInitiative(organization, { params: queryParams })
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
        name:
          this.currentLoggedInOrganization?.type_organization
            ?.category_organization_id === this.CategoryOrganizationEnum.IMPACT
            ? 'IFS'
            : 'SFS',
        data: this.impactFidelityTrend,
        color: this.helper.color.getPredictableColor(0),
      },
      {
        name:
          this.currentLoggedInOrganization?.type_organization
            ?.category_organization_id === this.CategoryOrganizationEnum.IMPACT
            ? 'CRS'
            : 'SLS',
        data: this.communityPerceptionTrend,
        color: this.helper.color.getPredictableColor(5),
      },
      {
        name:
          this.currentLoggedInOrganization?.type_organization
            ?.category_organization_id === this.CategoryOrganizationEnum.IMPACT
            ? 'FSS'
            : 'WRS',
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
