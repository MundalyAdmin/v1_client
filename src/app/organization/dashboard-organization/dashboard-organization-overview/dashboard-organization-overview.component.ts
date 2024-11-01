import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';

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
