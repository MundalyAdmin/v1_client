import { Component, OnInit } from '@angular/core';
import { BaseCreateComponent } from '../../shared/base-component';
import { ImpactInitiative } from '../initiatives.model';
import { InitiativesService } from '../initiatives.service';
import { Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Organization } from '../../organization/organization.model';
import { Country } from '../../country/country.model';
import { CitySearchResult } from '../../country/city-search-result.model';
import { CountryService } from '../../country/country.service';

@Component({
  selector: 'app-impact-initiative-create',
  templateUrl: './impact-initiative-create.component.html',
  styleUrls: ['./impact-initiative-create.component.scss'],
})
export class ImpactInitiativeCreateComponent
  extends BaseCreateComponent<ImpactInitiative>
  implements OnInit
{
  organization: Organization | null = null;
  countries: Country[] = [];
  cityNames: CitySearchResult[] = [];
  countryLoading: boolean = false;
  cityLoading: boolean = false;
  constructor(
    public impactInitiativeService: InitiativesService,
    public authService: AuthService,
    public countryService: CountryService
  ) {
    super(impactInitiativeService);
  }

  ngOnInit(): void {
    this.subscriptions['authenticatedOrganization'] =
      this.authService.organization$.subscribe((organization) => {
        if (organization) this.initForm(organization.id!);
        this.organization = organization;
      });

    this.getCountries();
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

  getCitiesByName(event: any) {
    if (!event.query) {
      this.cityNames = [];
      return;
    }
    this.cityLoading = true;
    this.countryService.searchCitiesByName(event.query).subscribe((data) => {
      this.cityNames = data;
      this.cityLoading = false;
    });
  }

  onCitySelected(item: any) {
    const countryIndex = this.countries.findIndex(
      (country) =>
        country.name?.toLocaleLowerCase() ===
        item.value.countryName?.toLocaleLowerCase()
    );

    this.form.get('country')?.patchValue(this.countries[countryIndex]);
  }

  initForm(organizationId: number) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      start_date: [new Date(), Validators.required],
      end_date: [new Date()],
      country: ['', Validators.required],
      city: [
        { value: null, disabled: this.countryLoading },
        Validators.required,
      ],
      description: ['', Validators.required],
      organization_id: [organizationId, Validators.required],
    });
  }

  override closeModal() {
    this.initForm(this.organization?.id!);

    this.created.emit();
  }

  override create(): void {
    const data = {
      ...this.form.value,
      country: this.formValue('country').name,
      city: this.formValue('city').name,
    };

    if (this.form.valid) {
      this.loading = true;
      this.impactInitiativeService.store(data).subscribe({
        next: () => {
          this.loading = false;

          this.helper.notification.toastSuccess();

          this.closeModal();
        },
        error: () => {
          this.loading = false;
        },
      });
    } else {
      this.helper.notification.toastDanger('Form invalid');
    }
  }
}
