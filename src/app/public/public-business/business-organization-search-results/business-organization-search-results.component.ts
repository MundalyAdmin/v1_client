import { Component } from '@angular/core';
import { OrganizationContainerComponent } from './../../public-community/organization/organization-container/organization-container.component';
import { OrganizationSearchData } from '../../public-community/organization/organization-search-data.model';
import { BaseListComponent } from '../../../shared/base-component';
import { Organization } from '../../../organization/organization.model';
import { OrganizationService } from '../../../organization/organization.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-business-organization-search-results',
  templateUrl: './business-organization-search-results.component.html',
  styleUrls: ['./business-organization-search-results.component.scss'],
})
export class BusinessOrganizationSearchResultsComponent extends BaseListComponent<Organization> {
  constructor(
    public organizationService: OrganizationService,
    public route: ActivatedRoute
  ) {
    super(organizationService);
  }

  override ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      window.scrollTo(0, 0);

      if (params['name']) this.getData(params['name']);
    });
  }

  getData(name: string) {
    this.loading = true;
    this.organizationService
      .search({ name } as OrganizationSearchData)
      .subscribe(() => {
        this.loading = false;
      });
  }
}
