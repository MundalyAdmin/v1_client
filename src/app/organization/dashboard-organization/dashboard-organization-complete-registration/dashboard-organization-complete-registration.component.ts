import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../auth/auth.service';
import { OrganizationRegistrationService } from '../../../auth/organization-registration/organization-registration.service';
import { BaseCreateComponent } from '../../../shared/base-component';
import { SectorOrganizationService } from '../../sector-organization/sector-organization.service';
import { TypeOrganizationService } from '../../type-organization/type-organization.service';
import { Storage } from '../../../shared/helpers/storage/storage';
import { CountryService } from '../../../country/country.service';

@Component({
  selector: 'app-dashboard-organization-complete-registration',
  templateUrl: './dashboard-organization-complete-registration.component.html',
  styleUrls: ['./dashboard-organization-complete-registration.component.scss'],
})
export class DashboardOrganizationCompleteRegistrationComponent
  extends BaseCreateComponent<any>
  implements OnInit
{
  updatePasswordForm?: FormGroup;
  organizationInfoForm?: FormGroup;
  organizationDetailsForm?: FormGroup;

  dependanciesLoading = {
    country: false,
    sectorOrganization: false,
  };

  dependancies: any = {
    country: [],
    sectorOrganization: [],
  };

  activeSteps = {
    updatePasswordForm: true,
    organizationInfoForm: false,
    organizationDetailsForm: false,
  };

  constructor(
    public typeOrganizationService: TypeOrganizationService,
    public sectorOrganizationService: SectorOrganizationService,
    public storage: Storage,
    public organizationRegistrationService: OrganizationRegistrationService,
    public countryService: CountryService
  ) {
    super();
  }

  override ngOnInit() {
    this.initform();

    this.subscriptions['currentLoggedOrganizatio'] =
      this.authService.organization$.subscribe((organization) => {
        if (organization)
          this.form.patchValue({ organization_id: organization.id });
      });
  }

  closeAllSteps() {
    this.activeSteps = {
      updatePasswordForm: false,
      organizationInfoForm: false,
      organizationDetailsForm: false,
    };
  }

  showStep(
    stepName:
      | 'updatePasswordForm'
      | 'organizationInfoForm'
      | 'organizationDetailsForm'
  ) {
    this.closeAllSteps();
    this.activeSteps[stepName] = true;
  }

  onLogoUpdated(event: any) {
    this.formData = event;
  }

  initform() {
    this.form = this.fb.group({
      updatePasswordForm: this.fb.group(
        {
          password: [null, [Validators.required, Validators.minLength(6)]],
          password_confirmation: [null, Validators.required],
        },
        { validators: this.passwordMatchingValidatior }
      ),
      organizationDetailsForm: this.fb.group({
        website: [null, Validators.required],
        country: [null, Validators.required],
      }),
      organizationInfoForm: this.fb.group({
        about: [null, Validators.required],
        sector_organizations: [null, Validators.required],
      }),
      organization_id: [null, Validators.required],
    });

    this.organizationRegistrationService.form = this.form;
  }

  passwordMatchingValidatior: ValidatorFn = (
    control: AbstractControl,
    passwordFieldName = 'password',
    passwordConfirmationFieldName = 'password_confirmation'
  ): ValidationErrors | null => {
    const password = control.get(passwordFieldName);
    const confirmPassword = control.get(passwordConfirmationFieldName);

    return password?.value === confirmPassword?.value
      ? null
      : { notmatched: true };
  };

  submit() {
    if (this.form.valid) {
      this.loading = true;

      const {
        updatePasswordForm,
        organizationInfoForm,
        organizationDetailsForm,
        organization_id,
      } = this.form.controls;

      const data = {
        ...updatePasswordForm.value,
        ...organizationInfoForm.value,
        ...organizationDetailsForm.value,
        country: organizationDetailsForm.value.country.name,
        sector_organization_ids: this.helper.arrayObject.extractField(
          organizationInfoForm.value.sector_organizations,
          'id'
        ),
        organization_id: organization_id.value,
      };

      this.fillFormData(data);

      this.authService
        .completeOrganizationRegistration(this.formData)
        .subscribe({
          next: () => {
            this.loading = false;
            this.helper.notification.toastSuccess(
              'Organization Information updated successfully'
            );

            this.created.emit();
          },
          error: () => {
            this.loading = false;
          },
        });
    }
  }
}
