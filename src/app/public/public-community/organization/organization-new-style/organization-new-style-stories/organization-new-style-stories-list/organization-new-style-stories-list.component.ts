import { Component, OnInit } from '@angular/core';
import {
  BaseComponent,
  BaseListComponent,
} from '../../../../../../shared/base-component';
import { ImpactStory } from '../../../../../../scale/impact-story/impact-story.model';
import { OrganizationService } from '../../../../../../organization/organization.service';
import { ImpactStoryService } from '../../../../../../scale/impact-story/impact-story.service';
import { Organization } from '../../../../../../organization/organization.model';
import { ScaleService } from '../../../../../../scale/scale.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-organization-new-style-stories-list',
  templateUrl: './organization-new-style-stories-list.component.html',
  styleUrls: ['./organization-new-style-stories-list.component.scss'],
})
export class OrganizationNewStyleStoriesListComponent
  extends BaseComponent<ImpactStory>
  implements OnInit
{
  organization: Organization | null = null;
  verified = false;
  constructor(
    public impactStoryOrganizationService: ImpactStoryService,
    public organizationService: OrganizationService,
    public scaleService: ScaleService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    super(impactStoryOrganizationService);
  }

  override ngOnInit(): void {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.organization = organization;
          this.getDataByOrganization(organization.id!);
        }
      });
  }

  getDataByOrganization(organizationId: number) {
    this.route.params.subscribe((params) => {
      if (params['id'] === 'verified') {
        this.verified = true;
      } else if (params['id'] === 'unverified') {
        this.getUnverifiedByOrganization(organizationId);
        this.verified = false;
      } else {
        this.router.navigate(['..', 'unverified'], { relativeTo: this.route });
      }
    });
  }

  getVerifiedByOrganization(organizationId: number) {
    this.loading = true;
    this.impactStoryOrganizationService
      .getVerifiedByOrganizationId(organizationId)
      .subscribe({
        complete: () => {
          this.loading = false;
        },
      });
  }

  getUnverifiedByOrganization(organizationId: number) {
    this.loading = true;
    this.impactStoryOrganizationService
      .getUnverifiedByOrganizationId(organizationId)
      .subscribe({
        complete: () => {
          this.loading = false;
        },
      });
  }
}
