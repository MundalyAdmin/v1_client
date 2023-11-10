import { Component } from '@angular/core';
import { BaseSingleComponent } from '../../../../../shared/base-component';
import { Organization } from '../../../../../organization/organization.model';
import { OrganizationService } from '../../../../../organization/organization.service';

@Component({
  selector: 'app-organization-show-about',
  templateUrl: './organization-show-about.component.html',
  styleUrls: ['./organization-show-about.component.scss'],
})
export class OrganizationShowAboutComponent extends BaseSingleComponent<Organization> {
  constructor(public organizationService: OrganizationService) {
    super(organizationService);
  }
}
