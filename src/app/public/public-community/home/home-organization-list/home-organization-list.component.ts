import { Component } from '@angular/core';
import { BaseListComponent } from '../../../../shared/base-component';
import { Organization } from '../../../../organization/organization.model';
import { OrganizationService } from '../../../../organization/organization.service';

@Component({
  selector: 'app-home-organization-list',
  templateUrl: './home-organization-list.component.html',
  styleUrls: ['./home-organization-list.component.scss'],
})
export class HomeOrganizationListComponent extends BaseListComponent<Organization> {
  constructor(public organizationService: OrganizationService) {
    super(organizationService);
  }

  getAll() {
    this.loading = true;
    this.organizationService.all().subscribe(() => {
      this.loading = false;
    });
  }
}
