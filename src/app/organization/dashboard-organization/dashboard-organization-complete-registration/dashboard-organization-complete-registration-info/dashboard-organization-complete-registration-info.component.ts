import { Component, EventEmitter, Output } from '@angular/core';
import { OrganizationDashboardCompleteRegistrationBaseComponent } from '../dashboard-organization-complete-registration-base/dashboard-organization-complete-registration-base.component';
import { OrganizationRegistrationService } from '../../../../auth/organization-registration/organization-registration.service';
import { SectorOrganizationService } from '../../../sector-organization/sector-organization.service';
import { SectorOrganization } from '../../../sector-organization/sector-organization.model';
import { Organization } from '../../../organization.model';
import { OrganizationService } from '../../../organization.service';

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
  // Allow us to display the logo when the user uploads it
  logoLiveUrl: string | null = null;

  // Allow us to display the cover when the user uploads it
  coverLiveUrl: string | null = null;

  organization: Organization | null = null;

  @Output() logoUpdated = new EventEmitter<FormData>();
  @Output() previous = new EventEmitter();

  constructor(
    public override organizationRegistrationService: OrganizationRegistrationService,
    public sectorOrganizationService: SectorOrganizationService,
    public organizationService: OrganizationService
  ) {
    super(organizationRegistrationService, 'organizationInfoForm');
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) this.organization = organization;
      });

    this.getSectorOrganizations();
  }

  getSectorOrganizations() {
    this.getSectorOrganizationsLoading = true;
    this.sectorOrganizationService.get().subscribe((sectorOrganizations) => {
      this.sectorOrganizations = sectorOrganizations;
      this.getSectorOrganizationsLoading = false;
    });
  }

  deleteImage(name: string) {
    if (name === 'file_logo') {
      this.logoLiveUrl = null;
    } else if (name === 'file_cover') {
      this.coverLiveUrl = null;
    }

    this.formData.delete(name);
  }

  override onFileChanged(event: Event, name?: string) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.addEventListener('load', () => {
      if (name === 'file_logo') {
        this.logoLiveUrl = reader.result as string;
        this.formData.set('file_logo', file);
      } else if (name === 'file_cover') {
        this.coverLiveUrl = reader.result as string;
        this.formData.set('file_cover', file);
      }

      this.logoUpdated.emit(this.formData);
    });

    reader.readAsDataURL(file);
  }
}
