import { Component } from '@angular/core';
import { BaseSingleComponent } from '../../../../../shared/base-component';
import { Company } from '../../../../../companies/companies.model';
import { CompaniesService } from '../../../../../companies/companies.service';

@Component({
  selector: 'app-companies-show-overview',
  templateUrl: './companies-show-overview.component.html',
  styleUrls: ['./companies-show-overview.component.scss'],
})
export class CompaniesShowOverviewComponent extends BaseSingleComponent<Company> {
  constructor(public companyService: CompaniesService) {
    super(companyService);
  }
}
