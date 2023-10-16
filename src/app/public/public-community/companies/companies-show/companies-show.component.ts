import { Component } from '@angular/core';
import { BaseSingleComponent } from '../../../../shared/base-component';
import { Company } from '../../../../companies/companies.model';
import { CompaniesService } from '../../../../companies/companies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-companies-show',
  templateUrl: './companies-show.component.html',
  styleUrls: ['./companies-show.component.scss'],
})
export class CompaniesShowComponent extends BaseSingleComponent<Company> {
  public override enableFetchDataFromURL: boolean = true;

  constructor(
    public companyService: CompaniesService,
    public override route: ActivatedRoute
  ) {
    super(companyService, route);
  }
}
