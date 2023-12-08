import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../../shared/base-component';
import { CommunityTrustScore } from '../../../../../scale/community-trust-score.model';
import { ScaleService } from '../../../../../scale/scale.service';
import { OrganizationService } from '../../../../../organization/organization.service';

@Component({
  selector: 'app-rating-information',
  templateUrl: './rating-information.component.html',
  styleUrls: ['./rating-information.component.scss'],
})
export class RatingInformationComponent
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

  ngOnInit(): void {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          if (
            !this.scaleService.communityTrustScore ||
            this.scaleService.communityTrustScore.organization_id !==
              organization.id
          ) {
            this.getCommunityTrustScore(organization.id!);
          }
        }
      });
  }

  getCommunityTrustScore(organizationId: number) {
    this.loading = true;
    this.scaleService
      .getCommunityTrustScore(organizationId)
      .subscribe((response) => {
        this.loading = false;
        this.communityTrustScore = this.scaleService.communityTrustScore;
      });
  }

  getProgressBarWidth(scaleElementScore: number) {
    const width = (scaleElementScore * 100) / 5 + '%';
    return width;
  }

  getNumberOfStars(scaleElementScore: number) {
    const numberOfStars = Math.floor(scaleElementScore);
    const numberOfHalfStars = scaleElementScore - numberOfStars >= 0.5 ? 1 : 0;
    const numberOfEmptyStars = 5 - numberOfHalfStars - numberOfStars;
    return {
      numberOfStars,
      numberOfHalfStars,
      numberOfEmptyStars,
    };
  }
}
