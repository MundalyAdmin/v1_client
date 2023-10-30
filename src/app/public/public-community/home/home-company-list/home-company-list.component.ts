import { Component } from '@angular/core';
import { BaseListComponent } from '../../../../shared/base-component';
import { Company } from '../../../../companies/companies.model';
import { CompaniesService } from '../../../../companies/companies.service';

@Component({
  selector: 'app-home-company-list',
  templateUrl: './home-company-list.component.html',
  styleUrls: ['./home-company-list.component.scss'],
})
export class HomeCompanyListComponent extends BaseListComponent<Company> {
  constructor(public companyService: CompaniesService) {
    super(companyService);
  }

  getAll() {
    this.loading = true;
    this.companyService.all().subscribe(() => {
      this.loading = false;
    });
  }
}
