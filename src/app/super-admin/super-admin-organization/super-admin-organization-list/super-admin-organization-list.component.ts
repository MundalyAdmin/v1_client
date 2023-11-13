import { Component } from '@angular/core';
import { BaseListComponent } from '../../../shared/base-component';
import { Organization } from '../../../organization/organization.model';
import { OrganizationService } from './../../../organization/organization.service';

@Component({
  selector: 'app-super-admin-organization-list',
  templateUrl: './super-admin-organization-list.component.html',
  styleUrls: ['./super-admin-organization-list.component.scss'],
})
export class SuperAdminOrganizationListComponent extends BaseListComponent<Organization> {
  constructor(public organizationService: OrganizationService) {
    super(organizationService);
  }

  override ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.loading = true;
    this.organizationService.get().subscribe(() => {
      this.loading = false;
    });
  }
}
