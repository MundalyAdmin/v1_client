import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { TypeOrganizationEnum } from '../../type-organization/type-organization.enum';

@Component({
  selector: 'app-dashboard-organization-partner-invitation',
  templateUrl: './dashboard-organization-partner-invitation.component.html',
  styleUrls: ['./dashboard-organization-partner-invitation.component.scss'],
})
export class DashboardOrganizationPartnerInvitationComponent extends BaseComponent<any> {
  get TypeOrganizationEnum() {
    return TypeOrganizationEnum;
  }
  constructor() {
    super();
  }
}
