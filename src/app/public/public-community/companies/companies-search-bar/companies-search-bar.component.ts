import { Component } from '@angular/core';
import { HomeSearchBarComponent } from '../../home/home-search-bar/home-search-bar.component';
import { CompaniesService } from '../../../../companies/companies.service';
import { CountryService } from '../../../../country/country.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../../../country/country.model';

@Component({
  selector: 'app-companies-search-bar',
  templateUrl: './companies-search-bar.component.html',
  styleUrls: ['./companies-search-bar.component.scss'],
})
export class CompaniesSearchBarComponent extends HomeSearchBarComponent {
  constructor(
    public override companyService: CompaniesService,
    public override router: Router,
    public override countryService: CountryService,
    public route: ActivatedRoute
  ) {
    super(companyService, countryService, router);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.route.queryParams.subscribe((params) => {
      this.name = params['keyword'];
    });
  }

  override getCountries() {
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
}
