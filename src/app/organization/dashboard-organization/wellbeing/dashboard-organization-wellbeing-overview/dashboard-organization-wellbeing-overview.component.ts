import { Component } from '@angular/core';
import { DashboardOrganizationForecastComponent } from '../../dashboard-organization-impact/dashboard-organization-forecast/dashboard-organization-forecast.component';
import { DashboardOrganizationOverviewComponent } from '../../dashboard-organization-overview/dashboard-organization-overview.component';

@Component({
  selector: 'app-dashboard-organization-wellbeing-overview',
  templateUrl: './dashboard-organization-wellbeing-overview.component.html',
  styleUrls: ['./dashboard-organization-wellbeing-overview.component.scss'],
})
export class DashboardOrganizationWellbeingOverviewComponent extends DashboardOrganizationOverviewComponent {}
