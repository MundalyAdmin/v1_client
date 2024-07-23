import { Component, Input } from '@angular/core';
import { StatusImpactVerificationEnum } from '../../../impact-verification/enums/status-impact-verification.enum';

@Component({
  selector: 'app-dashboard-organization-unavailable-insights',
  templateUrl: './dashboard-organization-unavailable-insights.component.html',
  styleUrls: ['./dashboard-organization-unavailable-insights.component.scss'],
})
export class DashboardOrganizationUnavailableInsightsComponent {
  // @Input({ required: true }) verificationRequestStatus!: StatusImpactVerificationEnum

  get StatusImpactVerificationEnum() {
    return StatusImpactVerificationEnum;
  }
}
