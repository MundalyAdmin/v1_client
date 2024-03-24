import { Component, OnInit } from '@angular/core';
import { BaseCreateComponent } from '../../../shared/base-component';
import { Organization } from '../../../organization/organization.model';
import { OrganizationService } from '../../../organization/organization.service';
import { Country } from '../../../country/country.model';
import { TypeOrganization } from '../../../organization/type-organization/type-organization.model';
import { SectorOrganization } from '../../../organization/sector-organization/sector-organization.model';
import { TagOrganization } from '../../../organization/tag-organization/tag-organization.model';
import { Select2Data, Select2UpdateEvent } from 'ng-select2-component';
import { SectorOrganizationService } from '../../../organization/sector-organization/sector-organization.service';
import { CountryService } from '../../../country/country.service';
import { TypeOrganizationService } from '../../../organization/type-organization/type-organization.service';
import { TagOrganizationService } from '../../../organization/tag-organization/tag-organization.service';
import { Validators } from '@angular/forms';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-super-admin-organization-create',
  templateUrl: './super-admin-organization-create.component.html',
  styleUrls: ['./super-admin-organization-create.component.scss'],
})
export class SuperAdminOrganizationCreateComponent
  extends BaseCreateComponent<Organization>
  implements OnInit
{
  // List of dependancies
  countries: Country[] = [];
  cities: string[] = [];
  typeOrganizations: TypeOrganization[] = [];
  sectorOrganizations: SectorOrganization[] = [];
  tagOrganizations: TagOrganization[] = [];
  ngMultiselectDropdownSettings: any;

  // Loading of dependancies
  isLoading = {
    countries: false,
    cities: false,
    typeOrganizations: false,
    sectorOrganizations: false,
    tagOrganizations: false,
  };

  constructor(
    public organizationService: OrganizationService,
    public typeOrganizationService: TypeOrganizationService,
    public sectorOrganizationService: SectorOrganizationService,
    public tagService: TagOrganizationService,
    public countryService: CountryService,
    public authService: AuthService
  ) {
    super(organizationService);
  }

  ngOnInit() {
    this.ngMultiselectDropdownSettings = {
      ...this.helper.dropdownSettings.single,
      idField: 'name',
    };
    this.initForm();

    this.getCountries();
    this.getTypeOrganizations();
    this.getSectorOrganizations();
    this.getTagOrganizations();
  }

  initForm(organization?: Organization) {
    const name = organization?.name || '';
    const about = organization?.about || '';
    const country = [{ name: organization?.country }] || [];
    const type_organization = [organization?.type_organization] || [];
    const sector_organization = [organization?.sector_organization] || [];
    const tag_organizations = organization?.tag_organizations || [];
    const email = organization?.email || '';
    const website = organization?.website || '';
    const city = organization?.city || '';
    const creator_id = organization?.creator_id || this.authService.user?.id;

    this.form = this.fb.group({
      name: [name, Validators.required],
      about: [about, Validators.required],
      country: [country, Validators.required],
      type_organization: [type_organization, Validators.required],
      sector_organization: [sector_organization, Validators.required],
      tag_organizations: [tag_organizations, Validators.required],
      email: [email, Validators.required],
      website: [website, Validators.required],
      city: [city, Validators.required],
      creator_id: [creator_id, Validators.required],
    });

    this.form.controls['country'].valueChanges.subscribe(
      (country: Country[]) => {
        this.getCitiesByCountry(country[0].name!);
      }
    );

    // Allow us to reload the form by creating or destroying the form with ngIf="isFormOk"
    this.isFormOk = true;
  }

  getCountries() {
    this.isLoading.countries = true;
    this.countryService.get().subscribe({
      next: (response) => {
        this.countries = response;
        this.isLoading.countries = false;
      },

      error: () => {
        this.isLoading.countries = false;
      },
    });
  }

  getCitiesByCountry(countryName: string) {
    this.isLoading.cities = true;
    this.countryService.searchCitiesByName(countryName).subscribe({
      next: (response) => {
        this.cities = response.map((city) => city.name!);
        this.isLoading.cities = false;
      },

      error: () => {
        this.isLoading.cities = false;
      },
    });
  }

  getTypeOrganizations() {
    this.isLoading.typeOrganizations = true;
    this.typeOrganizationService.get().subscribe({
      next: (response) => {
        this.typeOrganizations = response;
        this.isLoading.typeOrganizations = false;
      },

      error: () => {
        this.isLoading.typeOrganizations = false;
      },
    });
  }

  getSectorOrganizations() {
    this.isLoading.sectorOrganizations = true;
    this.sectorOrganizationService.get().subscribe({
      next: (response) => {
        this.sectorOrganizations = response;
        this.isLoading.sectorOrganizations = false;
      },

      error: () => {
        this.isLoading.sectorOrganizations = false;
      },
    });
  }

  getTagOrganizations() {
    this.isLoading.tagOrganizations = true;
    this.tagService.get().subscribe({
      next: (response) => {
        this.tagOrganizations = response;
        this.isLoading.tagOrganizations = false;
      },

      error: () => {
        this.isLoading.tagOrganizations = false;
      },
    });
  }

  reloadForm() {
    this.isFormOk = false;
    setTimeout(() => {
      this.initForm();
    }, 1);
  }

  override create(): void {
    if (this.form.invalid) {
      this.helper.notification.alertDanger('Form Invalid');
      return;
    }

    this.loading = true;

    const {
      type_organization,
      sector_organization,
      country,
      city,
      tag_organizations,
      ...formData
    } = this.form.value;

    const data = {
      ...formData,
      type_organization_id: type_organization[0].id,
      sector_organization_id: sector_organization[0].id,
      country: country[0].name,
      city: city[0],
      tag_organizations: tag_organizations.map(
        (tag: TagOrganization) => tag.name
      ),
    };

    this.fillFormData(data);
    this.organizationService.store(this.formData).subscribe({
      next: () => {
        this.loading = false;

        // Alert Success
        this.helper.notification.alertSuccess();

        // Reset forms
        this.reloadForm();

        this.formData = new FormData();
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
