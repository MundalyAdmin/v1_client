import { Component } from '@angular/core';
import { BaseListComponent } from '../../../../shared/base-component';
import { Country } from '../../../../country/country.model';
import { CountryService } from '../../../../country/country.service';

@Component({
  selector: 'app-settings-country-list',
  templateUrl: './settings-country-list.component.html',
  styleUrls: ['./settings-country-list.component.scss'],
})
export class SettingsCountryListComponent extends BaseListComponent<Country> {
  constructor(public countryService: CountryService) {
    super(countryService);
  }

  edit(country: Country) {
    this.countryService.singleData = country;
  }

  delete(country: Country) {
    this.helper.notification.confirm(
      `Deleting ${country.name}`,
      'Are you sure to delete this country?',
      () => {
        this.loading = true;
        this.countryService.delete(country.id!).subscribe({
          next: () => {
            this.loading = false;
            this.helper.notification.alertSuccess();
          },
          error: () => {
            this.loading = false;
          },
        });
      }
    );
  }
}
