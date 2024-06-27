import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import {
  CountryISO,
  PhoneNumberFormat,
  SearchCountryField,
} from 'ngx-intl-tel-input-gg';
import { TypeOrganizationService } from '../../organization/type-organization/type-organization.service';
import { BaseCreateComponent } from '../../shared/base-component';
import { Storage } from '../../shared/helpers/storage/storage';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { OrganizationService } from '../../organization/organization.service';
import { Organization } from '../../organization/organization.model';

@Component({
  selector: 'app-organization-registration',
  templateUrl: './organization-registration.component.html',
  styleUrls: ['./organization-registration.component.scss'],
})
export class OrganizationRegistrationComponent
  extends BaseCreateComponent<any>
  implements OnInit
{
  // If the user has been invited as an impact partners, An organization has been already created forr them
  // The organizationId will be passed in the url And Instead of creating a new organization during registration
  // The existing one will be updated
  userOrganization: Organization | null = null;

  pageLoading = false;

  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.Ghana,
  ];

  dependanciesLoading = {
    typeOrganization: false,
  };

  dependancies: any = {
    typeOrganization: [],
  };

  constructor(
    public typeOrganizationService: TypeOrganizationService,
    public storage: Storage,
    public route: ActivatedRoute,
    public organizationService: OrganizationService
  ) {
    super();
  }

  override ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params['organizationId']) {
        this.pageLoading = true;
        this.organizationService
          .show(+params['organizationId'])
          .subscribe((organization) => {
            this.form.patchValue({
              email: organization.admins?.at(0)?.email,
              organization_name: organization.name,
            });

            this.userOrganization = organization;

            this.pageLoading = false;
          });

        this.router.navigate(['./'], { relativeTo: this.route });
      }
    });
    this.initform();

    this.getTypeOrganizationsByCategoryOrganization(1);
  }

  initform() {
    const workEmailValidationRegex =
      /\b[A-Za-z0-9._%+-]+@(?!gmail|yahoo|outlook)(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}\b/;

    this.form = this.fb.group({
      name: [null, Validators.required],
      email: [
        null,
        [Validators.required, Validators.pattern(workEmailValidationRegex)],
      ],
      organization_name: [null, Validators.required],
      type_organization: [null, Validators.required],
      phone_number: [null, Validators.required],
      category_organization: [1, Validators.required],
    });

    this.form.controls['category_organization'].valueChanges.subscribe(
      (value) => {
        if (value) this.getTypeOrganizationsByCategoryOrganization(value);
      }
    );
  }

  getTypeOrganizationsByCategoryOrganization(categoryOrganizationId: number) {
    this.dependanciesLoading.typeOrganization = true;
    this.typeOrganizationService
      .getByCategoryOrganization(categoryOrganizationId)
      .subscribe((typeOrganizations) => {
        this.dependancies.typeOrganization = typeOrganizations;
        this.dependanciesLoading.typeOrganization = false;
      });
  }

  updateCategoryOrganization(categoryOrganiztionId: number) {
    this.form.get('category_organization')!.setValue(categoryOrganiztionId);
  }

  submit() {
    if (this.form.valid) {
      this.loading = true;

      const data = {
        ...this.helper.object.removeFields(this.form.value, [
          'phone_number',
          'category_organization',
          'type_organization',
        ]),
        type_organization_id: this.form.value.type_organization.id,
        phone_number: this.form.value.phone_number?.e164Number,
      };

      const registrationMedthod = this.userOrganization
        ? this.authService.updateOrganizationRegistration(
            this.userOrganization.id!,
            data
          )
        : this.authService.registerOrganization(data);

      registrationMedthod.subscribe({
        next: () => {
          this.loading = false;
          this.helper.notification.toastSuccess(
            'Organization successfully registered'
          );

          setTimeout(() => {
            this.router.navigate(['/auth/registration-success']);
          }, 100);
        },
        error: () => {
          this.loading = false;
        },
      });
    }
  }
}
