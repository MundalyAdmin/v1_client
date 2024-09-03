import { Component } from '@angular/core';
import { BaseScaleService } from '../../../scale/base-scale.service';
import { DashboardOrganizationBaseScaleComponent } from '../dashboard-organization-base-scale/dashboard-organization-base-scale.component';
import { PhysicalWellbeingScoring } from '../../../wellbeing-scoring/physical-wellbeing-scoring/physical-wellbeing-scoring.model';
import { PhysicalWellbeingScoringService } from '../../../wellbeing-scoring/physical-wellbeing-scoring/physical-wellbeing-scoring.service';
import { OrganizationService } from '../../organization.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ScaleService } from '../../../scale/scale.service';

@Component({
  selector: 'app-dashboard-organization-physical-wellbeing',
  templateUrl: './dashboard-organization-physical-wellbeing.component.html',
  styleUrls: ['./dashboard-organization-physical-wellbeing.component.scss'],
})
export class DashboardOrganizationPhysicalWellbeingComponent extends DashboardOrganizationBaseScaleComponent<PhysicalWellbeingScoring> {
  constructor(
    public physicalWellbeingScoringService: PhysicalWellbeingScoringService,
    public override scaleService: ScaleService,
    public override organizationService: OrganizationService,
    public override route: ActivatedRoute,
    public override router: Router
  ) {
    super(
      physicalWellbeingScoringService,
      scaleService,
      organizationService,
      route,
      router
    );
  }
}
