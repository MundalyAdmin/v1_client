import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScaleService } from '../../../../scale/scale.service';
import { WellbeingScoring } from '../../../../wellbeing-scoring/wellbeing-scoring.model';
import { WellbeingScoringService } from '../../../../wellbeing-scoring/wellbeing-scoring.service';
import { OrganizationService } from '../../../organization.service';
import { DashboardOrganizationBaseScaleComponent } from '../../dashboard-organization-base-scale/dashboard-organization-base-scale.component';

@Component({
  selector: 'app-dashboard-organization-wellbeing-summary',
  templateUrl: './dashboard-organization-wellbeing-summary.component.html',
  styleUrls: ['./dashboard-organization-wellbeing-summary.component.scss'],
})
export class DashboardOrganizationWellbeingSummaryComponent extends DashboardOrganizationBaseScaleComponent<WellbeingScoring> {
  showPhysicalWellbeingInfo = false;
  showPsychologicalWellbeingInfo = false;
  showSocialWellbeingInfo = false;
  showEnvironmentWellbeingInfo = false;
  showWellbeingScoringInfo = false;
  constructor(
    public wellbeingScoringService: WellbeingScoringService,
    public override scaleService: ScaleService,
    public override organizationService: OrganizationService,
    public override route: ActivatedRoute,
    public override router: Router
  ) {
    super(
      wellbeingScoringService,
      scaleService,
      organizationService,
      route,
      router
    );
  }
}
