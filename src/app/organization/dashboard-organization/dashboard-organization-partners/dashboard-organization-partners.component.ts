import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../../../shared/base-component';
import { Organization } from '../../organization.model';
import { TypeOrganizationEnum } from '../../type-organization/type-organization.enum';
import { DashboardOrganizationService } from '../dashboard-organization.service';

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
