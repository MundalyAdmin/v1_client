import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BaseComponent } from '../../../../../../shared/base-component';
import { OrganizationService } from '../../../../../../organization/organization.service';
import { Organization } from '../../../../../../organization/organization.model';
import { ImpactStoryService } from '../../../../../../scale/impact-story/impact-story.service';
import { ImpactStoryRatingBreakdown } from '../../../../../../scale/impact-story/impact-story-rating-breakdown.model';
import { ScaleService } from '../../../../../../scale/scale.service';
import { Flowbite } from '../../../../../../shared/decorators/flowbite.decorator';
import { Storage } from '../../../../../../shared/helpers/storage/storage';

@Component({
  selector: 'app-stories-rating',
  templateUrl: './stories-rating.component.html',
  styleUrls: ['./stories-rating.component.scss'],
})
@Flowbite()
export class StoriesRatingComponent
  extends BaseComponent<any>
  implements OnInit
{
  @ViewChild('modalBtn', { static: false }) modalBtn!: ElementRef;
  organization: Organization | null = null;
  ratingBreakdown: ImpactStoryRatingBreakdown | null = null;
  constructor(
    public organizationService: OrganizationService,
    public impactStoriesService: ImpactStoryService,
    public scaleService: ScaleService,
    public storage: Storage
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

    this.subscriptions['ratingBreakdown'] =
      this.impactStoriesService.ratingBreakdown$.subscribe(
        (ratingBreakdown: ImpactStoryRatingBreakdown | null) => {
          if (ratingBreakdown) {
            this.ratingBreakdown = ratingBreakdown;
          }
        }
      );

    if (this.storage.get('review')) {
      setTimeout(() => {
        this.modalBtn.nativeElement.click();
        this.storage.delete('review');
      }, 100);
    }
  }

  getStarPercentage(rating: number) {
    const totalRespondant = this.ratingBreakdown?.total_respondant || 0;

    return totalRespondant === 0
      ? 0
      : Math.round((rating * 100) / totalRespondant);
  }

  getRatingBreakdown(organizationId: number) {
    this.loading = true;
    this.impactStoriesService
      .getOrganizationRatingBreadown(organizationId)
      .subscribe(() => {
        this.loading = false;
      });
  }
}
