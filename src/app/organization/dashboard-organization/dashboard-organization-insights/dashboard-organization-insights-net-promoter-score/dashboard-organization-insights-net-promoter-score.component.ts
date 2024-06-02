import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { NetPromoterScore } from '../../../../scale/impact-story/net-promoter-score.model';
import { ImpactStoryService } from '../../../../scale/impact-story/impact-story.service';
import { OrganizationService } from '../../../organization.service';
import { ActivatedRoute } from '@angular/router';

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
    public route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
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
            this.getNetPromoterScore(organization.id!, queryParams);
          }
        });
    });

    this.subscriptions['netPromoterScore'] =
      this.impactStoryService.netPromoterScore$.subscribe((nps) => {
        if (nps) {
          this.nps = { ...nps, detractors: 150, loyals: 200 };

          this.initChart(this.nps);
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
          label: 'Net Promoter Score',
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

  getNetPromoterScore(organizationId: number, queryParams?: any) {
    this.loading = true;
    this.impactStoryService
      .getOrganizationNetPromoterScore(organizationId, { params: queryParams })
      .subscribe(() => {
        this.loading = false;

        console.log(this.nps);
        console.log(this.loading);
      });
  }
}
