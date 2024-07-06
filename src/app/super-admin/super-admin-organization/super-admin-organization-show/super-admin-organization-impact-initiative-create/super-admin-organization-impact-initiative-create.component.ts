import { Component } from '@angular/core';
import { ImpactInitiativeCreateComponent } from '../../../../initiatives/impact-initiative-create/impact-initiative-create.component';
import { ImpactInitiativeService } from '../../../../scale/impact-initiative/impact-initiative.service';
import { CountryService } from '../../../../country/country.service';
import { AuthService } from '../../../../auth/auth.service';
import { OrganizationService } from '../../../../organization/organization.service';

@Component({
  selector: 'app-super-admin-organization-impact-initiative-create',
  templateUrl:
    './super-admin-organization-impact-initiative-create.component.html',
  styleUrls: [
    './super-admin-organization-impact-initiative-create.component.scss',
  ],
})
export class SuperAdminOrganizationImpactInitiativeCreateComponent extends ImpactInitiativeCreateComponent {
  constructor(
    public override impactInitiativeService: ImpactInitiativeService,
    public override countryService: CountryService,
    public organizationService: OrganizationService
  ) {
    super(impactInitiativeService, countryService);
  }

  override ngOnInit(): void {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.initForm(organization.id!);
          this.organization = organization;
        }
      });
  }
}
