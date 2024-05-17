import { Component } from '@angular/core';
import { BaseSingleComponent } from '../../../shared/base-component';
import { Organization } from '../../organization.model';
import { OrganizationService } from '../../organization.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-organization-details',
  templateUrl: './dashboard-organization-details.component.html',
  styleUrls: ['./dashboard-organization-details.component.scss'],
})
export class DashboardOrganizationDetailsComponent extends BaseSingleComponent<Organization> {
  constructor(
    public organizationService: OrganizationService,
    public override route: ActivatedRoute
  ) {
    super(organizationService, route);
  }

  override ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.getSingle(params['id']);
    });
  }

  getSingle(id: number) {
    this.loading = true;
    this.organizationService.show(id).subscribe((data) => {
      this.single = data;
      this.loading = false;
    });
  }
}
