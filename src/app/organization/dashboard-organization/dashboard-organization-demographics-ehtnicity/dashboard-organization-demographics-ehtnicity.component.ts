import { initCarousels } from 'flowbite';
import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { DemographicData } from '../../../demographic/demographic-gender-data.service';
import { DemographicService } from '../../../demographic/demographic.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ImpactVerificationTypeInsightsEnum } from 'src/app/impact-verification/impact-verification-type-insights/impact-verification-type-insights.enum';
import { DashboardOrganizationService } from '../dashboard-organization.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-organization-demographics-ehtnicity',
  templateUrl: './dashboard-organization-demographics-ehtnicity.component.html',
  styleUrls: ['./dashboard-organization-demographics-ehtnicity.component.scss'],
})
export class DashboardOrganizationDemographicsEhtnicityComponent extends BaseComponent<any> {
  showChart = false;
  chartData: any;
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

    this.subscribeToTypeInsight();

    this.initChartOptions();
  }

  subscribeToTypeInsight() {
    this.subscriptions['type_insight'] =
      this.dashboardOrganizationService.typeInsight$.subscribe(
        (typeInsight) => {
          this.route.queryParams.subscribe((params) => {
            this.getEthnicityBreakdownByFunderAndTypeInsight(
              this.currentLoggedInOrganization?.id!,
              typeInsight,
              params
            );
          });
        }
      );
  }

  getEthnicityBreakdownByFunderAndTypeInsight(
    funderId: number,
    typeInsight: ImpactVerificationTypeInsightsEnum,
    params?: any
  ) {
    this.loading = true;
    this.demographicService
      .getEthnicityBreakdownByFunderAndTypeInsight(
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
            return `${value}`;
          },
        },
      },
    };

    this.chartPlugins = [ChartDataLabels];
  }
}
