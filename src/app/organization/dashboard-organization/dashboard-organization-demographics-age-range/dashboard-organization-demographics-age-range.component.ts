import { Component, OnInit } from '@angular/core';
import { DemographicService } from '../../../demographic/demographic.service';
import { BaseComponent } from '../../../shared/base-component';
import { DemographicData } from '../../../demographic/demographic-gender-data.service';
import { DashboardOrganizationService } from '../dashboard-organization.service';
import { ImpactVerificationTypeInsightsEnum } from 'src/app/impact-verification/impact-verification-type-insights/impact-verification-type-insights.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-organization-demographics-age-range',
  templateUrl: './dashboard-organization-demographics-age-range.component.html',
  styleUrls: ['./dashboard-organization-demographics-age-range.component.scss'],
})
export class DashboardOrganizationDemographicsAgeRangeComponent
  extends BaseComponent<any>
  implements OnInit
{
  ageRangeData = {
    children: 0,
    adults: 0,
    eldery: 0,
    unknown: 0,
  };

  constructor(
    public demographicService: DemographicService,
    private dashboardOrganizationService: DashboardOrganizationService,
    private route: ActivatedRoute
  ) {
    super(demographicService);
  }
  demographicAgeData: DemographicData[] = [];

  override ngOnInit(): void {
    super.ngOnInit();

    this.subscribeToTypeInsight();
  }

  subscribeToTypeInsight() {
    this.subscriptions['type_insight'] =
      this.dashboardOrganizationService.typeInsight$.subscribe(
        (typeInsight) => {
          this.route.queryParams.subscribe((params) => {
            this.getAgeRangeData(
              this.currentLoggedInOrganization?.id!,
              typeInsight,
              params
            );
          });
        }
      );
  }

  getAgeRangeData(
    funderId: number,
    typeInsight: ImpactVerificationTypeInsightsEnum,
    params?: any
  ) {
    this.loading = true;
    this.demographicService
      .getAgeRangeBreakdownByFunderAndTypeInsight(
        funderId!,
        typeInsight,
        params
      )
      .subscribe((data) => {
        this.ageRangeData = {
          children: 0,
          adults: 0,
          eldery: 0,
          unknown: 0,
        };
        this.demographicAgeData = data;
        this.demographicAgeData.forEach((data) => {
          if (data.name === 'Unknown') {
            this.ageRangeData.unknown += +data.count;
          } else if (data.name === '-18') {
            this.ageRangeData.children += +data.count;
          } else if (data.name === '65+') {
            this.ageRangeData.eldery += +data.count;
          } else {
            this.ageRangeData.adults += +data.count;
          }
        });
        this.loading = false;
      });
  }
}
