import { Component, OnInit } from '@angular/core';
import {
  BaseComponent,
  BaseListComponent,
} from '../../../../../../shared/base-component';
import { ImpactStory } from '../../../../../../scale/impact-story/impact-story.model';
import { OrganizationService } from '../../../../../../organization/organization.service';
import { ImpactStoryService } from '../../../../../../scale/impact-story/impact-story.service';
import { Organization } from '../../../../../../organization/organization.model';

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
  constructor(
    public impactStoryOrganizationService: ImpactStoryService,
    public organizationService: OrganizationService
  ) {
    super(impactStoryOrganizationService);
  }

  ngOnInit(): void {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.organization = organization;
          this.getDataByOrganization(organization.id!);
        }
      });
  }

  getDataByOrganization(organizationId: number) {
    this.loading = true;
    this.impactStoryOrganizationService
      .getByOrganizationId(organizationId)
      .subscribe({
        next: (response) => {
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        },
      });
  }
}
