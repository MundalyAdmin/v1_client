import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-organization-insights-impact-fidelity-trend-data',
  templateUrl:
    './dashboard-organization-insights-impact-fidelity-trend-data.component.html',
  styleUrls: [
    './dashboard-organization-insights-impact-fidelity-trend-data.component.scss',
  ],
})
export class DashboardOrganizationInsightsImpactFidelityTrendDataComponent {
  @Input({ required: true }) score!: number;
  @Input({ required: true }) month!: string;
  @Input({ required: true }) year!: string;
}
