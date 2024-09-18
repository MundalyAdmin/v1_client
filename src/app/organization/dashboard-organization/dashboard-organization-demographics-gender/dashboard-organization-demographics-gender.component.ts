import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { DemographicService } from '../../../demographic/demographic.service';
import { DemographicData } from '../../../demographic/demographic-gender-data.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ImpactVerificationTypeInsightsEnum } from 'src/app/impact-verification/impact-verification-type-insights/impact-verification-type-insights.enum';
import { DashboardOrganizationService } from '../dashboard-organization.service';

@Component({
  selector: 'app-dashboard-organization-demographics-gender',
  templateUrl: './dashboard-organization-demographics-gender.component.html',
  styleUrls: ['./dashboard-organization-demographics-gender.component.scss'],
})
export class DashboardOrganizationDemographicsGenderComponent extends BaseComponent<any> {
  showChart = false;
  override data: any;
  totalCommunityMembers = 0;
  demographicGenderData: DemographicData | undefined;
  options: any;
  plugins: any = [];

  constructor(
    public demographicService: DemographicService,
    public dashboardOrganizationService: DashboardOrganizationService
  ) {
    super(demographicService);
  }
  override ngOnInit(): void {
    super.ngOnInit();

    this.subscriptions['type_insight'] =
      this.dashboardOrganizationService.typeInsight$.subscribe(
        (typeInsight) => {
          this.getGenderBreakdownByFunderAndTypeInsight(
            this.currentLoggedInOrganization?.id!,
            typeInsight
          );
        }
      );
  }

  getGenderBreakdownByFunderAndTypeInsight(
    funderId: number,
    typeInsight: ImpactVerificationTypeInsightsEnum
  ) {
    this.loading = true;
    this.demographicService
      .getGenderBreakdownByFunderAndTypeInsight(funderId!, typeInsight)
      .subscribe((data) => {
        this.totalCommunityMembers = data
          .map((x) => +x.count)
          .reduce((a, b) => a + b, 0);
        this.initChart(
          data.map((x) => x.name),
          data.map((x) => x.count)
        );
        this.loading = false;
      });
  }

  initChart(labels: string[], data: number[]) {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels,
      datasets: [
        {
          data,
          backgroundColor: ['#1C64F2', '#16BDCA', '#9061F9', '#21CEB9'],
          hoverBackgroundColor: ['#1C64F2', '#16BDCA', '#9061F9', '#21CEB9'],
        },
      ],
    };

    this.options = {
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

    this.plugins = [ChartDataLabels];

    this.showChart = true;
  }
}
