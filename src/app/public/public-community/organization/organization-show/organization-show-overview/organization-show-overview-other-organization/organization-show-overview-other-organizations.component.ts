import { Component } from '@angular/core';
import { BaseListComponent } from '../../../../../../shared/base-component';
import { Organization } from '../../../../../../organization/organization.model';
import { OrganizationService } from '../../../../../../organization/organization.service';

@Component({
  selector: 'app-organization-show-overview-other-organizations',
  templateUrl:
    './organization-show-overview-other-organizations.component.html',
  styleUrls: [
    './organization-show-overview-other-organizations.component.scss',
  ],
})
export class OrganizationShowOverviewOtherOrganizationsComponent extends BaseListComponent<Organization> {
  constructor(public organizationService: OrganizationService) {
    super(organizationService);
  }

  override ngOnInit(): void {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        this.getData(organization!);
      });
  }

  getData(organization: Organization) {
    this.loading = true;
    this.organizationService.getSimilar(organization.id!).subscribe(
      (data) => {
        this.data = data;
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }
}
