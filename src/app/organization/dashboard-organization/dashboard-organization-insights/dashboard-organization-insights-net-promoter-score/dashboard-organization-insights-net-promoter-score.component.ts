import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { NetPromoterScore } from '../../../../scale/impact-story/net-promoter-score.model';
import { ImpactStoryService } from '../../../../scale/impact-story/impact-story.service';
import { OrganizationService } from '../../../organization.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeOrganizationEnum } from '../../../type-organization/type-organization.enum';
import { AuthService } from '../../../../auth/auth.service';
import { ImpactInitiativeService } from '../../../../scale/impact-initiative/impact-initiative.service';
import { CategoryOrganizationEnum } from '../../../category-organization/category-organization.enum';

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
    public impactInitiativeService: ImpactInitiativeService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    super();
  }

  override ngOnInit(): void {
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

    this.subscriptions['netPromoterScore'] =
      this.impactStoryService.netPromoterScore$.subscribe((nps) => {
        if (nps) {
          this.nps = {
            ...nps,
            detractors: nps.detractors,
            loyals: nps.loyals,
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
          label:
            this.currentLoggedInOrganization?.type_organization
              ?.category_organization_id === CategoryOrganizationEnum.IMPACT
              ? 'Community Satisfaction Score'
              : 'Community Alignment Score',
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
      .subscribe({
        next: () => {
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this.router.navigate(['./'], {
            relativeTo: this.route,
          });
        },
      });
  }
}
