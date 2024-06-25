import { Component, OnInit } from '@angular/core';
import { DashboardOrganizationService } from '../dashboard-organization.service';

@Component({
  selector: 'app-dashboard-organization-header',
  templateUrl: './dashboard-organization-header.component.html',
  styleUrls: ['./dashboard-organization-header.component.scss'],
})
export class DashboardOrganizationHeaderComponent implements OnInit {
  title: string = 'Dashboard';

  constructor(
    public dashboardOrganizationService: DashboardOrganizationService
  ) {}

  ngOnInit() {
    this.dashboardOrganizationService.title$.subscribe((title) => {
      this.title = title;
    });
  }
}
