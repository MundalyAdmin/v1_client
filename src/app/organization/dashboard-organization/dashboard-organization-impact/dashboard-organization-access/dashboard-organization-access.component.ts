import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { ImpactInitiative } from '../../../../scale/impact-initiative/impact-initiative.model';
import { ImpactInitiativeService } from '../../../../scale/impact-initiative/impact-initiative.service';
import { ScaleService } from '../../../../scale/scale.service';

@Component({
  selector: 'app-dashboard-organization-access',
  templateUrl: './dashboard-organization-access.component.html',
  styleUrls: ['./dashboard-organization-access.component.scss'],
})
export class DashboardOrganizationAccessComponent
  extends BaseComponent<ImpactInitiative>
  implements OnInit
{
  constructor(
    public impactInitiativeService: ImpactInitiativeService,
    public scaleService: ScaleService
  ) {
    super();
  }

  ngOnInit(): void {
    this.getByOrganization(24);
  }

  getByOrganization(organizationId: number) {
    this.impactInitiativeService
      .getByOrganization(organizationId)
      .subscribe((initiatives) => {
        this.data = initiatives as ImpactInitiative[];
        console.log(this.data);
      });
  }

  onLocationChange(event: any) {
    this.getByOrganization(event.target.value);
  }
}
