import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommunityPerceptionIndexScore } from '../../../scale/community-perception-index/community-perception-index-score.model';
import { CommunityPerceptionIndexService } from '../../../scale/community-perception-index/community-perception-index.service';
import { ScaleService } from '../../../scale/scale.service';
import { OrganizationService } from '../../organization.service';
import { DashboardOrganizationBaseScaleComponent } from '../dashboard-organization-base-scale/dashboard-organization-base-scale.component';

@Component({
  selector: 'app-dashboard-organization-community-perception',
  templateUrl: './dashboard-organization-community-perception.component.html',
  styleUrls: ['./dashboard-organization-community-perception.component.scss'],
})
export class DashboardOrganizationCommunityPerceptionComponent extends DashboardOrganizationBaseScaleComponent<CommunityPerceptionIndexScore> {
  constructor(
    public communityPerceptionService: CommunityPerceptionIndexService,
    public override scaleService: ScaleService,
    public override organizationService: OrganizationService,
    public override route: ActivatedRoute,
    public override router: Router
  ) {
    super(
      communityPerceptionService,
      scaleService,
      organizationService,
      route,
      router
    );
  }
}
