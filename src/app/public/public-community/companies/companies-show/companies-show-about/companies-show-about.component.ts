import { Component } from '@angular/core';
import { BaseSingleComponent } from '../../../../../shared/base-component';
import { Company } from '../../../../../companies/companies.model';
import { CompaniesService } from '../../../../../companies/companies.service';

@Component({
  selector: 'app-companies-show-about',
  templateUrl: './companies-show-about.component.html',
  styleUrls: ['./companies-show-about.component.scss'],
})
export class CompaniesShowAboutComponent extends BaseSingleComponent<Company> {
  constructor(public companyService: CompaniesService) {
    super(companyService);
  }
}
