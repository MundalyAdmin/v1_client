import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Flowbite } from '../../shared/decorators/flowbite.decorator';
import { TypeOrganization } from '../type-organization/type-organization.model';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../user/user.model';
import { Organization } from '../organization.model';
import { Storage } from './../../shared/helpers/storage/storage';
import { ProfileStatusOrganizationEnum } from '../profile-status-organization/profile-status-organization.enum';

@Component({
  selector: 'app-dashboard-organization',
  templateUrl: './dashboard-organization.component.html',
  styleUrls: ['./dashboard-organization.component.scss'],
})
@Flowbite()
export class DashboardOrganizationComponent implements OnInit, AfterViewInit {
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
  }

  ngAfterViewInit(): void {
    if (!this.isRegistrationComplete()) {
      this.showSetupLogoAndCoverModal = true;
    }
  }

  isRegistrationComplete() {
    return (
      this.authService.organization?.profile_status_organization_id ===
      ProfileStatusOrganizationEnum.CLAIMED
    );
  }
}
