import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import { Flowbite } from './../../../../shared/decorators/flowbite.decorator';
import { BaseComponent } from '../../../../shared/base-component';
import { CommunityNeedsService } from '../../../../scale/community-needs/community-needs.service';
import { CommunityNeeds } from '../../../../scale/community-needs/community-needs.model';
import { OrganizationService } from '../../../organization.service';
import { Organization } from '../../../organization.model';
import { debounceTime } from 'rxjs';
import { DeepPartial } from 'chart.js/dist/types/utils';
import { ImpactInitiativeService } from '../../../../scale/impact-initiative/impact-initiative.service';
import { AuthService } from '../../../../auth/auth.service';
import { TypeOrganizationEnum } from '../../../type-organization/type-organization.enum';
import { ImpactInitiative } from '../../../../scale/impact-initiative/impact-initiative.model';

@Component({
  selector: 'app-dashboard-organization-community-needs',
  templateUrl: './dashboard-organization-community-needs.component.html',
  styleUrls: ['./dashboard-organization-community-needs.component.scss'],
})
@Flowbite()
export class DashboardOrganizationCommunityNeedsComponent
  extends BaseComponent<any>
  implements OnInit
{
  organization: Organization | null = null;
  impactInitiative: ImpactInitiative | null = null;
  lastYearComparaisonToggled = false;
  options: any;
  chartDatasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    hoverBackgroundColor?: string;
    borderWidth?: number;
    borderRadius: number;
  }[] = [];
  chartLabels: string[][] = [];
  chartData: any;
  showChart: boolean = true;

  constructor(
    public communityNeedService: CommunityNeedsService,
    public organizationService: OrganizationService,
    public impactInitiativeService: ImpactInitiativeService
  ) {
    super();
  }

  override ngOnInit(): void {
    this.subscribeToData();
  }

  subscribeToData() {
    this.subscriptions['currentlyLoggedOrganization'] =
      this.authService.organization$.subscribe(
        (currentlyLoggedOrganization) => {
          if (
            currentlyLoggedOrganization?.type_organization_id ===
              TypeOrganizationEnum.CORPORATION ||
            currentlyLoggedOrganization?.type_organization_id ===
              TypeOrganizationEnum.IMPACT_FUNDER
          ) {
            this.subscribeToOrganizationData();
          } else if (
            currentlyLoggedOrganization?.type_organization_id ===
              TypeOrganizationEnum.IMPACT_IMPLEMENTER ||
            currentlyLoggedOrganization?.type_organization_id ===
              TypeOrganizationEnum.SUPPLIER
          ) {
            this.subscribeToImpactInitiativeData();
          }
        }
      );
  }

  subscribeToOrganizationData() {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.organization = organization;

          this.getByOrganizationIdAndYear(
            organization.id!,
            new Date().getFullYear()
          );
        }
      });
  }

  subscribeToImpactInitiativeData() {
    this.subscriptions['impactInitiative'] =
      this.impactInitiativeService.singleData$.subscribe((impactInitiative) => {
        if (impactInitiative) {
          this.impactInitiative = impactInitiative;
          this.getByImpactInitiativeIdAndYear(
            impactInitiative.id!,
            new Date().getFullYear()
          );
        }
      });
  }

  lastYearComparison() {
    this.showChart = false;
    if (this.chartDatasets.length > 1) {
      this.chartDatasets.pop();
      this.chartLabels.pop();

      this.initChart();
    } else {
      if (this.impactInitiative) {
        this.getByImpactInitiativeIdAndYear(
          this.impactInitiative.id!,
          new Date().getFullYear() - 1
        );
      } else if (this.organization) {
        this.getByOrganizationIdAndYear(
          this.organization.id!,
          new Date().getFullYear() - 1
        );
      }
    }
    this.lastYearComparaisonToggled = !this.lastYearComparaisonToggled;
  }

  initChart() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.chartData = {
      labels: [
        ...new Set(this.chartLabels.flat().sort((a, b) => a.localeCompare(b))),
      ],
      datasets: this.chartDatasets,
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }

  getByOrganizationIdAndYear(organizationId: number, year: number) {
    this.loading = true;

    this.communityNeedService
      .getByOrganizationAndByYear(organizationId, year)
      .subscribe((response) => {
        if (this.chartDatasets.length === 0) {
          this.addDataToChart('Current year', response);
        } else {
          this.addDataToChart('Last year', response);
        }
        this.loading = false;
      });
  }

  getByImpactInitiativeIdAndYear(impactInitiativeId: number, year: number) {
    this.loading = true;

    this.communityNeedService
      .getByImpactInitiativeAndByYear(impactInitiativeId, year)
      .subscribe((response) => {
        if (this.chartDatasets.length === 0) {
          this.addDataToChart('Current year', response);
        } else {
          this.addDataToChart('Last year', response);
        }
        this.loading = false;
      });
  }

  addDataToChart(serieName: string, data: DeepPartial<CommunityNeeds>[]) {
    this.chartLabels.push(data.map((x) => x.name!));

    if (new Set(this.chartLabels.flat()).size > data.length) {
      // add label as empty community need object
      for (let i = 0; i < this.chartLabels.flat().length; i++) {
        if (!data.map((x) => x.name).includes(this.chartLabels.flat()[i])) {
          data.push(
            this.createCommunityNeedsObject(
              this.chartLabels.flat()[i],
              data[0].year!
            )
          );
        }
      }
    }

    data = data.sort((a, b) => a.name!.localeCompare(b.name!));

    this.chartDatasets.push({
      label: serieName,
      backgroundColor: [
        this.helper.color.getPredictableColor(this.chartDatasets.length),
      ],
      data: data.map((x) => (x.count ? +x.count : 0)),
      borderWidth: 1,
      borderRadius: 10,
    });

    this.initChart();
  }

  createCommunityNeedsObject(name: string, year: string) {
    return {
      name,
      year,
      count: 0,
    } as DeepPartial<CommunityNeeds>;
  }
}
