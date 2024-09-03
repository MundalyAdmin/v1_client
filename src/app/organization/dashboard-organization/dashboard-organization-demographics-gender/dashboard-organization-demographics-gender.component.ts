import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { DemographicService } from '../../../demographic/demographic.service';
import { DemographicData } from '../../../demographic/demographic-gender-data.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';

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

  constructor(public demographicService: DemographicService) {
    super(demographicService);
  }
  override ngOnInit(): void {
    super.ngOnInit();

    this.getDemographicGenderDataByFunder(
      this.currentLoggedInOrganization?.id!
    );
  }

  getDemographicGenderDataByFunder(funderId: number) {
    this.loading = true;
    this.demographicService
      .getGenderBreakdownByFunder(funderId!)
      .subscribe((data) => {
        this.totalCommunityMembers = data
          .map((x) => +x.count)
          .reduce((a, b) => a + b, 0);
        // this.initDemographicGenderChart(data);
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
          backgroundColor: '#21CEB9',
          labels: {
            title: {
              font: {
                weight: 'bold',
              },
            },
          },
          formatter: (value: any, context: any) => {
            return `${context.chart.data.labels[context.dataIndex]}\n ${value}`;
          },
        },
      },
    };

    this.plugins = [ChartDataLabels];

    this.showChart = true;
  }
}
