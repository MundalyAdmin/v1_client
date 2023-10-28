import { Component } from '@angular/core';
import { BaseCreateComponent } from '../../shared/base-component';
import { BusinessWaitlist } from './business-waitlist.model';
import { Country } from '../../country/country.model';
import { WaitlistService } from '../waitlist.service';
import { CountryService } from '../../country/country.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-business-waitlist',
  templateUrl: './business-waitlist.component.html',
  styleUrls: ['./business-waitlist.component.scss'],
})
export class BusinessWaitlistComponent extends BaseCreateComponent<BusinessWaitlist> {
  countryLoading: boolean = false;
  countries: Country[] = [];

  constructor(
    public waitListService: WaitlistService,
    public countryService: CountryService
  ) {
    super(waitListService);
  }

  ngOnInit(): void {
    this.getCountries();
    this.initForm();

    this.subscriptions['businessEmail'] =
      this.waitListService.businessEmail$.subscribe((email) => {
        this.form.controls['professional_email'].setValue(email);
      });
  }

  getCountries() {
    this.countryLoading = true;
    this.countryService.get().subscribe({
      next: (response) => {
        this.countries = response;
        this.countryLoading = false;
      },
      error: () => {
        this.countryLoading = false;
      },
    });
  }

  initForm() {
    this.form = this.fb.group({
      professional_email: ['', Validators.required],
      company_name: ['', Validators.required],
      name: ['', Validators.required],
      country_id: ['', Validators.required],
      job_title: ['', Validators.required],
      website: ['', Validators.required],
    });
  }

  override create() {
    this.loading = true;
    this.waitListService.addBusinessWaitlist(this.form.value).subscribe({
      next: () => {
        this.loading = false;
        this.helper.notification.alertSuccess('Successfully registered');
        this.router.navigate(['/for-business/thank-you']);
        this.initForm();
      },
      error: () => {
        this.loading = false;
        this.helper.notification.alertDanger();
      },
    });
  }
}
