import { Component } from '@angular/core';
import { BaseListComponent } from '../../../../shared/base-component';
import { Company } from '../../../../companies/companies.model';
import { CompaniesService } from '../../../../companies/companies.service';
import { ActivatedRoute } from '@angular/router';
import { CompanySearchData } from '../companies-search-data.model';

@Component({
  selector: 'app-companies-container',
  templateUrl: './companies-container.component.html',
  styleUrls: ['./companies-container.component.scss'],
})
export class CompaniesContainerComponent extends BaseListComponent<Company> {
  constructor(
    public companyService: CompaniesService,
    public route: ActivatedRoute
  ) {
    super(companyService);
  }

  override ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const searchData = {
        keyword: params['keyword'],
        country_id: params['country_id'],
      };

      this.getData(this.helper.object.removeBlankValues(searchData));
    });
  }

  getData(searchData: CompanySearchData) {
    this.loading = true;
    this.companyService.search(searchData).subscribe(() => {
      this.loading = false;
    });
  }
}
