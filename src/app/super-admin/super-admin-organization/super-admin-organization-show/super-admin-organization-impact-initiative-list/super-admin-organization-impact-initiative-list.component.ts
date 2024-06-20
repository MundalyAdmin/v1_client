import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { ImpactInitiativeService } from '../../../../scale/impact-initiative/impact-initiative.service';
import { OrganizationService } from '../../../../organization/organization.service';
import { ImpactInitiative } from '../../../../scale/impact-initiative/impact-initiative.model';
import { ImpactInitiativeListComponent } from '../../../../initiatives/impact-initiative-list/impact-initiative-list.component';

@Component({
  selector: 'app-super-admin-organization-impact-initiative-list',
  templateUrl:
    './super-admin-organization-impact-initiative-list.component.html',
  styleUrls: [
    './super-admin-organization-impact-initiative-list.component.scss',
  ],
})
export class SuperAdminOrganizationImpactInitiativeListComponent
  extends ImpactInitiativeListComponent
  implements OnInit
{
  showImpactInitiativeCreateModal = false;
  constructor(
    public override impactInitiativeService: ImpactInitiativeService,
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
}
