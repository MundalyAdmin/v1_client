import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { Organization } from '../../organization.model';
import { AuthService } from '../../../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardOrganizationService } from '../dashboard-organization.service';
import { CategoryOrganizationEnum } from '../../category-organization/category-organization.enum';
import { TypeOrganizationEnum } from '../../type-organization/type-organization.enum';

@Component({
  selector: 'app-dashboard-organization-partners',
  templateUrl: './dashboard-organization-partners.component.html',
  styleUrls: ['./dashboard-organization-partners.component.scss'],
})
export class DashboardOrganizationPartnersComponent
  extends BaseComponent<any>
  implements OnInit
{
  organization: Organization | null = null;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public dashboardService: DashboardOrganizationService
  ) {
    super();
  }

  get TypeOrganizationEnum() {
    return TypeOrganizationEnum;
  }

  override ngOnInit(): void {
    this.subscriptions['organization'] =
      this.authService.organization$.subscribe((organization) => {
        this.organization = organization;
        this.dashboardService.title = `Welcome, ${this.organization?.name}`;
      });
  }
}
