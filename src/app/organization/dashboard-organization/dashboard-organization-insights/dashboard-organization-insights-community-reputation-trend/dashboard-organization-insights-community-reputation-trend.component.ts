import { Component, OnInit } from '@angular/core';
import { CommunityPerceptionIndexService } from '../../../../scale/community-perception-index/community-perception-index.service';
import { BaseComponent } from '../../../../shared/base-component';
import { OrganizationService } from '../../../organization.service';
import { InsightsTrendData } from '../insights-trend.data.model';
import { ActivatedRoute } from '@angular/router';
import { TypeOrganizationEnum } from '../../../type-organization/type-organization.enum';
import { AuthService } from '../../../../auth/auth.service';
import { ImpactInitiativeService } from '../../../../scale/impact-initiative/impact-initiative.service';

@Component({
  selector: 'app-dashboard-organization-insights-community-reputation-trend',
  templateUrl:
    './dashboard-organization-insights-community-reputation-trend.component.html',
  styleUrls: [
    './dashboard-organization-insights-community-reputation-trend.component.scss',
  ],
})
export class DashboardOrganizationInsightsCommunityReputationTrendComponent
  extends BaseComponent<InsightsTrendData>
  implements OnInit
{
  chartLabels: string[] = [];
  chartDataset: number[] = [];
  chartData: any;

  options: any;

  constructor(
    public organizationService: OrganizationService,
    public communityPerceptionService: CommunityPerceptionIndexService,
    public impactInitiativeService: ImpactInitiativeService,
    public route: ActivatedRoute
  ) {
    super();
  }

  override ngOnInit(): void {
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
  }

  subscribeToOrganizationData(queryParams?: any) {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.getTrendByOrganization(organization.id!, queryParams);
        }
      });
  }

  subscribeToImpactInitiativeData(queryParams?: any) {
    this.subscriptions['impactInitiative'] =
      this.impactInitiativeService.singleData$.subscribe((impactInitiative) => {
        if (impactInitiative) {
          this.getTrendByImpactInitiative(impactInitiative.id!, queryParams);
        }
      });
  }

  getTrendByOrganization(organizationId: number, queryParams?: any) {
    this.loading = true;
    this.communityPerceptionService
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

  getTrendByImpactInitiative(impactInitiativeId: number, queryParams?: any) {
    this.loading = true;
    this.communityPerceptionService
      .getTrendScoreByImpactInitiative(impactInitiativeId, {
        params: queryParams,
      })
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

  initChart() {
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
          label: 'Avg. Community Reputation',
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
