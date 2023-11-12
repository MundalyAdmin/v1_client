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
  countries: Select2Data = [];
  typeOrganizations: Select2Data = [];
  sectorOrganizations: Select2Data = [];
  tagOrganizations: Select2Data = [];

  isLoading = {
    countries: false,
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
    this.initForm();

    this.getCountries();
    this.getTypeOrganizations();
    this.getSectorOrganizations();
    this.getTagOrganizations();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      about: ['', Validators.required],
      country_id: [null, Validators.required],
      type_organization_id: [null, Validators.required],
      sector_organization_id: [null, Validators.required],
      tags: [[], Validators.required],
      email: [null, Validators.required],
      website: [null, Validators.required],
      location: [null, Validators.required],
      creator_id: [this.authService.user.id, Validators.required],
    });
  }

  onSelectItem(item: Select2UpdateEvent, fieldName: string, multiple = false) {
    this.form.controls[fieldName].setValue(item.value);
  }

  getCountries() {
    this.isLoading.countries = true;
    this.countryService.get().subscribe({
      next: (response) => {
        response.map((country: Country) => {
          this.countries.push({
            value: country.id!,
            label: country.name!,
            data: country,
          });
        });

        this.isLoading.countries = false;
      },

      error: () => {},
    });
  }

  getTypeOrganizations() {
    this.isLoading.typeOrganizations = true;
    this.typeOrganizationService.get().subscribe({
      next: (response) => {
        response.map((typeOrganization: TypeOrganization) => {
          this.typeOrganizations.push({
            value: typeOrganization.id!,
            label: typeOrganization.name!,
            data: typeOrganization,
          });
        });

        this.isLoading.typeOrganizations = false;
      },

      error: () => {},
    });
  }

  getSectorOrganizations() {
    this.isLoading.sectorOrganizations = true;
    this.sectorOrganizationService.get().subscribe({
      next: (response) => {
        response.map((sectorOrganization: SectorOrganization) => {
          this.sectorOrganizations.push({
            value: sectorOrganization.id!,
            label: sectorOrganization.name!,
            data: sectorOrganization,
          });
        });

        this.isLoading.sectorOrganizations = false;
      },

      error: () => {},
    });
  }

  getTagOrganizations() {
    this.isLoading.tagOrganizations = true;
    this.tagService.get().subscribe({
      next: (response) => {
        response.map((tagOrganization: Organization) => {
          this.tagOrganizations.push({
            value: tagOrganization.name!,
            label: tagOrganization.name!,
            data: tagOrganization,
          });
        });

        this.isLoading.tagOrganizations = false;
      },

      error: () => {},
    });
  }

  override create(callback?: Function | undefined): void {
    this.loading = true;
    this.fillFormData(this.form.value);
    this.organizationService.store(this.formData).subscribe({
      next: () => {
        this.loading = false;

        // Alert Success
        this.helper.notification.alertSuccess();

        // Reset forms
        this.form.reset();
        this.formData = new FormData();
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
