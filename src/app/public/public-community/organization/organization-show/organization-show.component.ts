import { Component } from '@angular/core';
import { BaseSingleComponent } from '../../../../shared/base-component';
import { Organization } from '../../../../organization/organization.model';
import { OrganizationService } from '../../../../organization/organization.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organization-show',
  templateUrl: './organization-show.component.html',
  styleUrls: ['./organization-show.component.scss'],
})
export class OrganizationShowComponent extends BaseSingleComponent<Organization> {
  public override enableFetchDataFromURL: boolean = true;

  constructor(
    public organizationService: OrganizationService,
    public override route: ActivatedRoute
  ) {
    super(organizationService, route);
  }
}
