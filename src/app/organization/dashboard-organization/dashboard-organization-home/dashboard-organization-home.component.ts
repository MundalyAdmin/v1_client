import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Organization } from '../../organization.model';
import { BaseComponent } from '../../../shared/base-component';

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
  constructor(public authService: AuthService) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions['organization'] =
      this.authService.organization$.subscribe((organization) => {
        this.organization = organization;
      });
  }
}
