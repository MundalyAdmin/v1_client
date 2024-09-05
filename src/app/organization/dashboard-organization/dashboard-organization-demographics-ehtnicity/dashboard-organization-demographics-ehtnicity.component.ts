import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { DemographicData } from '../../../demographic/demographic-gender-data.service';
import { DemographicService } from '../../../demographic/demographic.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-dashboard-organization-demographics-ehtnicity',
  templateUrl: './dashboard-organization-demographics-ehtnicity.component.html',
  styleUrls: ['./dashboard-organization-demographics-ehtnicity.component.scss'],
})
export class DashboardOrganizationDemographicsEhtnicityComponent extends BaseComponent<any> {
  showChart = false;
  override data: any;
  demographicGenderData: DemographicData | undefined;
  options: any;
  plugins: any = [];

  constructor(public demographicService: DemographicService) {
    super(demographicService);
  }
  override ngOnInit(): void {
    super.ngOnInit();

    this.getDemographicEthnicityDataByFunder(
      this.currentLoggedInOrganization?.id!
    );
  }

  getDemographicEthnicityDataByFunder(funderId: number) {
    this.loading = true;
    this.demographicService
      .getEthnicityBreakdownByFunder(funderId!)
      .subscribe((data) => {
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
          backgroundColor: [
            '#1C64F2',
            '#16BDCA',
            '#9061F9',
            '#21CEB9',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
          ],
          hoverBackgroundColor: [
            '#1C64F2',
            '#16BDCA',
            '#9061F9',
            '#21CEB9',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
          ],
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
          // backgroundColor: '#21CEB9',
          anchor: 'center',
          rotation: -10,
          display: true,
          clamp: true,
          labels: {
            title: {
              font: {
                weight: 'bold',
                size: 12,
              },
            },
          },
          formatter: (value: any, context: any) => {
            return `${context.chart.data.labels[context.dataIndex]}`;
          },
        },
      },
    };

    this.plugins = [ChartDataLabels];

    this.showChart = true;
  }
}
