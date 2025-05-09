import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../../shared/base-component';
import { ScaleService } from '../../../../../scale/scale.service';
import { OrganizationService } from '../../../../../organization/organization.service';
import { CommunityTrustScore } from '../../../../../scale/models/community-trust-score.model';
import { Organization } from '../../../../../organization/organization.model';

@Component({
  selector: 'app-rating-information',
  templateUrl: './rating-information.component.html',
  styleUrls: ['./rating-information.component.scss'],
})
export class RatingInformationComponent
  extends BaseComponent<CommunityTrustScore>
  implements OnInit
{
  organization: Organization | undefined;
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
        if (organization) {
          this.organization = organization;
          if (
            !this.scaleService.score ||
            this.scaleService.score.organization_id !== organization.id
          ) {
            this.getCommunityTrustScore(organization.id!);
          } else {
            this.communityTrustScore = this.scaleService.score;
          }
        }
      });
  }

  getCommunityTrustScore(organizationId: number) {
    this.loading = true;
    this.scaleService
      .getByOrganizationId(organizationId)
      .subscribe((response) => {
        this.loading = false;
        this.communityTrustScore = this.scaleService.score;
      });
  }
}
