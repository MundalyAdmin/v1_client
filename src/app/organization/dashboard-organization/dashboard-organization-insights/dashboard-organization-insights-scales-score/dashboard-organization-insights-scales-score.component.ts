import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { CommunityTrustScore } from '../../../../scale/models/community-trust-score.model';
import { ScaleService } from '../../../../scale/scale.service';
import { AuthService } from '../../../../auth/auth.service';
import { OrganizationService } from '../../../organization.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-organization-insights-scales-score',
  templateUrl: './dashboard-organization-insights-scales-score.component.html',
  styleUrls: ['./dashboard-organization-insights-scales-score.component.scss'],
})
export class DashboardOrganizationInsightsScalesScoreComponent
  extends BaseComponent<CommunityTrustScore>
  implements OnInit
{
  constructor(
    public scaleService: ScaleService,
    public organizationService: OrganizationService,
    public route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const queryParams: { startDate?: string; endDate?: string } = {};
      if (params['startDate']) {
        queryParams.startDate = params['startDate'];
      }
      if (params['endDate']) {
        queryParams.endDate = params['endDate'];
      }
      this.subscriptions['organization'] =
        this.organizationService.singleData$.subscribe((organization) => {
          if (organization) {
            this.getScalesScore(organization.id!, queryParams);
          }
        });
    });
  }

  getScalesScore(organizationId: number, queryParams?: any) {
    this.loading = true;
    this.scaleService
      .getCommunityTrustScore(organizationId, { params: queryParams })
      .subscribe((data) => {
        this.loading = false;
      });
  }
}
