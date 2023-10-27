import { Component } from '@angular/core';
import { HomeSearchBarComponent } from '../../home/home-search-bar/home-search-bar.component';
import { CompaniesService } from '../../../../companies/companies.service';
import { CountryService } from '../../../../country/country.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../../../country/country.model';
import { FormBuilder } from '@angular/forms';
import { Select2Value } from 'ng-select2-component';

@Component({
  selector: 'app-companies-search-bar',
  templateUrl: './companies-search-bar.component.html',
  styleUrls: ['./companies-search-bar.component.scss'],
})
export class CompaniesSearchBarComponent extends HomeSearchBarComponent {
  selectedCountry!: Select2Value;
  constructor(
    public override companyService: CompaniesService,
    public override router: Router,
    public override countryService: CountryService,
    public route: ActivatedRoute,
    public override fb: FormBuilder
  ) {
    super(companyService, countryService, router, fb);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.route.queryParams.subscribe((params) => {
      this.form.controls['keyword'].setValue(params['keyword']);
      this.form.controls['country_id'].setValue(+params['country_id']);
    });
  }

  override getCountries() {
    this.countryService.get().subscribe({
      next: (response) => {
        console.log(this.form.value);

        response.map((country: Country) => {
          this.countries.push({
            value: country.id!,
            label: country.name!,
            data: country,
          });
        });
      },

      error: () => {},
    });
  }
}
