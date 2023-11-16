import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../../shared/base-component';
import { ImpactStoryOrganization } from '../../../../../organization/impact-story-organization/impact-story-organization.model';
import { ImpactStoryOrganizationService } from '../../../../../organization/impact-story-organization/impact-story-organization.service';
import { OrganizationService } from '../../../../../organization/organization.service';
import { Flowbite } from '../../../../../shared/decorators/flowbite.decorator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-admin-impact-story-list',
  templateUrl: './super-admin-impact-story-list.component.html',
  styleUrls: ['./super-admin-impact-story-list.component.scss'],
})
@Flowbite()
export class SuperAdminImpactStoryListComponent
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

  edit(story: ImpactStoryOrganization) {
    console.log(story);
    this.impactStoryOrganizationService.singleData = story;
  }

  delete(story: ImpactStoryOrganization) {
    this.helper.notification.confirm(
      `Delete  ${story.title}`,
      'Are you sure you want to delete this impact story?',
      () => {
        this.loading = true;
        this.impactStoryOrganizationService.delete(story.id!).subscribe(() => {
          this.helper.notification.alertSuccess();
          this.loading = false;
        });
      }
    );
  }
}
