import { Component } from '@angular/core';
import { BaseSingleComponent } from '../../../../shared/base-component';
import { Organization } from '../../../../organization/organization.model';
import { OrganizationService } from '../../../../organization/organization.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organization-new-style',
  templateUrl: './organization-new-style.component.html',
  styleUrls: ['./organization-new-style.component.scss'],
})
export class OrganizationNewStyleComponent extends BaseSingleComponent<Organization> {
  constructor(
    public organizationService: OrganizationService,
    public override route: ActivatedRoute
  ) {
    super(organizationService, route);
  }

  override ngOnInit(): void {
    window.scrollTo(0, 0);

    this.route.params.subscribe((params) => {
      this.loading = true;
      this.organizationService.show(+params['id']).subscribe((organization) => {
        this.single = organization;
        this.loading = false;
      });
    });
  }
}
