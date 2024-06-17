import { Component, EventEmitter, Output } from '@angular/core';
import { OrganizationDashboardCompleteRegistrationBaseComponent } from '../dashboard-organization-complete-registration-base/dashboard-organization-complete-registration-base.component';
import { OrganizationRegistrationService } from '../../../../auth/organization-registration/organization-registration.service';
import { SectorOrganizationService } from '../../../sector-organization/sector-organization.service';
import { SectorOrganization } from '../../../sector-organization/sector-organization.model';

@Component({
  selector: 'app-dashboard-organization-complete-registration-info',
  templateUrl:
    './dashboard-organization-complete-registration-info.component.html',
  styleUrls: [
    './dashboard-organization-complete-registration-info.component.scss',
  ],
})
export class DashboardOrganizationCompleteRegistrationInfoComponent extends OrganizationDashboardCompleteRegistrationBaseComponent {
  getSectorOrganizationsLoading = false;
  sectorOrganizations: SectorOrganization[] = [];
  @Output() previous = new EventEmitter();

  constructor(
    public override organizationRegistrationService: OrganizationRegistrationService,
    public sectorOrganizationService: SectorOrganizationService
  ) {
    super(organizationRegistrationService, 'organizationInfoForm');
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.getSectorOrganizations();
  }

  getSectorOrganizations() {
    this.getSectorOrganizationsLoading = true;
    this.sectorOrganizationService.get().subscribe((sectorOrganizations) => {
      this.sectorOrganizations = sectorOrganizations;
      this.getSectorOrganizationsLoading = false;
    });
  }
}
