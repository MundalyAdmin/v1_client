import { Component } from '@angular/core';
import { DashboardOrganizationBaseScaleComponent } from '../dashboard-organization-base-scale/dashboard-organization-base-scale.component';
import { PhysicalWellbeingScoring } from '../../../wellbeing-scoring/physical-wellbeing-scoring/physical-wellbeing-scoring.model';
import { PsychologicalWellbeingScoringService } from '../../../wellbeing-scoring/psychological-wellbeing-scoring/psychological-wellbeing-scoring.service';
import { ScaleService } from '../../../scale/scale.service';
import { OrganizationService } from '../../organization.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PsychologicalWellbeingScoring } from '../../../wellbeing-scoring/psychological-wellbeing-scoring/psychological-wellbeing-scoring.model';

@Component({
  selector: 'app-dashboard-organization-psychological-wellbeing',
  templateUrl:
    './dashboard-organization-psychological-wellbeing.component.html',
  styleUrls: [
    './dashboard-organization-psychological-wellbeing.component.scss',
  ],
})
export class DashboardOrganizationPsychologicalWellbeingComponent extends DashboardOrganizationBaseScaleComponent<PsychologicalWellbeingScoring> {
  constructor(
    public psychologicalWellbeing: PsychologicalWellbeingScoringService,
    public override scaleService: ScaleService,
    public override organizationService: OrganizationService,
    public override route: ActivatedRoute,
    public override router: Router
  ) {
    super(
      psychologicalWellbeing,
      scaleService,
      organizationService,
      route,
      router
    );
  }
}
