import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { InsightsTrendData } from '../insights-trend.data.model';
import { SocialImpactFidelityService } from '../../../../scale/social-impact-fidelity/social-impact-fidelity.service';
import { OrganizationService } from '../../../organization.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../auth/auth.service';
import { ImpactInitiativeService } from '../../../../scale/impact-initiative/impact-initiative.service';
import { TypeOrganizationEnum } from '../../../type-organization/type-organization.enum';
import { DashboardOrganizationBaseScaleTrendComponent } from '../../dashboard-organization-base-scale-trend/dashboard-organization-base-scale-trend.component';

@Component({
  selector: 'app-dashboard-organization-insights-impact-fidelity-trend',
  templateUrl:
    './dashboard-organization-insights-impact-fidelity-trend.component.html',
  styleUrls: [
    './dashboard-organization-insights-impact-fidelity-trend.component.scss',
  ],
})
export class DashboardOrganizationInsightsImpactFidelityTrendComponent extends DashboardOrganizationBaseScaleTrendComponent {
  constructor(
    public impactFidelityService: SocialImpactFidelityService,
    public override organizationService: OrganizationService,
    public override route: ActivatedRoute
  ) {
    super(impactFidelityService, organizationService, route);
  }
}
