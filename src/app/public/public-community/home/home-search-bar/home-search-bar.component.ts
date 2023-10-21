import { Component, OnInit } from '@angular/core';
import { CompaniesService } from '../../../../companies/companies.service';
import { BaseComponent } from '../../../../shared/base-component';
import { Country } from '../../../../country/country.model';
import { CountryService } from '../../../../country/country.service';
import {
  Select2Data,
  Select2UpdateEvent,
  Select2Value,
} from 'ng-select2-component';

@Component({
  selector: 'app-home-search-bar',
  templateUrl: './home-search-bar.component.html',
  styleUrls: ['./home-search-bar.component.scss'],
})
export class HomeSearchBarComponent
  extends BaseComponent<any>
  implements OnInit
{
  keyword: string = 'name';
  countries: Country[] = [];
  dataCountries: Select2Data = [];
  selectedCountry: Select2Value = {};
  constructor(
    public companyService: CompaniesService,
    public countryService: CountryService
  ) {
    super(companyService);
  }

  ngOnInit(): void {
    this.getCountries();
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
        response.map((country: Country) => {
          this.dataCountries.push({
            value: country.id!,
            label: country.name!,
            data: country,
          });
        });

        this.selectedCountry = this.countries[0];
      },

      error: () => {},
    });
  }

  update(item: Select2UpdateEvent) {
    if (item.options) {
      this.selectedCountry = item.value;
    }
    console.log(this.selectedCountry);
  }
}
