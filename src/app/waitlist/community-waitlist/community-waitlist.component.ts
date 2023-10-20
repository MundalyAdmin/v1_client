import { Component } from '@angular/core';
import { BaseCreateComponent } from '../../shared/base-component';
import { CommunityWaitlist } from './community-waitlist.model';
import { WaitlistService } from '../waitlist.service';
import { CountryService } from '../../country/country.service';
import { Country } from '../../country/country.model';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-community-waitlist',
  templateUrl: './community-waitlist.component.html',
  styleUrls: ['./community-waitlist.component.scss'],
})
export class CommunityWaitlistComponent extends BaseCreateComponent<CommunityWaitlist> {
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
      email: ['', Validators.required],
      name: ['', Validators.required],
      country_id: ['', Validators.required],
    });
  }

  override create() {
    this.loading = true;
    this.waitListService.addCommunityWaitlist(this.form.value).subscribe({
      next: () => {
        this.loading = false;
        this.helper.notification.alertSuccess('Successfully registered');
        this.router.navigate(['/thank-you']);
        this.initForm();
      },
      error: () => {
        this.loading = false;
        this.helper.notification.alertDanger();
      },
    });
  }
}
