import { Component } from '@angular/core';
import { BaseListComponent } from '../../../../../shared/base-component';
import { Organization } from '../../../../../organization/organization.model';
import { OrganizationService } from '../../../../../organization/organization.service';

@Component({
  selector: 'app-organization-funder-portfolio',
  templateUrl: './organization-funder-portfolio.component.html',
  styleUrls: ['./organization-funder-portfolio.component.scss'],
})
export class OrganizationFunderPortfolioComponent extends BaseListComponent<Organization> {
  constructor(public organizationService: OrganizationService) {
    super(organizationService);
  }

  override ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.loading = true;
    this.organizationService.getPortfolio().subscribe(() => {
      this.loading = false;
    });
  }
}
