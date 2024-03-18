import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { CommunityTrustScore } from '../../../../scale/models/community-trust-score.model';
import { ScaleService } from '../../../../scale/scale.service';

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
  constructor(public scaleService: ScaleService) {
    super();
  }

  ngOnInit(): void {
    this.communityTrustScore = {
      impact_fidelity_score: Math.floor(Math.random() * (100 - 60 + 1)) + 60,
      community_perception_score:
        Math.floor(Math.random() * (100 - 60 + 1)) + 60,
      facilitation_strategy_score:
        Math.floor(Math.random() * (100 - 60 + 1)) + 60,
    };

    this.communityTrustScore.community_trust_score =
      ((this.communityTrustScore['impact_fidelity_score'] || 0) +
        (this.communityTrustScore['community_perception_score'] || 0) +
        (this.communityTrustScore['facilitation_strategy_score'] || 0)) /
      3;
  }
}
