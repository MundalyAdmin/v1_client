import { Component } from '@angular/core';
import { ImpactInitiativeListComponent } from '../../../../initiatives/impact-initiative-list/impact-initiative-list.component';
import { ImpactInitiativeService } from '../../../../scale/impact-initiative/impact-initiative.service';
import { AuthService } from '../../../../auth/auth.service';

@Component({
  selector: 'app-dashboard-organization-impact-initative-list',
  templateUrl: './dashboard-organization-impact-initative-list.component.html',
  styleUrls: ['./dashboard-organization-impact-initative-list.component.scss'],
})
export class DashboardOrganizationImpactInitativeListComponent extends ImpactInitiativeListComponent {
  constructor(
    public override impactInitiativeService: ImpactInitiativeService,
    public authService: AuthService
  ) {
    super(impactInitiativeService);
  }

  override ngOnInit(): void {
    this.authService.organization$.subscribe((organization) => {
      if (organization) this.getByOrganizationId(organization.id!);
    });
  }
}
