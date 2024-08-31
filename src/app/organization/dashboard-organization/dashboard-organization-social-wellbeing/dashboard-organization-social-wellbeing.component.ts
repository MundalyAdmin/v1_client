import { Component } from '@angular/core';
import { DashboardOrganizationBaseScaleComponent } from '../dashboard-organization-base-scale/dashboard-organization-base-scale.component';
import { SocialWellbeingScoring } from '../../../wellbeing-scoring/social-wellbeing-scoring/social-wellbeing-scoring.model';
import { SocialWellbeingScoringService } from '../../../wellbeing-scoring/social-wellbeing-scoring/social-wellbeing-scoring.service';
import { ScaleService } from '../../../scale/scale.service';
import { OrganizationService } from '../../organization.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-organization-social-wellbeing',
  templateUrl: './dashboard-organization-social-wellbeing.component.html',
  styleUrls: ['./dashboard-organization-social-wellbeing.component.scss'],
})
export class DashboardOrganizationSocialWellbeingComponent extends DashboardOrganizationBaseScaleComponent<SocialWellbeingScoring> {
  constructor(
    public socialWellbeingService: SocialWellbeingScoringService,
    public override scaleService: ScaleService,
    public override organizationService: OrganizationService,
    public override route: ActivatedRoute,
    public override router: Router
  ) {
    super(
      socialWellbeingService,
      scaleService,
      organizationService,
      route,
      router
    );
  }
}
