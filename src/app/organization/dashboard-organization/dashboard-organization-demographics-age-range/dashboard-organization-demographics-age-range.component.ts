import { Component, OnInit } from '@angular/core';
import { DemographicService } from '../../../demographic/demographic.service';
import { BaseComponent } from '../../../shared/base-component';
import { DemographicData } from '../../../demographic/demographic-gender-data.service';
import { DashboardOrganizationService } from '../dashboard-organization.service';
import { ImpactVerificationTypeInsightsEnum } from 'src/app/impact-verification/impact-verification-type-insights/impact-verification-type-insights.enum';

@Component({
  selector: 'app-dashboard-organization-demographics-age-range',
  templateUrl: './dashboard-organization-demographics-age-range.component.html',
  styleUrls: ['./dashboard-organization-demographics-age-range.component.scss'],
})
export class DashboardOrganizationDemographicsAgeRangeComponent
  extends BaseComponent<any>
  implements OnInit
{
  children: number = 0;
  adults: number = 0;
  eldery: number = 0;
  unknown: number = 0;

  constructor(
    public demographicService: DemographicService,
    private dashboardOrganizationService: DashboardOrganizationService
  ) {
    super(demographicService);
  }
  demographicAgeData: DemographicData[] = [];

  override ngOnInit(): void {
    super.ngOnInit();

    this.subscriptions['type_insight'] =
      this.dashboardOrganizationService.typeInsight$.subscribe(
        (typeInsight) => {
          this.getDemographicGenderDataByFunder(
            this.currentLoggedInOrganization?.id!,
            typeInsight
          );
        }
      );
  }

  getDemographicGenderDataByFunder(
    funderId: number,
    typeInsight: ImpactVerificationTypeInsightsEnum
  ) {
    this.loading = true;
    this.demographicService
      .getAgeRangeBreakdownByFunderAndTypeInsight(funderId!, typeInsight)
      .subscribe((data) => {
        this.demographicAgeData = data;
        this.demographicAgeData.forEach((data) => {
          if (data.name === 'Unknown') {
            this.unknown += +data.count;
          } else if (data.name === '-18') {
            this.children += +data.count;
          } else if (data.name === '65+') {
            this.eldery += +data.count;
          } else {
            this.adults += +data.count;
          }
        });
        this.loading = false;
      });
  }
}
