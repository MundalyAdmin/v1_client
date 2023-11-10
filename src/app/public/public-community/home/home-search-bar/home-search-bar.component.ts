import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../../../../organization/organization.service';
import { BaseComponent } from '../../../../shared/base-component';
import { Country } from '../../../../country/country.model';
import { CountryService } from '../../../../country/country.service';
import {
  Select2Data,
  Select2UpdateEvent,
  Select2Value,
} from 'ng-select2-component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-search-bar',
  templateUrl: './home-search-bar.component.html',
  styleUrls: ['./home-search-bar.component.scss'],
})
export class HomeSearchBarComponent
  extends BaseComponent<any>
  implements OnInit
{
  // List of countries
  // Object schema required by Select2
  countries: Select2Data = [];

  // List of organization
  organizationNames: { name: string }[] = [];

  form!: FormGroup;

  constructor(
    public organizationService: OrganizationService,
    public countryService: CountryService,
    public router: Router,
    public fb: FormBuilder
  ) {
    super(organizationService);
  }

  ngOnInit(): void {
    this.getCountries();

    this.form = this.fb.group({
      keyword: ['', Validators.required],
      country_id: [null],
    });
  }

  // Triggered when the user types a keyword
  // Search Organization names into the database to
  // to populate the Autocomplete component
  getOrganizationNames(keyword: string) {
    this.loading = true;
    this.organizationService.searchNames(keyword).subscribe((data) => {
      this.organizationNames = data;
      this.loading = false;
    });
  }

  // Get the list of all countries and parse it into Select2Data
  getCountries() {
    this.countryService.get().subscribe({
      next: (response) => {
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

  // Triggered when the user selects a country
  // Update the form with the selected country
  onCountrySelected(item: Select2UpdateEvent) {
    this.form.controls['country_id'].setValue(item.value);
  }

  search() {
    const data = {
      keyword:
        typeof this.form.controls['keyword'].value === 'string'
          ? this.form.controls['keyword'].value
          : (this.form.controls['keyword'].value as { name: string }).name,
      country_id: this.form.controls['country_id'].value,
    };
    this.router.navigate(['/organization/search'], {
      queryParams: data,
    });
  }
}
