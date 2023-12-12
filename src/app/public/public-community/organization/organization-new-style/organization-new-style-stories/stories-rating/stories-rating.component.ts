import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../../../shared/base-component';
import { OrganizationService } from '../../../../../../organization/organization.service';
import { Organization } from '../../../../../../organization/organization.model';
import { ImpactStoryService } from '../../../../../../scale/impact-story/impact-story.service';
import { ImpactStoryRatingBreakdown } from '../../../../../../scale/impact-story/impact-story-rating-breakdown.model';
import { ScaleService } from '../../../../../../scale/scale.service';

@Component({
  selector: 'app-stories-rating',
  templateUrl: './stories-rating.component.html',
  styleUrls: ['./stories-rating.component.scss'],
})
export class StoriesRatingComponent
  extends BaseComponent<any>
  implements OnInit
{
  organization: Organization | null = null;
  ratingBreakdown: ImpactStoryRatingBreakdown | null = null;
  constructor(
    public organizationService: OrganizationService,
    public impactStoriesService: ImpactStoryService,
    public scaleService: ScaleService
  ) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.organization = organization;
          this.getRatingBreakdown(organization.id!);
        }
      });
  }

  getRatingBreakdown(organizationId: number) {
    this.loading = true;
    this.impactStoriesService
      .getOrganizationRatingBreadown(organizationId)
      .subscribe((response) => {
        this.ratingBreakdown = response;
        this.loading = false;
      });
  }
}
