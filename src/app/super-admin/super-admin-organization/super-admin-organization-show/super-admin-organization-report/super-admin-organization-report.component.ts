import { Component, OnInit } from '@angular/core';

import { DashboardOrganizationReportsComponent } from '../../../../organization/dashboard-organization/dashboard-organization-reports/dashboard-organization-reports.component';

@Component({
  selector: 'app-super-admin-organization-report',
  templateUrl: './super-admin-organization-report.component.html',
  styleUrls: ['./super-admin-organization-report.component.scss'],
})
export class SuperAdminOrganizationReportComponent extends DashboardOrganizationReportsComponent {}
