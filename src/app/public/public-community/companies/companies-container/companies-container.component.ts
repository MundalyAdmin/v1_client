import { Component } from '@angular/core';
import { BaseListComponent } from '../../../../shared/base-component';
import { Company } from '../../../../companies/companies.model';
import { CompaniesService } from '../../../../companies/companies.service';
import { ActivatedRoute } from '@angular/router';

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
      this.getData(params['keyword']);
    });
  }

  getData(keyword: string) {
    this.loading = true;
    this.companyService.research(keyword).subscribe(() => {
      this.loading = false;
    });
  }
}
