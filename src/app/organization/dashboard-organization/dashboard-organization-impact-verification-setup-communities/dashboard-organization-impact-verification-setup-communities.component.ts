import { Component } from '@angular/core';
import { ImpactVerificationSetupService } from '../../../impact-verification/impact-verification-setup/impact-verification-setup.service';
import { DashboardOrganizationImpactVerificationSetupBaseComponent } from '../dashboard-organization-impact-verification-setup-base/dashboard-organization-impact-verification-setup-base.component';
import { ImpactVerificationPricingTierService } from '../../../impact-verification/impact-verification-pricing-tier/impact-verification-pricing-tier.service';
import { CommunityReachLevelService } from '../../../impact-verification/community-reach-level/community-reach-level.service';
import { ImpactVerificationTypeInsightsService } from '../../../impact-verification/impact-verification-type-insights/impact-verification-type-insights.service';
import { ImpactVerificationTypeInsights } from '../../../impact-verification/impact-verification-type-insights/impact-verification-type-insights.model';
import { ImpactVerificationTypeInsightsEnum } from '../../../impact-verification/impact-verification-type-insights/impact-verification-type-insights.enum';
import { CitySearchResult } from 'src/app/country/city-search-result.model';
import { CountryService } from 'src/app/country/country.service';

@Component({
  selector: 'app-dashboard-organization-impact-verification-setup-communities',
  templateUrl:
    './dashboard-organization-impact-verification-setup-communities.component.html',
  styleUrls: [
    './dashboard-organization-impact-verification-setup-communities.component.scss',
  ],
})
export class DashboardOrganizationImpactVerificationSetupCommunitiesComponent extends DashboardOrganizationImpactVerificationSetupBaseComponent {
  address: any;
  cities: CitySearchResult[] = [];
  searchCitiesLoading = false;
  dependancies: { [key: string]: any } = {
    ageRange: [],
    ethnicity: [],
    relationshipStatus: [],
    sex: [],
    communityReachLevel: [],
    pricingTier: [],
    typeInsights: [],
  };

  get ImpactVerificationTypeInsightsEnum() {
    return ImpactVerificationTypeInsightsEnum;
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.address = this.form.get('location')?.value;

    this.subscriptions['communityReachLevel'] =
      this.communityReachLevelService.data$.subscribe((data) => {
        this.dependancies['communityReachLevel'] = data;
      });

    this.subscriptions['typeInsights'] =
      this.typeInsightsService.data$.subscribe((data) => {
        this.dependancies['typeInsights'] = data;
      });
  }

  constructor(
    private impactVerificationSetupService: ImpactVerificationSetupService,
    private communityReachLevelService: CommunityReachLevelService,
    private typeInsightsService: ImpactVerificationTypeInsightsService,
    private countryService: CountryService
  ) {
    super(impactVerificationSetupService, 'setupForm');
  }

  isTypeInsightSelected(typeInsightId: number) {
    return this.form
      .get('typeInsights')
      ?.value.map(
        (typeInsight: ImpactVerificationTypeInsights) => typeInsight.id
      )
      .includes(typeInsightId);
  }

  toggleTypeInsightSelection(typeInsight: ImpactVerificationTypeInsights) {
    const currentTypeInsights = this.form.get('typeInsights')?.value ?? [];
    const isTypeInsightAlreadySelected = this.isTypeInsightSelected(
      typeInsight.id!
    );
    const newTypeInsights = isTypeInsightAlreadySelected
      ? currentTypeInsights.filter(
          (selectedTypeInsight: ImpactVerificationTypeInsights) =>
            selectedTypeInsight.id !== typeInsight.id
        )
      : [...currentTypeInsights, typeInsight];

    this.form.get('typeInsights')?.setValue(newTypeInsights);
    this.form.get('typeInsights')?.updateValueAndValidity();
  }

  handleAddressChange(event: any) {
    const address = event.value;
    this.form.patchValue({
      location: address.name,
      location_placeholder: address.name,
    });
  }

  searchCitiesByName(event: any) {
    this.searchCitiesLoading = true;
    this.countryService.searchCitiesByName(event.query).subscribe((data) => {
      this.cities = data;
      this.searchCitiesLoading = false;
    });
  }
}
