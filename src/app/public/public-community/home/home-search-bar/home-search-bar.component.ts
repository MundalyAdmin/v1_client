import { Component } from '@angular/core';
import { CompaniesService } from '../../../../companies/companies.service';
import { BaseComponent } from '../../../../shared/base-component';
import { Country } from '../../../../country/country.model';
import { CountryService } from '../../../../country/country.service';

@Component({
  selector: 'app-home-search-bar',
  templateUrl: './home-search-bar.component.html',
  styleUrls: ['./home-search-bar.component.scss'],
})
export class HomeSearchBarComponent extends BaseComponent<any> {
  keyword: string = 'name';
  countries: Country[] = [];
  selectedCountries: Country[] = [];
  constructor(
    public companyService: CompaniesService,
    public countryService: CountryService
  ) {
    super(companyService);
  }

  getCompanyNames(keyword: string) {
    this.loading = true;
    this.companyService.searchNames(keyword).subscribe((data) => {
      this.data = data;
      this.loading = false;
    });
  }

  getCountries() {
    this.countryService.get().subscribe({
      next: (response) => {
        this.countries = response;
      },
      error: () => {},
    });
  }

  onSelect(item: any) {}
}
