import { Component } from '@angular/core';
import { DashboardOrganizationInsightsScalesScoreComponent } from '../../dashboard-organization-insights/dashboard-organization-insights-scales-score/dashboard-organization-insights-scales-score.component';
import { DashboardOrganizationBaseScaleComponent } from '../../dashboard-organization-base-scale/dashboard-organization-base-scale.component';
import { WellbeingScoring } from '../../../../wellbeing-scoring/wellbeing-scoring.model';
import { WellbeingScoringService } from '../../../../wellbeing-scoring/wellbeing-scoring.service';
import { ScaleService } from '../../../../scale/scale.service';
import { OrganizationService } from '../../../organization.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-organization-wellbeing-scores',
  templateUrl: './dashboard-organization-wellbeing-scores.component.html',
  styleUrls: ['./dashboard-organization-wellbeing-scores.component.scss'],
})
export class DashboardOrganizationWellbeingScoresComponent extends DashboardOrganizationBaseScaleComponent<WellbeingScoring> {
  constructor
  (
    public wellbeingService: WellbeingScoringService,
    public override scaleService: ScaleService,
    public override organizationService: OrganizationService,
    public override route: ActivatedRoute,
    public override router: Router
  ) {
    super(wellbeingService, scaleService, organizationService, route, router);
  }
}
