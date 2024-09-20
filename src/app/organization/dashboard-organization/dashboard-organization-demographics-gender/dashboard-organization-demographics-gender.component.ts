import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { DemographicService } from '../../../demographic/demographic.service';
import { DemographicData } from '../../../demographic/demographic-gender-data.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ImpactVerificationTypeInsightsEnum } from 'src/app/impact-verification/impact-verification-type-insights/impact-verification-type-insights.enum';
import { DashboardOrganizationService } from '../dashboard-organization.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-organization-demographics-gender',
  templateUrl: './dashboard-organization-demographics-gender.component.html',
  styleUrls: ['./dashboard-organization-demographics-gender.component.scss'],
})
export class DashboardOrganizationDemographicsGenderComponent extends BaseComponent<any> {
  showChart = false;
  chartData: any;
  totalCommunityMembers = 0;
  demographicGenderData: DemographicData | undefined;
  chartOptions: any;
  chartPlugins: any = [];

  constructor(
    public demographicService: DemographicService,
    public dashboardOrganizationService: DashboardOrganizationService,
    private route: ActivatedRoute
  ) {
    super(demographicService);
  }
  override ngOnInit(): void {
    super.ngOnInit();

    this.subscribeToData();

    this.initChartOptions();
  }

  subscribeToData() {
    this.subscriptions['type_insight'] =
      this.dashboardOrganizationService.typeInsight$.subscribe(
        (typeInsight) => {
          this.route.queryParams.subscribe((params) => {
            this.getGenderBreakdownByFunderAndTypeInsight(
              this.currentLoggedInOrganization?.id!,
              typeInsight,
              params
            );
          });
        }
      );
  }

  getGenderBreakdownByFunderAndTypeInsight(
    funderId: number,
    typeInsight: ImpactVerificationTypeInsightsEnum,
    params?: any
  ) {
    this.loading = true;
    this.demographicService
      .getGenderBreakdownByFunderAndTypeInsight(funderId!, typeInsight, params)
      .subscribe((data) => {
        this.totalCommunityMembers = data
          .map((x) => +x.count)
          .reduce((a, b) => a + b, 0);

        this.updateChartData(
          data.map((x) => x.name),
          data.map((x) => x.count)
        );

        this.loading = false;
      });
  }

  updateChartData(labels: string[], data: number[]) {
    this.chartData = {
      labels,
      datasets: [
        {
          data,
          backgroundColor: ['#1C64F2', '#16BDCA', '#9061F9', '#21CEB9'],
          hoverBackgroundColor: ['#1C64F2', '#16BDCA', '#9061F9', '#21CEB9'],
        },
      ],
    };
  }

  initChartOptions() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor,
          },
        },
        datalabels: {
          color: 'white',

          display: 'auto',
          // backgroundColor: '#21CEB9',
          labels: {
            title: {
              font: {
                weight: 'bold',
              },
            },
          },
          formatter: (value: any, context: any) => {
            return `${value}`;
          },
        },
      },
    };

    this.chartPlugins = [ChartDataLabels];

    this.showChart = true;
  }
}
