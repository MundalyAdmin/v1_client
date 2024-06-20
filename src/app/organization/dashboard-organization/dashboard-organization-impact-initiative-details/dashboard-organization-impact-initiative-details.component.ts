import { Component } from '@angular/core';
import { BaseSingleComponent } from '../../../shared/base-component';
import { ImpactInitiative } from '../../../scale/impact-initiative/impact-initiative.model';
import { ImpactInitiativeService } from '../../../scale/impact-initiative/impact-initiative.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-organization-impact-initiative-details',
  templateUrl:
    './dashboard-organization-impact-initiative-details.component.html',
  styleUrls: [
    './dashboard-organization-impact-initiative-details.component.scss',
  ],
})
export class DashboardOrganizationImpactInitiativeDetailsComponent extends BaseSingleComponent<ImpactInitiative> {
  constructor(
    public impactInitiativeService: ImpactInitiativeService,
    public override route: ActivatedRoute
  ) {
    super(impactInitiativeService);
  }

  override ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getByImpactIniativeId(+params['id']);
    });
  }

  getByImpactIniativeId(id: number) {
    this.loading = true;
    this.impactInitiativeService.show(id).subscribe((impactInitiative) => {
      this.single = impactInitiative;
      this.loading = false;
    });
  }
}
