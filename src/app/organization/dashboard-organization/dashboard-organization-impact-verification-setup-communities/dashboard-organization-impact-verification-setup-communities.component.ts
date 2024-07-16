import { Component } from '@angular/core';
import { ImpactVerificationSetupService } from '../../../impact-verification/impact-verification-setup/impact-verification-setup.service';
import { DashboardOrganizationImpactVerificationSetupBaseComponent } from '../dashboard-organization-impact-verification-setup-base/dashboard-organization-impact-verification-setup-base.component';
import { ImpactVerificationPricingTierService } from '../../../impact-verification/impact-verification-pricing-tier/impact-verification-pricing-tier.service';
import { CommunityReachLevelService } from '../../../impact-verification/community-reach-level/community-reach-level.service';
import { ImpactVerificationTypeInsightsService } from '../../../impact-verification/impact-verification-type-insights/impact-verification-type-insights.service';
import { ImpactVerificationTypeInsights } from '../../../impact-verification/impact-verification-type-insights/impact-verification-type-insights.model';

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
  dependancies: { [key: string]: any } = {
    ageRange: [],
    ethnicity: [],
    relationshipStatus: [],
    sex: [],
    communityReachLevel: [],
    pricingTier: [],
    typeInsights: [],
  };
  options = {
    // componentRestrictions: {
    //   country: ["AU"]
    // }
  };

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
    public impactVerificationSetupService: ImpactVerificationSetupService,
    public pricingTierService: ImpactVerificationPricingTierService,
    public communityReachLevelService: CommunityReachLevelService,
    public typeInsightsService: ImpactVerificationTypeInsightsService
  ) {
    super(impactVerificationSetupService, 'communitiesForm');
  }

  isTypeInsightSelected(typeInsightId: number) {
    return this.form
      .get('type_insights')
      ?.value.map(
        (typeInsight: ImpactVerificationTypeInsights) => typeInsight.id
      )
      .includes(typeInsightId);
  }

  toggleTypeInsightSelection(typeInsight: ImpactVerificationTypeInsights) {
    const currentTypeInsights = this.form.get('type_insights')?.value ?? [];
    const isTypeInsightAlreadySelected = this.isTypeInsightSelected(
      typeInsight.id!
    );
    const newTypeInsights = isTypeInsightAlreadySelected
      ? currentTypeInsights.filter(
          (selectedTypeInsight: ImpactVerificationTypeInsights) =>
            selectedTypeInsight.id !== typeInsight.id
        )
      : [...currentTypeInsights, typeInsight];
    this.form.get('type_insights')?.setValue(newTypeInsights);
    this.form.get('type_insights')?.updateValueAndValidity();
  }

  public handleAddressChange(address: any) {
    this.form.patchValue({
      location: address.formatted_address,
      location_placeholder: address.formatted_address,
    });
  }
}
