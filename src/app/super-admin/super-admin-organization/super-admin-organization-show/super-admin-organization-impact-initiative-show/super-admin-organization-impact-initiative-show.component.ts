import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { ImpactInitiative } from '../../../../scale/impact-initiative/impact-initiative.model';
import { ImpactInitiativeService } from '../../../../scale/impact-initiative/impact-initiative.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-super-admin-organization-impact-initiative-show',
  templateUrl:
    './super-admin-organization-impact-initiative-show.component.html',
  styleUrls: [
    './super-admin-organization-impact-initiative-show.component.scss',
  ],
})
export class SuperAdminOrganizationImpactInitiativeShowComponent
  extends BaseComponent<ImpactInitiative>
  implements OnInit
{
  constructor(
    public impactInitiativeService: ImpactInitiativeService,
    public route: ActivatedRoute
  ) {
    super(impactInitiativeService);
  }

  override ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.getImpactInitiativeById(+params['id']);
      }
    });
  }

  getImpactInitiativeById(id: number) {
    this.loading = true;
    this.impactInitiativeService.show(id).subscribe(
      (response) => {
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }
}
