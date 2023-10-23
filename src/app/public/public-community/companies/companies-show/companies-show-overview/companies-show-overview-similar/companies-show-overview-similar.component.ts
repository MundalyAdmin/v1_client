import { Component } from '@angular/core';
import { BaseListComponent } from '../../../../../../shared/base-component';
import { Company } from '../../../../../../companies/companies.model';
import { CompaniesService } from '../../../../../../companies/companies.service';

@Component({
  selector: 'app-companies-show-overview-similar',
  templateUrl: './companies-show-overview-similar.component.html',
  styleUrls: ['./companies-show-overview-similar.component.scss'],
})
export class CompaniesShowOverviewSimilarComponent extends BaseListComponent<Company> {
  constructor(public companiesService: CompaniesService) {
    super(companiesService);
  }

  override ngOnInit(): void {
    this.subscriptions['companies'] =
      this.companiesService.singleData$.subscribe((company) => {
        this.getData(company!);
      });
  }

  getData(company: Company) {
    this.loading = true;
    this.companiesService.getSimilar(company.id!).subscribe(
      (data) => {
        this.data = data;
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }
}
