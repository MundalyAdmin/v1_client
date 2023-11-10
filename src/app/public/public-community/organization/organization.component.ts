import { Component } from '@angular/core';
import { BaseSingleComponent } from '../../../shared/base-component';
import { SectorOrganizationService } from '../../../organization/sector-organization/sector-organization.service';
import { ActivatedRoute } from '@angular/router';
import { SectorOrganization } from '../../../organization/sector-organization/sector-organization.model';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss'],
})
export class OrganizationComponent extends BaseSingleComponent<SectorOrganization> {
  public override enableFetchDataFromURL: boolean = true;
  constructor(
    public organizationService: SectorOrganizationService,
    public override route: ActivatedRoute
  ) {
    super(organizationService, route);
  }
}
