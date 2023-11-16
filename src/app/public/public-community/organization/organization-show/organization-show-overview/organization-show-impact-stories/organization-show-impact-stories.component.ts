import { Component, OnInit } from '@angular/core';
import { ImpactStoryOrganization } from '../../../../../../organization/impact-story-organization/impact-story-organization.model';
import { ImpactStoryOrganizationService } from '../../../../../../organization/impact-story-organization/impact-story-organization.service';
import { OrganizationService } from '../../../../../../organization/organization.service';
import { Router } from '@angular/router';
import { BaseComponent } from '../../../../../../shared/base-component';

@Component({
  selector: 'app-organization-show-impact-stories',
  templateUrl: './organization-show-impact-stories.component.html',
  styleUrls: ['./organization-show-impact-stories.component.scss'],
})
export class OrganizationShowImpactStoriesComponent
  extends BaseComponent<ImpactStoryOrganization>
  implements OnInit
{
  constructor(
    public impactStoryOrganizationService: ImpactStoryOrganizationService,
    public organizationService: OrganizationService,
    public router: Router
  ) {
    super(impactStoryOrganizationService);
  }

  ngOnInit(): void {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) this.getDataByOrganization(organization.id!);
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
