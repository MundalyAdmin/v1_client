import { Component } from '@angular/core';
import { BaseCreateComponent } from '../../shared/base-component';
import { OrganizationWaitlist } from './organization-waitlist.model';
import { Country } from '../../country/country.model';
import { WaitlistService } from '../waitlist.service';
import { CountryService } from '../../country/country.service';
import { Validators } from '@angular/forms';
import { CustomHttpErrorResponse } from '../../shared/models/custom-http-error-response';
import { OrganizationWaitlistService } from './organization-waitlist.service';

@Component({
  selector: 'app-organization-waitlist',
  templateUrl: './organization-waitlist.component.html',
  styleUrls: ['./organization-waitlist.component.scss'],
})
export class OrganizationWaitlistComponent extends BaseCreateComponent<OrganizationWaitlist> {
  countryLoading: boolean = false;
  countries: Country[] = [];

  cityLoading: boolean = false;
  cities: string[] = [];

  constructor(
    public organizationWaitlistService: OrganizationWaitlistService,
    public countryService: CountryService
  ) {
    super(organizationWaitlistService);
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.initForm();
    this.getCountries();

    this.subscriptions['businessEmail'] =
      this.organizationWaitlistService.businessEmail$.subscribe((email) => {
        this.form.controls['professional_email'].setValue(email);
      });
  }

  getCountries() {
    this.countryLoading = true;
    this.countryService.get().subscribe({
      next: (response) => {
        this.countries = response;
        this.form.controls['country'].setValue(this.countries[0].name);
        this.countryLoading = false;
        this.formValuePatcher('country', this.countries[0].name!);
      },
      error: () => {
        this.countryLoading = false;
      },
    });
  }

  getCitiesByCountry(countryName: string) {
    this.cityLoading = true;
    this.countryService.searchCitiesByName(countryName).subscribe({
      next: (response) => {
        this.cities = response.map((city) => city.name!);
        this.cityLoading = false;
        this.formValuePatcher('city', this.cities[0]);
      },
      error: () => {
        this.cityLoading = false;
      },
    });
  }

  initForm() {
    this.form = this.fb.group({
      professional_email: ['', Validators.required],
      organization_name: ['', Validators.required],
      user_name: ['', Validators.required],
      country: ['', Validators.required],
      job_title: ['', Validators.required],
      website: ['', Validators.required],
    });

    this.form.controls['country'].valueChanges.subscribe((countryName) => {
      this.getCitiesByCountry(countryName);
    });

    if (this.countries.length > 0) {
      this.formValuePatcher('country', this.countries[0].name!);
    }
  }

  override create() {
    this.loading = true;
    this.organizationWaitlistService.store(this.form.value).subscribe({
      next: () => {
        this.loading = false;
        this.helper.notification.alertSuccess('Successfully registered');
        this.router.navigate(['/business/thank-you']);
        this.initForm();
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
