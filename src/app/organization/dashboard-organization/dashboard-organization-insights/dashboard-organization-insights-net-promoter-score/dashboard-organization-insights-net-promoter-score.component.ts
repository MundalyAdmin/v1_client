import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { NetPromoterScore } from '../../../../scale/impact-story/net-promoter-score.model';
import { ImpactStoryService } from '../../../../scale/impact-story/impact-story.service';
import { OrganizationService } from '../../../organization.service';
import { ActivatedRoute } from '@angular/router';
import { TypeOrganizationEnum } from '../../../type-organization/type-organization.enum';
import { AuthService } from '../../../../auth/auth.service';
import { ImpactInitiativeService } from '../../../../scale/impact-initiative/impact-initiative.service';

@Component({
  selector: 'app-dashboard-organization-insights-net-promoter-score',
  templateUrl:
    './dashboard-organization-insights-net-promoter-score.component.html',
  styleUrls: [
    './dashboard-organization-insights-net-promoter-score.component.scss',
  ],
})
export class DashboardOrganizationInsightsNetPromoterScoreComponent
  extends BaseComponent<NetPromoterScore>
  implements OnInit
{
  nps: NetPromoterScore | undefined;

  chartData: any;
  options: any;

  constructor(
    public impactStoryService: ImpactStoryService,
    public organizationService: OrganizationService,
    public authService: AuthService,
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
              TypeOrganizationEnum.CORPORATE
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

    this.subscriptions['netPromoterScore'] =
      this.impactStoryService.netPromoterScore$.subscribe((nps) => {
        if (nps) {
          this.nps = {
            ...nps,
            detractors: nps.detractors + 150,
            loyals: nps.loyals + 200,
          };

          this.initChart(this.nps);
        }
      });
  }

  subscribeToOrganizationData(queryParams?: any) {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.getNetPromoterScoreByOrganization(organization.id!, queryParams);
        }
      });
  }

  subscribeToImpactInitiativeData(queryParams?: any) {
    this.subscriptions['impactInitiative'] =
      this.impactInitiativeService.singleData$.subscribe((impactInitiative) => {
        if (impactInitiative) {
          this.getNetPromoterScoreByImpactInitiative(
            impactInitiative.id!,
            queryParams
          );
        }
      });
  }

  initChart(nps: NetPromoterScore) {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.chartData = {
      labels: Object.keys(nps).map(
        (key) => key.charAt(0).toUpperCase() + key.slice(1)
      ),
      datasets: [
        {
          label: 'Community Satisfaction Score',
          backgroundColor: ['#c1ddff', '#4f46e5', '#2196f3'],
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          data: [...Object.values(nps)],
        },
      ],
    };

    this.options = {
      indexAxis: 'y',
      maintainAspectRatio: false,
      aspectRatio: 0.8,
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
            font: {
              weight: 500,
            },
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }

  getNetPromoterScoreByOrganization(organizationId: number, queryParams?: any) {
    this.loading = true;
    this.impactStoryService
      .getNetPromoterScoreByOrganization(organizationId, {
        params: queryParams,
      })
      .subscribe(() => {
        this.loading = false;
      });
  }

  getNetPromoterScoreByImpactInitiative(
    impactInitiativeId: number,
    queryParams?: any
  ) {
    this.loading = true;
    this.impactStoryService
      .getNetPromoterScoreByImpactInitiative(impactInitiativeId, {
        params: queryParams,
      })
      .subscribe(() => {
        this.loading = false;
      });
  }
}
