import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ImpactVerificationTypeInsightsEnum } from 'src/app/impact-verification/impact-verification-type-insights/impact-verification-type-insights.enum';
import { WellbeingScoringService } from 'src/app/wellbeing-scoring/wellbeing-scoring.service';
import { PortfolioRiskScore } from '../../../scale/models/portfolio-risk-score.model';
import { ScaleService } from '../../../scale/scale.service';
import { BaseComponent } from '../../../shared/base-component';
import { DashboardOrganizationService } from '../dashboard-organization.service';

@Component({
  selector: 'app-dashboard-organization-overview-portfolio-risk',
  templateUrl:
    './dashboard-organization-overview-portfolio-risk.component.html',
  styleUrls: [
    './dashboard-organization-overview-portfolio-risk.component.scss',
  ],
})
export class DashboardOrganizationOverviewPortfolioRiskComponent
  extends BaseComponent<PortfolioRiskScore>
  implements OnInit
{
  chartData: any;
  plugins: any = [];
  options: any;
  showChart: boolean = false;

  constructor(
    public scaleService: ScaleService,
    private readonly wellbeingScoringService: WellbeingScoringService,
    private readonly dashboardOrganizationService: DashboardOrganizationService,
    public route: ActivatedRoute
  ) {
    super();
  }

  override ngOnInit() {
    super.ngOnInit();

    this.subscriptions['type-insights'] =
      this.dashboardOrganizationService.typeInsight$.subscribe(
        (typeInsights) => {
          this.route.queryParams.subscribe((params) => {
            if (
              typeInsights === ImpactVerificationTypeInsightsEnum.DUE_DILIGENCE
            ) {
              this.getDueDiligencePortfolioRiskScore(params);
            } else {
              this.getWellbeingPortfolioRiskScore(params);
            }
          });
        }
      );
  }

  initChart(labels: string[], data: number[]) {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.chartData = {
      labels,
      datasets: [
        {
          data,
          backgroundColor: ['#07046B', '#07046B99', '#07046B66', '#07046B33'],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--blue-100'),
            documentStyle.getPropertyValue('--blue-800'),
            documentStyle.getPropertyValue('--blue-600'),
          ],
        },
      ],
    };

    this.options = {
      cutout: '50%',
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
        datalabels: {
          color: 'white',
          backgroundColor: '#21CEB9',
          labels: {
            title: {
              font: {
                weight: 'bold',
              },
            },
          },
          formatter: (value: any, context: any) => {
            return `${
              context.chart.data.labels[context.dataIndex]
            }\n ${value}%`;
          },
        },
      },
    };

    this.plugins = [ChartDataLabels];
    this.showChart = true;

    console.log('chartData', this.chartData);
    console.log('loading', this.loading);
    console.log();
  }

  private getDueDiligencePortfolioRiskScore(params?: any) {
    this._getPortfolioRiskScore(this.scaleService, params);
  }

  private getWellbeingPortfolioRiskScore(params?: any) {
    this._getPortfolioRiskScore(this.wellbeingScoringService, params);
  }

  private _getPortfolioRiskScore(
    service: ScaleService | WellbeingScoringService,
    params?: any
  ) {
    console.log('params', params);
    this.loading = true;
    service
      .getPortfolioRiskScoreByFunderId(
        this.currentLoggedInOrganization?.id!,
        params
      )
      .subscribe((response: PortfolioRiskScore[]) => {
        this.loading = false;

        this.initChart(
          response.filter((x) => x.percentage > 0).map((x) => x.label),
          response.filter((x) => x.percentage > 0).map((x) => x.percentage)
        );
      });
  }
}
