import { Component } from '@angular/core';
import { DashboardOrganizationOverviewComponent } from '../dashboard-organization-overview/dashboard-organization-overview.component';
import { BaseComponent } from '../../../shared/base-component';

@Component({
  selector: 'app-dashboard-organization-breakdown',
  templateUrl: './dashboard-organization-breakdown.component.html',
  styleUrls: ['./dashboard-organization-breakdown.component.scss'],
})
export class DashboardOrganizationBreakdownComponent extends BaseComponent<any> {
  constructor() {
    super();
  }
}
