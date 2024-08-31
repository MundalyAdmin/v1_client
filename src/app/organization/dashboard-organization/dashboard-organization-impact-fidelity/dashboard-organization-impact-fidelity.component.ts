import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScaleService } from '../../../scale/scale.service';
import { SocialImpactFidelityScore } from '../../../scale/social-impact-fidelity/social-impact-fidelity-score.model';
import { SocialImpactFidelityService } from '../../../scale/social-impact-fidelity/social-impact-fidelity.service';
import { OrganizationService } from '../../organization.service';
import { DashboardOrganizationBaseScaleComponent } from '../dashboard-organization-base-scale/dashboard-organization-base-scale.component';

@Component({
  selector: 'app-dashboard-organization-impact-fidelity',
  templateUrl: './dashboard-organization-impact-fidelity.component.html',
  styleUrls: ['./dashboard-organization-impact-fidelity.component.scss'],
})
export class DashboardOrganizationImpactFidelityComponent extends DashboardOrganizationBaseScaleComponent<SocialImpactFidelityScore> {
  constructor(
    public impactFidelityService: SocialImpactFidelityService,
    public override scaleService: ScaleService,
    public override organizationService: OrganizationService,
    public override route: ActivatedRoute,
    public override router: Router
  ) {
    super(
      impactFidelityService,
      scaleService,
      organizationService,
      route,
      router
    );
  }
}
