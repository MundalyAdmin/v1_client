import { Component, OnInit } from '@angular/core';
import { Flowbite } from '../../../../shared/decorators/flowbite.decorator';
import { BaseComponent } from '../../../../shared/base-component';
import { ImpactStory } from '../../../../scale/impact-story/impact-story.model';
import { ImpactStoryService } from '../../../../scale/impact-story/impact-story.service';
import { OrganizationService } from '../../../../organization/organization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-admin-impact-story',
  templateUrl: './super-admin-impact-story.component.html',
  styleUrls: ['./super-admin-impact-story.component.scss'],
})
@Flowbite()
export class SuperAdminImpactStoryComponent
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
        },
        error: () => {
          this.loading = false;
        },
      });
  }
}
