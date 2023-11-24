import { Component, OnInit } from '@angular/core';
import { BaseCreateComponent } from '../../../../shared/base-component';
import { Country } from '../../../../country/country.model';
import { CountryService } from '../../../../country/country.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-country-create',
  templateUrl: './settings-country-create.component.html',
  styleUrls: ['./settings-country-create.component.scss'],
})
export class SettingsCountryCreateComponent
  extends BaseCreateComponent<Country>
  implements OnInit
{
  constructor(public countryService: CountryService) {
    super(countryService);
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      code: ['', Validators.required],
    });
  }

  override create(): void {
    this.loading = true;
    this.countryService.store(this.form.value).subscribe({
      next: () => {
        this.loading = false;
        this.helper.notification.alertSuccess();
        this.form.reset();
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
