import { Component } from '@angular/core';
import { BaseSingleComponent } from '../../../../../shared/base-component';
import { Company } from '../../../../../companies/companies.model';
import { CompaniesService } from '../../../../../companies/companies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-companies-show-hero',
  templateUrl: './companies-show-hero.component.html',
  styleUrls: ['./companies-show-hero.component.scss'],
})
export class CompaniesShowHeroComponent extends BaseSingleComponent<Company> {
  constructor(
    public companyService: CompaniesService,
    public override route: ActivatedRoute
  ) {
    super(companyService, route);
  }
}
