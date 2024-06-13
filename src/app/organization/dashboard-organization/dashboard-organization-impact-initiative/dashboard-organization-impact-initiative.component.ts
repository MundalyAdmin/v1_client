import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../../organization.service';
import { AuthService } from '../../../auth/auth.service';
import { TypeOrganizationEnum } from '../../type-organization/type-organization.enum';
import { BaseComponent } from '../../../shared/base-component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-organization-impact-initiative',
  templateUrl: './dashboard-organization-impact-initiative.component.html',
  styleUrls: ['./dashboard-organization-impact-initiative.component.scss'],
})
export class DashboardOrganizationImpactInitiativeComponent extends BaseComponent<any> {
  constructor(
    public organizationService: OrganizationService,
    public authService: AuthService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    super();
  }

  override async ngOnInit(): Promise<void> {
    if (
      this.authService.organization?.type_organization_id ===
        TypeOrganizationEnum.IMPACT_FUNDER ||
      this.authService.organization?.type_organization_id ===
        TypeOrganizationEnum.CORPORATE
    ) {
      await this.router.navigate(['../partners'], { relativeTo: this.route });
    }
  }
}
