import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Flowbite } from '../../shared/decorators/flowbite.decorator';
import { TypeOrganization } from '../type-organization/type-organization.model';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../user/user.model';
import { Organization } from '../organization.model';
import { Storage } from './../../shared/helpers/storage/storage';

@Component({
  selector: 'app-dashboard-organization',
  templateUrl: './dashboard-organization.component.html',
  styleUrls: ['./dashboard-organization.component.scss'],
})
@Flowbite()
export class DashboardOrganizationComponent implements OnInit {
  user: User | null = null;
  organization: Organization | null = null;
  typeOrganizationId: number | null = null;
  showSetupLogoAndCoverModal: boolean = false;
  constructor(
    public authService: AuthService,
    public router: Router,
    public route: ActivatedRoute,
    public storage: Storage
  ) {}

  ngOnInit(): void {
    this.user = this.authService.user;
    this.organization = this.authService.organization;
    this.typeOrganizationId = this.organization?.type_organization_id || null;

    // this.menuRedirection();
  }

  /**
   * Menu redirection based on the organization type.
   */
  menuRedirection() {
    const currentRoute = this.router.url.split('/').pop();
    if (currentRoute === 'dashboard') {
      const redirectRoute =
        this.typeOrganizationId === 1 ? 'community' : 'report-outcomes';
      this.router.navigate([redirectRoute], { relativeTo: this.route });
    }
  }

  isRegistrationComplete() {
    return (
      this.authService.organization?.logo &&
      this.authService.organization?.cover
    );
  }
}
