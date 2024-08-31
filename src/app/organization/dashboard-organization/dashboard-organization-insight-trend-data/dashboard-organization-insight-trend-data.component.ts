import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-organization-insight-trend-data',
  templateUrl: './dashboard-organization-insight-trend-data.component.html',
  styleUrls: ['./dashboard-organization-insight-trend-data.component.scss'],
})
export class DashboardOrganizationInsightTrendDataComponent {
  @Input({ required: true }) score!: number;
  @Input({ required: true }) month!: string;
  @Input({ required: true }) year!: string;
}
