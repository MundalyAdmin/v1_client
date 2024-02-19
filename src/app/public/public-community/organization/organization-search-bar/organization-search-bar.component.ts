import { Component } from '@angular/core';
import { HomeSearchBarComponent } from '../../home/home-search-bar/home-search-bar.component';
import { OrganizationService } from '../../../../organization/organization.service';
import { CountryService } from '../../../../country/country.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    public override route: ActivatedRoute
  ) {
    super(organizationService, countryService);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    // Get the query params and set the form values
    this.route.queryParams.subscribe((params) => {
      this.formValuePatcher('city_name', params['city_name']);
      params['country_name'] &&
        this.formValuePatcher('country_name', params['country_name']);
    });
  }

  override search() {
    const data = {
      city_name: this.form.controls['city_name'].value.name,
      country_name: this.form.controls['country_name'].value,
    };

    this.router.navigate(['./'], {
      queryParams: data,
      relativeTo: this.route,
    });
  }
}
