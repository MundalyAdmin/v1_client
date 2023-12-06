import { Component } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
import { OrganizationService } from '../../../../../organization/organization.service';
import { BaseSingleComponent } from '../../../../../shared/base-component';
import { Organization } from '../../../../../organization/organization.model';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-organization-new-style-rating-overview',
  templateUrl: './organization-new-style-rating-overview.component.html',
  styleUrls: ['./organization-new-style-rating-overview.component.scss'],
})
export class OrganizationNewStyleRatingOverviewComponent extends BaseSingleComponent<Organization> {
  constructor(public organizationService: OrganizationService) {
    super(organizationService);
  }

  public chartOptions: ChartOptions = {
    series: [
      {
        name: 'My-series',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    chart: {
      height: 350,
      type: 'bar',
    },
    title: {
      text: 'My First Angular Chart',
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
      ],
    },
  };
}
