import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/base-component';
import { ImpactInitiative } from '../../scale/impact-initiative/impact-initiative.model';
import { ImpactInitiativeService } from '../../scale/impact-initiative/impact-initiative.service';
import { OrganizationService } from '../../organization/organization.service';

@Component({
  selector: 'app-impact-initiative-list',
  templateUrl: './impact-initiative-list.component.html',
  styleUrls: ['./impact-initiative-list.component.scss'],
})
export class ImpactInitiativeListComponent
  extends BaseComponent<ImpactInitiative>
  implements OnInit
{
  constructor(public impactInitiativeService: ImpactInitiativeService) {
    super(impactInitiativeService);
  }

  override ngOnInit() {}

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
