import { Component } from '@angular/core';
import { BaseListComponent } from '../../../../shared/base-component';
import { Organization } from '../../../../organization/organization.model';
import { OrganizationService } from '../../../../organization/organization.service';
import { ActivatedRoute } from '@angular/router';
import { OrganizationSearchData } from '../organization-search-data.model';

@Component({
  selector: 'app-organization-container',
  templateUrl: './organization-container.component.html',
  styleUrls: ['./organization-container.component.scss'],
})
export class OrganizationContainerComponent extends BaseListComponent<Organization> {
  constructor(
    public organizationService: OrganizationService,
    public route: ActivatedRoute
  ) {
    super(organizationService);
  }

  override ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const searchData = {
        city_name: params['city_name'],
        country_name: params['country_name'],
      };

      this.getData(this.helper.object.removeBlankValues(searchData));
    });
  }

  getData(searchData: OrganizationSearchData) {
    this.loading = true;
    this.organizationService.search(searchData).subscribe(() => {
      this.loading = false;
    });
  }
}
