import { Component } from '@angular/core';
import { ImpactVerificationSetupService } from '../../../impact-verification/impact-verification-setup/impact-verification-setup.service';

@Component({
  selector: 'app-dashboard-organization-impact-verification-setup-communities',
  templateUrl:
    './dashboard-organization-impact-verification-setup-communities.component.html',
  styleUrls: [
    './dashboard-organization-impact-verification-setup-communities.component.scss',
  ],
})
export class DashboardOrganizationImpactVerificationSetupCommunitiesComponent {
  formattedaddress = '';

  options = {
    // componentRestrictions: {
    //   country: ["AU"]
    // }
  };

  constructor(
    private impactVerificationSetupService: ImpactVerificationSetupService
  ) {
    impactVerificationSetupService.locationAddress.subscribe(
      (val) => (this.formattedaddress = val)
    );
  }

  public handleAddressChange(address: any) {
    //setting address from API to local variable
    this.impactVerificationSetupService.locationAddress.next(
      address.formatted_address
    );
  }
}
