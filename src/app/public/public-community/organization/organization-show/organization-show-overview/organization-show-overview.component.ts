import { Component } from '@angular/core';
import { BaseSingleComponent } from '../../../../../shared/base-component';
import { Organization } from '../../../../../organization/organization.model';
import { OrganizationService } from '../../../../../organization/organization.service';
import { Flowbite } from '../../../../../shared/decorators/flowbite.decorator';

@Component({
  selector: 'app-organization-show-overview',
  templateUrl: './organization-show-overview.component.html',
  styleUrls: ['./organization-show-overview.component.scss'],
})
@Flowbite()
export class OrganizationShowOverviewComponent extends BaseSingleComponent<Organization> {
  constructor(public organizationService: OrganizationService) {
    super(organizationService);
  }
}
