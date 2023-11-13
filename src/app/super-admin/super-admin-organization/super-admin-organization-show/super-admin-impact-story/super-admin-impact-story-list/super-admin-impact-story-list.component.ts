import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../../shared/base-component';
import { ImpactStoryOrganization } from '../../../../../organization/impact-story-organization/impact-story-organization.model';
import { ImpactStoryOrganizationService } from '../../../../../organization/impact-story-organization/impact-story-organization.service';
import { OrganizationService } from '../../../../../organization/organization.service';

@Component({
  selector: 'app-super-admin-impact-story-list',
  templateUrl: './super-admin-impact-story-list.component.html',
  styleUrls: ['./super-admin-impact-story-list.component.scss'],
})
export class SuperAdminImpactStoryListComponent
  extends BaseComponent<ImpactStoryOrganization>
  implements OnInit
{
  constructor(
    public impactStoryOrganizationService: ImpactStoryOrganizationService,
    public organizationService: OrganizationService
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
