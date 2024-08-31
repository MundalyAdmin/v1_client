import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhysicalWellbeingScoringService } from '../../../../wellbeing-scoring/physical-wellbeing-scoring/physical-wellbeing-scoring.service';
import { OrganizationService } from '../../../organization.service';
import { DashboardOrganizationBaseScaleTrendComponent } from '../../dashboard-organization-base-scale-trend/dashboard-organization-base-scale-trend.component';

@Component({
  selector: 'app-dashboard-organization-insights-physical-health-trend',
  templateUrl:
    './dashboard-organization-insights-physical-wellbeing-trend.component.html',
  styleUrls: [
    './dashboard-organization-insights-physical-wellbeing-trend.component.scss',
  ],
})
export class DashboardOrganizationInsightsPhysicalWellbeingTrendComponent extends DashboardOrganizationBaseScaleTrendComponent {
  constructor(
    public physicalWellbeingService: PhysicalWellbeingScoringService,
    public override organizationService: OrganizationService,
    public override route: ActivatedRoute
  ) {
    super(physicalWellbeingService, organizationService, route);
  }
}
