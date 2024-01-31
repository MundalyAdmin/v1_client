import { Component } from '@angular/core';
import { BaseSingleComponent } from '../../../../shared/base-component';
import { Organization } from '../../../../organization/organization.model';
import { OrganizationService } from '../../../../organization/organization.service';

@Component({
  selector: 'app-organization-funder',
  templateUrl: './organization-funder.component.html',
  styleUrls: ['./organization-funder.component.scss'],
})
export class OrganizationFunderComponent extends BaseSingleComponent<Organization> {
  constructor(public organizationService: OrganizationService) {
    super(organizationService);
  }

  override ngOnInit(): void {
    window.scrollTo(0, 0);

    this.loading = true;
    this.organizationService.show(24).subscribe((organization) => {
      this.single = organization;
      this.loading = false;
    });
  }
}
