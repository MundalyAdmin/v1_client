import { Component, OnInit } from '@angular/core';
import { BaseCreateComponent } from '../../shared/base-component';
import { InitiativesService } from '../initiatives.service';
import { Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Organization } from '../../organization/organization.model';
import { Country } from '../../country/country.model';
import { CitySearchResult } from '../../country/city-search-result.model';
import { CountryService } from '../../country/country.service';
import { ImpactInitiative } from '../../scale/impact-initiative/impact-initiative.model';
import { ImpactInitiativeService } from '../../scale/impact-initiative/impact-initiative.service';

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
  cityNames: CitySearchResult[] = [];
  cityLoading: boolean = false;
  minDate!: Date;
  maxDate!: Date;
  constructor(
    public impactInitiativeService: ImpactInitiativeService,
    public authService: AuthService,
    public countryService: CountryService
  ) {
    super(impactInitiativeService);
  }

  override ngOnInit(): void {
    this.subscriptions['authenticatedOrganization'] =
      this.authService.organization$.subscribe((organization) => {
        if (organization) this.initForm(organization.id!);
        this.organization = organization;
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
    this.form.get('country')?.patchValue(item.value.countryName);
  }

  initForm(organizationId: number) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      start_date: [null, Validators.required],
      end_date: [null],
      country: ['', Validators.required],
      city: [null, Validators.required],
      description: ['', Validators.required],
      organization_id: [organizationId, Validators.required],
    });

    this.form.controls['start_date'].valueChanges.subscribe((value) => {
      this.minDate = value;
    });

    this.form.controls['end_date'].valueChanges.subscribe((value) => {
      this.maxDate = value;
    });
  }

  closeModal() {
    this.initForm(this.organization?.id!);

    this.created.emit();
  }

  override create(): void {
    const data = {
      ...this.form.value,
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
