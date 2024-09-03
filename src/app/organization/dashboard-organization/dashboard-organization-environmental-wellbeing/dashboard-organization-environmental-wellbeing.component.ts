import { Component } from '@angular/core';
import { DashboardOrganizationBaseScaleComponent } from '../dashboard-organization-base-scale/dashboard-organization-base-scale.component';
import { EnvironmentWellbeingScoring } from '../../../wellbeing-scoring/environment-wellbeing-scoring/environment-wellbeing-scoring.model';
import { EnvironmentWellbeingScoringService } from '../../../wellbeing-scoring/environment-wellbeing-scoring/environment-wellbeing-scoring.service';
import { ScaleService } from '../../../scale/scale.service';
import { OrganizationService } from '../../organization.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-organization-environmental-wellbeing',
  templateUrl:
    './dashboard-organization-environmental-wellbeing.component.html',
  styleUrls: [
    './dashboard-organization-environmental-wellbeing.component.scss',
  ],
})
export class DashboardOrganizationEnvironmentalWellbeingComponent extends DashboardOrganizationBaseScaleComponent<EnvironmentWellbeingScoring> {
  constructor(
    public environmentalWellebing: EnvironmentWellbeingScoringService,
    public override scaleService: ScaleService,
    public override organizationService: OrganizationService,
    public override route: ActivatedRoute,
    public override router: Router
  ) {
    super(
      environmentalWellebing,
      scaleService,
      organizationService,
      route,
      router
    );
  }
}
