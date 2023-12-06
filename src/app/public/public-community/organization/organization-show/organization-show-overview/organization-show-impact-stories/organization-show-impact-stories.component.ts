import { Component, OnInit } from '@angular/core';
import { ImpactStory } from '../../../../../../scale/impact-story/impact-story.model';
import { ImpactStoryService } from '../../../../../../scale/impact-story/impact-story.service';
import { OrganizationService } from '../../../../../../organization/organization.service';
import { Router } from '@angular/router';
import { BaseComponent } from '../../../../../../shared/base-component';
import { Flowbite } from '../../../../../../shared/decorators/flowbite.decorator';
import { initCarousels, initFlowbite } from 'flowbite';

@Component({
  selector: 'app-organization-show-impact-stories',
  templateUrl: './organization-show-impact-stories.component.html',
  styleUrls: ['./organization-show-impact-stories.component.scss'],
})
@Flowbite()
export class OrganizationShowImpactStoriesComponent
  extends BaseComponent<ImpactStory>
  implements OnInit
{
  constructor(
    public impactStoryOrganizationService: ImpactStoryService,
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
          console.log(response);
          initCarousels();
        },
        error: () => {
          this.loading = false;
        },
      });
  }

  randomDate() {
    const start = new Date('2023-06-01');
    const end = new Date();
    return Object.freeze(
      new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      )
    );
  }
}
