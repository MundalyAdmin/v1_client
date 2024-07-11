import { Component } from '@angular/core';
import { ImpactVerificationSetupService } from '../../../impact-verification/impact-verification-setup/impact-verification-setup.service';
import { DashboardOrganizationImpactVerificationSetupBaseComponent } from '../dashboard-organization-impact-verification-setup-base/dashboard-organization-impact-verification-setup-base.component';

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
  options = {
    // componentRestrictions: {
    //   country: ["AU"]
    // }
  };

  override ngOnInit(): void {
    super.ngOnInit();

    this.address = this.form.get('location')?.value;
  }

  constructor(
    public impactVerificationSetupService: ImpactVerificationSetupService
  ) {
    super(impactVerificationSetupService, 'communitiesForm');
  }

  public handleAddressChange(address: any) {
    this.form.patchValue({
      location: address.formatted_address,
      location_placeholder: address.formatted_address,
    });
  }
}
