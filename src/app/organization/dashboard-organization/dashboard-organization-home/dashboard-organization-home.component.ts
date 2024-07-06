import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Organization } from '../../organization.model';
import { BaseComponent } from '../../../shared/base-component';
import { CategoryOrganizationEnum } from '../../category-organization/category-organization.enum';
import { TypeOrganizationEnum } from '../../type-organization/type-organization.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardOrganizationService } from '../dashboard-organization.service';

@Component({
  selector: 'app-dashboard-organization-home',
  templateUrl: './dashboard-organization-home.component.html',
  styleUrls: ['./dashboard-organization-home.component.scss'],
})
export class DashboardOrganizationHomeComponent
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
