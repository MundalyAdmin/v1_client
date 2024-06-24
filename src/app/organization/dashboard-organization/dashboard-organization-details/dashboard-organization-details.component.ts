import { Component } from '@angular/core';
import { BaseSingleComponent } from '../../../shared/base-component';
import { Organization } from '../../organization.model';
import { OrganizationService } from '../../organization.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryOrganizationEnum } from '../../category-organization/category-organization.enum';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-dashboard-organization-details',
  templateUrl: './dashboard-organization-details.component.html',
  styleUrls: ['./dashboard-organization-details.component.scss'],
})
export class DashboardOrganizationDetailsComponent extends BaseSingleComponent<Organization> {
  constructor(
    public organizationService: OrganizationService,
    public override route: ActivatedRoute
  ) {
    super(organizationService, route);
  }

  get currentLoggedOrganizationCategory() {
    return this.authService.organization?.type_organization
      ?.category_organization_id;
  }

  override ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getSingle(params['id']);
    });
  }

  getSingle(id: number) {
    this.loading = true;
    this.organizationService.show(id).subscribe((data) => {
      this.single = data;
      this.loading = false;
    });
  }
}
