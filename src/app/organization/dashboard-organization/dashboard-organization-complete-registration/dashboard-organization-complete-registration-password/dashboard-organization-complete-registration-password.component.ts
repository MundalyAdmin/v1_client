import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseCreateComponent } from '../../../../shared/base-component';
import { OrganizationRegistrationService } from '../../../../auth/organization-registration/organization-registration.service';
import { FormGroup } from '@angular/forms';
import { OrganizationDashboardCompleteRegistrationBaseComponent } from '../dashboard-organization-complete-registration-base/dashboard-organization-complete-registration-base.component';

@Component({
  selector: 'app-dashboard-organization-complete-registration-password',
  templateUrl:
    './dashboard-organization-complete-registration-password.component.html',
  styleUrls: [
    './dashboard-organization-complete-registration-password.component.scss',
  ],
})
export class DashboardOrganizationCompleteRegistrationPasswordComponent extends OrganizationDashboardCompleteRegistrationBaseComponent {
  constructor(
    public override organizationRegistrationService: OrganizationRegistrationService
  ) {
    super(organizationRegistrationService, 'updatePasswordForm');
  }
}
