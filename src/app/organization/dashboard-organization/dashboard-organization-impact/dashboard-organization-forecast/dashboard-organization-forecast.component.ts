import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { CommunityTrustScore } from '../../../../scale/models/community-trust-score.model';
import { ScaleService } from '../../../../scale/scale.service';
import { OrganizationService } from '../../../organization.service';

@Component({
  selector: 'app-dashboard-organization-forecast',
  templateUrl: './dashboard-organization-forecast.component.html',
  styleUrls: ['./dashboard-organization-forecast.component.scss'],
})
export class DashboardOrganizationForecastComponent
  extends BaseComponent<CommunityTrustScore>
  implements OnInit
{
  communityTrustScore: CommunityTrustScore | null = null;
  constructor(
    public scaleService: ScaleService,
    public organizationService: OrganizationService
  ) {
    super();
  }

  override ngOnInit(): void {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) this.getCommunityTrustScore(organization.id!);
      });
  }

  getCommunityTrustScore(organizationId: number) {
    this.loading = true;
    this.scaleService
      .getCommunityTrustScore(organizationId)
      .subscribe((data) => {
        this.loading = false;
      });
  }
}
