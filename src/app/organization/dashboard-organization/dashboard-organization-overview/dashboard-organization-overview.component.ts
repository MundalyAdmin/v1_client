import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { AuthService } from '../../../auth/auth.service';
import { Organization } from '../../organization.model';
import { CategoryOrganizationEnum } from '../../category-organization/category-organization.enum';

@Component({
  selector: 'app-dashboard-organization-overview',
  templateUrl: './dashboard-organization-overview.component.html',
  styleUrls: ['./dashboard-organization-overview.component.scss'],
})
export class DashboardOrganizationOverviewComponent extends BaseComponent<any> {
  constructor() {
    super();
  }
}
