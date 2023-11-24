import { Component } from '@angular/core';
import { BaseEditComponent } from '../../../../shared/base-component';
import { Country } from '../../../../country/country.model';
import { CountryService } from '../../../../country/country.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-country-edit',
  templateUrl: './settings-country-edit.component.html',
  styleUrls: ['./settings-country-edit.component.scss'],
})
export class SettingsCountryEditComponent extends BaseEditComponent<Country> {
  constructor(public countryService: CountryService) {
    super(countryService);
  }

  ngOnInit() {
    this.subscriptions['country'] = this.countryService.singleData$.subscribe(
      (country) => {
        if (country) {
          this.single = country;
          this.initForm(country);
        }
      }
    );
  }

  initForm(country: Country) {
    this.form = this.fb.group({
      name: [country.name, Validators.required],
      code: [country.code, Validators.required],
    });
  }

  edit(): void {
    this.loading = true;
    this.countryService.update(this.single.id, this.form.value).subscribe({
      next: () => {
        this.loading = false;
        this.helper.notification.alertSuccess();
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
