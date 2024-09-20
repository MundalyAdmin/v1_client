import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { DemographicData } from '../../../demographic/demographic-gender-data.service';
import { DemographicService } from '../../../demographic/demographic.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { DashboardOrganizationService } from '../dashboard-organization.service';
import { ImpactVerificationTypeInsightsEnum } from 'src/app/impact-verification/impact-verification-type-insights/impact-verification-type-insights.enum';
import { ActivatedRoute } from '@angular/router';

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
  chartData: any;
  demographicGenderData: DemographicData | undefined;
  chartOptions: any;
  chartPlugins: any = [];

  constructor(
    private demographicService: DemographicService,
    private dashboardOrganizationService: DashboardOrganizationService,
    private route: ActivatedRoute
  ) {
    super(demographicService);
  }
  override ngOnInit(): void {
    super.ngOnInit();

    this.subscribeToTypeInsight();

    this.initChartOptions();
  }

  private subscribeToTypeInsight() {
    this.subscriptions['type-insights'] =
      this.dashboardOrganizationService.typeInsight$.subscribe(
        (typeInsight) => {
          this.route.queryParams.subscribe((params) => {
            this.getRelationshipStatusData(
              this.currentLoggedInOrganization?.id!,
              typeInsight,
              params
            );
          });
        }
      );
  }

  getRelationshipStatusData(
    funderId: number,
    typeInsight: ImpactVerificationTypeInsightsEnum,
    params?: any
  ) {
    this.loading = true;
    this.demographicService
      .getRelationshipStatusBreakdownByFunderAndTypeInsight(
        funderId!,
        typeInsight,
        params
      )
      .subscribe((data) => {
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
          label: 'Relationship Status',
          data,
          backgroundColor: ['#1C64F5', '#16CDCA', '#90A1F9', '#21BEB9'],
          hoverBackgroundColor: ['#1C64F5', '#16CDCA', '#90A1F9', '#21BEB9'],
        },
      ],
    };

    this.showChart = true;
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
          labels: {
            title: {
              font: {
                weight: 'bold',
                color: textColor,
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
  }
}
