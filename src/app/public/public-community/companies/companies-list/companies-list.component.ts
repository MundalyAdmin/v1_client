import { Component } from '@angular/core';
import { BaseListComponent } from '../../../../shared/base-component';
import { Company } from '../../../../companies/companies.model';
import { CompaniesService } from '../../../../companies/companies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss'],
})
export class CompaniesListComponent extends BaseListComponent<Company> {
  constructor(
    public companyService: CompaniesService,
    public route: ActivatedRoute
  ) {
    super(companyService);
  }

  override ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.getByCategory(params['id']);
    });
  }

  getByCategory(categoryId: number) {
    this.loading = true;
    this.companyService.getByCategory(categoryId).subscribe(() => {
      this.loading = false;
    });
  }
}
