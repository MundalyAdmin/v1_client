import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { ImpactInitiative } from '../../../../scale/impact-initiative/impact-initiative.model';
import { ImpactInitiativeService } from '../../../../scale/impact-initiative/impact-initiative.service';
import { OrganizationService } from '../../../../organization/organization.service';

@Component({
  selector: 'app-super-admin-organization-impact-initiative',
  templateUrl: './super-admin-organization-impact-initiative.component.html',
  styleUrls: ['./super-admin-organization-impact-initiative.component.scss'],
})
export class SuperAdminOrganizationImpactInitiativeComponent
  extends BaseComponent<ImpactInitiative>
  implements OnInit
{
  constructor(public impactInitiativeService: ImpactInitiativeService) {
    super(impactInitiativeService);
  }

  override ngOnInit() {}
}
