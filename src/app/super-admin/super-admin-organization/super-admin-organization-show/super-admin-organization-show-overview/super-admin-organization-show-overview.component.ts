import { Component } from '@angular/core';
import { BaseSingleComponent } from '../../../../shared/base-component';
import { Organization } from '../../../../organization/organization.model';
import { OrganizationService } from '../../../../organization/organization.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-super-admin-organization-show-overview',
  templateUrl: './super-admin-organization-show-overview.component.html',
  styleUrls: ['./super-admin-organization-show-overview.component.scss'],
})
export class SuperAdminOrganizationShowOverviewComponent extends BaseSingleComponent<Organization> {
  constructor(
    public organizationService: OrganizationService,
    public override route: ActivatedRoute
  ) {
    super(organizationService, route);
  }
}
