import { Component } from '@angular/core';
import { BaseListComponent } from '../../../../shared/base-component';
import { Organization } from '../../../../organization/organization.model';
import { OrganizationService } from '../../../../organization/organization.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss'],
})
export class OrganizationListComponent extends BaseListComponent<Organization> {
  constructor(
    public organizationService: OrganizationService,
    public route: ActivatedRoute
  ) {
    super(organizationService);
  }

  override ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.getBySectorOrganization(params['id']);
    });
  }

  getBySectorOrganization(sectorOrganizationId: number) {
    this.loading = true;
    this.organizationService
      .getBySectorOrganization(sectorOrganizationId)
      .subscribe(() => {
        this.loading = false;
      });
  }
}
