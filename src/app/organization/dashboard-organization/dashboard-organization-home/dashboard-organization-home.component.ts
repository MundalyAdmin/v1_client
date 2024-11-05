import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../../../shared/base-component';
import { OrganizationPartnerInvitationService } from '../../organization-partner-invitation/organization-partner-invitation.service';
import { Organization } from '../../organization.model';
import { TypeOrganizationEnum } from '../../type-organization/type-organization.enum';
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
  receivedInvitations: number = 0;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public dashboardService: DashboardOrganizationService,
    public invitationService: OrganizationPartnerInvitationService
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

        this.countInvitations(organization?.id!);
        this.invitationService.notification$.subscribe(() => {
          this.countInvitations(organization?.id!);
        });
      });
  }

  countInvitations(organization: number) {
    this.invitationService.countByReceiverId(organization).subscribe((res) => {
      this.receivedInvitations = +res.count;
    });
  }
}
