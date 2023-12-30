import { Component } from '@angular/core';
import { HomeSearchBarComponent } from '../../home/home-search-bar/home-search-bar.component';
import { OrganizationService } from '../../../../organization/organization.service';
import { CountryService } from '../../../../country/country.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../../../../country/country.model';
import { FormBuilder } from '@angular/forms';
import { Select2Value } from 'ng-select2-component';

@Component({
  selector: 'app-organization-search-bar',
  templateUrl: './organization-search-bar.component.html',
  styleUrls: ['./organization-search-bar.component.scss'],
})
export class OrganizationSearchBarComponent extends HomeSearchBarComponent {
  selectedCountry!: Select2Value;
  constructor(
    public override organizationService: OrganizationService,
    public override router: Router,
    public override countryService: CountryService,
    public route: ActivatedRoute,
    public override fb: FormBuilder
  ) {
    super(organizationService, countryService, router, fb);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.route.queryParams.subscribe((params) => {
      this.form.controls['keyword'].setValue(params['keyword'] || null);
      params['location'] &&
        this.form.controls['location'].setValue(params['location']);
    });
  }

  override getCountries() {
    this.countryService.get().subscribe({
      next: (response) => {
        response.map((country: Country) => {
          this.countries.push({
            value: country.name!,
            label: country.name!,
            data: country,
          });
        });
      },

      error: () => {},
    });
  }
}
