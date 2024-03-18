import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs';
import { CitySearchResult } from '../../../../country/city-search-result.model';
import { Country } from '../../../../country/country.model';
import { CountryService } from '../../../../country/country.service';
import { OrganizationService } from '../../../../organization/organization.service';
import { BaseCreateComponent } from '../../../../shared/base-component';

@Component({
  selector: 'app-home-search-bar',
  templateUrl: './home-search-bar.component.html',
  styleUrls: ['./home-search-bar.component.scss'],
})
export class HomeSearchBarComponent
  extends BaseCreateComponent<any>
  implements OnInit
{
  // List of countries
  // Object schema required by Select2
  countries: Country[] = [];

  // List of organization
  cityNames: CitySearchResult[] = [];

  constructor(
    public organizationService: OrganizationService,
    public countryService: CountryService,
    public route?: ActivatedRoute
  ) {
    super(organizationService);
  }

  ngOnInit(): void {
    this.getCountries();

    this.form = this.fb.group({
      city_name: ['', Validators.required],
      country_name: [null],
    });

    // Triggered when the user types in the input
    // Debounce the search name request to avoid overloading the server
    this.form.controls['city_name'].valueChanges
      .pipe(debounceTime(800))
      .subscribe((city_name) => {
        // Ignore empty values
        if (!city_name) {
          this.cityNames = [];
          return;
        }

        // the value of the input should be a string to trigger the search
        if (typeof city_name === 'string') this.getCitiesByName(city_name);
      });
  }

  getCitiesByName(name: string) {
    this.loading = true;
    this.countryService.searchCitiesByName(name).subscribe((data) => {
      this.cityNames = data;
      this.loading = false;
    });
  }

  // Get the list of all countries and parse it into Select2Data
  // TODO: update country
  getCountries() {
    this.countryService.get().subscribe({
      next: (response) => {
        this.countries = response;
      },
      error: () => {},
    });
  }

  // Update the country name automatically when a user selects a city
  onCitySelected(item: CitySearchResult) {
    this.formValuePatcher('country_name', item.countryName);
  }

  search() {
    const data = {
      city_name: this.form.controls['city_name'].value.name,
      country_name: this.form.controls['country_name'].value,
    };

    this.router.navigate(['/organizations/search'], {
      queryParams: data,
      relativeTo: this.route,
    });
  }
}
