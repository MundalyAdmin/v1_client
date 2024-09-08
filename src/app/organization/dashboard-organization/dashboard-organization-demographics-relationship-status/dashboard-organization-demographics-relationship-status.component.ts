import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { DemographicData } from '../../../demographic/demographic-gender-data.service';
import { DemographicService } from '../../../demographic/demographic.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-dashboard-organization-demographics-relationship-status',
  templateUrl:
    './dashboard-organization-demographics-relationship-status.component.html',
  styleUrls: [
    './dashboard-organization-demographics-relationship-status.component.scss',
  ],
})
export class DashboardOrganizationDemographicsRelationshipStatusComponent extends BaseComponent<any> {
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

    this.getDemographicRelationshipStatusDataByFunder(
      this.currentLoggedInOrganization?.id!
    );
  }

  getDemographicRelationshipStatusDataByFunder(funderId: number) {
    this.loading = true;
    this.demographicService
      .getRelationshipStatusBreakdownByFunder(funderId!)
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
          label: 'Relationship Status',
          data,
          backgroundColor: ['#1C64F5', '#16CDCA', '#90A1F9', '#21BEB9'],
          hoverBackgroundColor: ['#1C64F5', '#16CDCA', '#90A1F9', '#21BEB9'],
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
