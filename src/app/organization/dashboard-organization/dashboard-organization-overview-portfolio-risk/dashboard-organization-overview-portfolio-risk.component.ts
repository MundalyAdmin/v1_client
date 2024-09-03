import { Component, OnInit } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { BaseComponent } from '../../../shared/base-component';
import { PortfolioRiskScore } from '../../../scale/models/portfolio-risk-score.model';
import { ScaleService } from '../../../scale/scale.service';

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
  override data: any;
  plugins: any = [];
  options: any;
  showChart: boolean = false;

  constructor(public scaleService: ScaleService) {
    super();
  }

  override ngOnInit() {
    super.ngOnInit();

    this.getPortfolioRiskScore();
  }

  initChart(labels: string[], data: number[]) {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const lineTextColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    this.data = {
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
  }

  getPortfolioRiskScore() {
    this.loading = true;
    this.scaleService
      .getPortfolioRiskScoreByFunderId(this.currentLoggedInOrganization?.id!)
      .subscribe((response: PortfolioRiskScore[]) => {
        this.loading = false;

        this.initChart(
          response.filter((x) => x.percentage > 0).map((x) => x.label),
          response.filter((x) => x.percentage > 0).map((x) => x.percentage)
        );
      });
  }
}
