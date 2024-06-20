import { Component } from '@angular/core';
import { OrganizationService } from '../../organization/organization.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-super-admin-sidebar',
  templateUrl: './super-admin-sidebar.component.html',
  styleUrls: ['./super-admin-sidebar.component.scss'],
})
export class SuperAdminSidebarComponent {
  constructor(
    public organizationService: OrganizationService,
    public authService: AuthService
  ) {}
}
