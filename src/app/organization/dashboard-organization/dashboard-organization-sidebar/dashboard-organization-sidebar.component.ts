import { Component, EventEmitter, Output } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { Organization } from '../../organization.model';
import { AuthService } from '../../../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../user/user.model';
import { Storage } from '../../../shared/helpers/storage/storage';
import { OrganizationService } from '../../organization.service';

@Component({
  selector: 'app-dashboard-organization-sidebar',
  templateUrl: './dashboard-organization-sidebar.component.html',
  styleUrls: ['./dashboard-organization-sidebar.component.scss'],
})
export class DashboardOrganizationSidebarComponent extends BaseComponent<any> {
  organization: Organization | null = null;
  selectedImpactPartner: Organization | null = null;
  typeOrganizationId: number | null = null;
  user: User | null = null;
  @Output() showSetupLogoAndCoverModal$ = new EventEmitter();

  constructor(
    public authService: AuthService,
    public router: Router,
    public route: ActivatedRoute,
    public storage: Storage,
    public organizationService: OrganizationService
  ) {
    super();
  }

  ngOnInit(): void {
    this.user = this.authService.user;
    this.organization = this.authService.organization;
    this.typeOrganizationId = this.organization?.type_organization_id || null;

    this.subscriptions['selectedImpactPartner'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) this.selectedImpactPartner = organization;
      });
  }
}
