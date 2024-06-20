import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrganizationDashboardCompleteRegistrationBaseComponent } from '../dashboard-organization-complete-registration-base/dashboard-organization-complete-registration-base.component';
import { OrganizationRegistrationService } from '../../../../auth/organization-registration/organization-registration.service';
import { Country } from '../../../../country/country.model';
import { CountryService } from '../../../../country/country.service';

@Component({
  selector: 'app-dashboard-organization-complete-registration-details',
  templateUrl:
    './dashboard-organization-complete-registration-details.component.html',
  styleUrls: [
    './dashboard-organization-complete-registration-details.component.scss',
  ],
})
export class DashboardOrganizationCompleteRegistrationDetailsComponent extends OrganizationDashboardCompleteRegistrationBaseComponent {
  @Input() override loading = false;
  countries: Country[] = [];
  @Output() previous = new EventEmitter();

  getCountryLoading = false;

  constructor(
    public override organizationRegistrationService: OrganizationRegistrationService,
    public countryService: CountryService
  ) {
    super(organizationRegistrationService, 'organizationDetailsForm');
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.getCountries();
  }

  getCountries() {
    this.getCountryLoading = true;
    this.countryService.get().subscribe((countries) => {
      this.countries = countries;
      this.getCountryLoading = false;
    });
  }
}
