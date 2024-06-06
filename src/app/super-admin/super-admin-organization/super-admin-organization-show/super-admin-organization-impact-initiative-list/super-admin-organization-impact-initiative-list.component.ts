import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { ImpactInitiativeService } from '../../../../scale/impact-initiative/impact-initiative.service';
import { OrganizationService } from '../../../../organization/organization.service';
import { ImpactInitiative } from '../../../../scale/impact-initiative/impact-initiative.model';

@Component({
  selector: 'app-super-admin-organization-impact-initiative-list',
  templateUrl:
    './super-admin-organization-impact-initiative-list.component.html',
  styleUrls: [
    './super-admin-organization-impact-initiative-list.component.scss',
  ],
})
export class SuperAdminOrganizationImpactInitiativeListComponent
  extends BaseComponent<ImpactInitiative>
  implements OnInit
{
  showImpactInitiativeCreateModal = false;
  constructor(
    public impactInitiativeService: ImpactInitiativeService,
    public organizationService: OrganizationService
  ) {
    super(impactInitiativeService);
  }

  override ngOnInit() {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) this.getByOrganizationId(organization.id!);
      });
  }

  getByOrganizationId(organizationId: number) {
    this.loading = true;
    this.impactInitiativeService.getByOrganizationId(organizationId).subscribe({
      next: (response) => {
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
