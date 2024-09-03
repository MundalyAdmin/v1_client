import { Component, OnInit } from '@angular/core';
import { DemographicService } from '../../../demographic/demographic.service';
import { BaseComponent } from '../../../shared/base-component';
import { DemographicData } from '../../../demographic/demographic-gender-data.service';

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

  constructor(public demographicService: DemographicService) {
    super(demographicService);
  }
  demographicAgeData: DemographicData[] = [];

  override ngOnInit(): void {
    super.ngOnInit();
    this.getDemographicGenderDataByFunder(
      this.currentLoggedInOrganization?.id!
    );
  }

  getDemographicGenderDataByFunder(funderId: number) {
    this.loading = true;
    this.demographicService
      .getAgeRangeBreakdownByFunder(funderId!)
      .subscribe((data) => {
        this.demographicAgeData = data;
        this.demographicAgeData.forEach((data) => {
          if (data.name === '-18') {
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
