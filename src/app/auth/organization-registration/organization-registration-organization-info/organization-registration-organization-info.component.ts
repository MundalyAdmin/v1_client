import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseCreateComponent } from '../../../shared/base-component';
import { TypeOrganizationService } from '../../../organization/type-organization/type-organization.service';
import { SectorOrganizationService } from '../../../organization/sector-organization/sector-organization.service';
import { OrganizationRegistrationService } from '../organization-registration.service';
import { FormGroup } from '@angular/forms';
import { CountryService } from '../../../country/country.service';

@Component({
  selector: 'app-organization-registration-organization-info',
  templateUrl: './organization-registration-organization-info.component.html',
  styleUrls: ['./organization-registration-organization-info.component.scss'],
})
export class OrganizationRegistrationOrganizationInfoComponent
  extends BaseCreateComponent<any>
  implements OnInit
{
  @Output() previous = new EventEmitter();
  @Output() submitted = new EventEmitter();

  // Allow us to display the logo when the user uploads it
  logoLiveUrl: string | null = null;

  // Allow us to display the cover when the user uploads it
  coverLiveUrl: string | null = null;

  dependanciesLoading = {
    typeOrganization: false,
    sectorOrganization: false,
    country: false,
    tag: false,
  };

  dependancies: any = {
    typeOrganization: [],
    sectorOrganization: [],
    country: [],
    tag: [],
  };

  constructor(
    public typeOrganizationService: TypeOrganizationService,
    public sectorOrganizationService: SectorOrganizationService,
    public organizationRegistrationService: OrganizationRegistrationService,
    public countryService: CountryService
  ) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions['form'] =
      this.organizationRegistrationService.form$.subscribe((form) => {
        this.form = form.controls['organizationInfo'] as FormGroup;
      });

    this.getSectorOrganizations();
    this.getTypeOrganizations();
    this.getCountries();
  }

  getCountries() {
    this.dependanciesLoading.country = true;
    this.countryService.get().subscribe((countrys) => {
      this.dependancies.country = countrys;
      this.dependanciesLoading.typeOrganization = false;
    });
  }

  getTypeOrganizations() {
    this.dependanciesLoading.typeOrganization = true;
    this.typeOrganizationService.get().subscribe((typeOrganizations) => {
      this.dependancies.typeOrganization = typeOrganizations;
      this.dependanciesLoading.typeOrganization = false;
    });
  }

  // deleteImage(name: string) {
  //   if (name === 'logo') {
  //     this.logoLiveUrl = null;
  //   } else if (name === 'cover') {
  //     this.coverLiveUrl = null;
  //   }

  //   this.formData.delete(name);
  // }

  // override onFileChanged(event: any, name?: string) {
  //   let image = event.target.files[0];
  //   let reader = new FileReader();
  //   reader.readAsDataURL(image);

  //   let fieldName = '';

  //   reader.onload = () => {
  //     if (name === 'logo') {
  //       this.logoLiveUrl = reader.result as string;
  //       fieldName = 'logo';
  //     } else if (name === 'cover') {
  //       this.coverLiveUrl = reader.result as string;
  //       fieldName = 'cover';
  //     }

  //     this.organizationRegistrationService.formData.set(
  //       `organizationInfo[${fieldName}]`,
  //       image
  //     );
  //   };
  // }

  getSectorOrganizations() {
    this.dependanciesLoading.sectorOrganization = true;
    this.sectorOrganizationService.get().subscribe((sectorOrganizations) => {
      this.dependancies.sectorOrganization = sectorOrganizations;
      this.dependanciesLoading.sectorOrganization = false;
    });
  }

  submit() {
    this.organizationRegistrationService.updateFormSection(
      'organizationInfo',
      this.form
    );

    this.submitted.emit();
  }
}
