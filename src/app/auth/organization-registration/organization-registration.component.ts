import { Component, OnInit } from '@angular/core';
import {
  BaseComponent,
  BaseCreateComponent,
} from '../../shared/base-component';
import {
  AbstractControl,
  FormArray,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { TypeOrganizationService } from '../../organization/type-organization/type-organization.service';
import { SectorOrganizationService } from '../../organization/sector-organization/sector-organization.service';
import { Storage } from '../../shared/helpers/storage/storage';
import { AuthService } from '../auth.service';
import { OrganizationService } from '../../organization/organization.service';
import { OrganizationRegistrationService } from './organization-registration.service';

@Component({
  selector: 'app-organization-registration',
  templateUrl: './organization-registration.component.html',
  styleUrls: ['./organization-registration.component.scss'],
})
export class OrganizationRegistrationComponent
  extends BaseCreateComponent<any>
  implements OnInit
{
  // reportForm?: FormGroup;
  selectedReportFile: File | null = null;

  adminInfoForm?: FormGroup;
  organizationInfoForm?: FormGroup;
  // reportsUploadForm?: FormGroup;

  dependanciesLoading = {
    typeOrganization: false,
    sectorOrganization: false,
  };

  dependancies: any = {
    typeOrganization: [],
    sectorOrganization: [],
  };

  activeSteps = {
    adminInfo: true,
    organizationInfo: false,
    termsAndConditions: false,
  };

  // get reports() {
  //   return (
  //     JSON.parse(this.formData.get('reportsUpload') as string)?.reports || []
  //   );
  // }

  // onReportsUpload(event: any) {
  //   this.selectedReportFile = event.target.files[0];
  //   this.reportForm?.get('file')?.patchValue(this.selectedReportFile);
  // }

  constructor(
    public typeOrganizationService: TypeOrganizationService,
    public sectorOrganizationService: SectorOrganizationService,
    public storage: Storage,
    public authService: AuthService,
    public organizationRegistrationService: OrganizationRegistrationService
  ) {
    super();
  }

  ngOnInit() {
    this.initform();

    this.getSectorOrganizations();
    this.getTypeOrganizations();
  }

  closeAllSteps() {
    this.activeSteps = {
      adminInfo: false,
      organizationInfo: false,
      termsAndConditions: false,
    };
  }

  showStep(stepName: 'adminInfo' | 'organizationInfo' | 'termsAndConditions') {
    this.closeAllSteps();
    this.activeSteps[stepName] = true;
  }

  initform() {
    const workEmailValidationRegex =
      /\b[A-Za-z0-9._%+-]+@(?!gmail|yahoo|outlook)(?:[A-Za-z0-9-]+\.)+[A-Za-z]{2,}\b/;

    this.form = this.fb.group({
      adminInfo: this.fb.group(
        {
          name: [null, Validators.required],
          email: [
            null,
            [Validators.required, Validators.pattern(workEmailValidationRegex)],
          ],
          phone_number: [null, Validators.required],
          password: [null, [Validators.required, Validators.minLength(6)]],
          password_confirmation: [null, Validators.required],
          type_user_id: [2, Validators.required],
        },
        { validators: this.passwordMatchingValidatior }
      ),
      organizationInfo: this.fb.group({
        name: [null, Validators.required],
        email: [null, Validators.required],
        about: [null, Validators.required],
        website: [null, Validators.required],
        type_organization: [null, Validators.required],
        country: [null, Validators.required],
        sectors_organization: [null, Validators.required],
      }),

      terms_and_conditions: [false, Validators.requiredTrue],
    });

    this.organizationRegistrationService.form = this.form;

    // this.adminInfoForm = this.form.get('adminInfo') as FormGroup;
    // this.organizationInfoForm = this.form.get('organizationInfo') as FormGroup;
    // this.reportsUploadForm = this.form.get('reportsUpload') as FormGroup;

    // this.reportForm = this.fb.group({
    //   name: [null, Validators.required],
    //   year: [null, Validators.required],
    //   file: [null, Validators.required],
    // });
  }

  // addReport() {
  //   if (this.reportForm?.valid) {
  //     const reportsControl = this.reportsUploadForm?.get('reports');
  //     if (!reportsControl?.value.length) {
  //       reportsControl?.patchValue([this.reportForm?.value]);
  //     } else {
  //       reportsControl?.patchValue([
  //         ...reportsControl?.value,
  //         this.reportForm?.value,
  //       ]);
  //     }

  //     this.reportForm?.reset();

  //     this.formData.set(
  //       'reportsUpload',
  //       JSON.stringify(this.form.get('reportsUpload')!.value)
  //     );

  //     this.selectedReportFile = null;
  //   }
  // }

  onTermsChange(event: any) {
    console.log(event);
  }

  passwordMatchingValidatior: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('password_confirmation');

    return password?.value === confirmPassword?.value
      ? null
      : { notmatched: true };
  };

  getTypeOrganizations() {
    this.dependanciesLoading.typeOrganization = true;
    this.typeOrganizationService.get().subscribe((typeOrganizations) => {
      this.dependancies.typeOrganization = typeOrganizations;
      this.dependanciesLoading.typeOrganization = false;
    });
  }

  getSectorOrganizations() {
    this.dependanciesLoading.sectorOrganization = true;
    this.sectorOrganizationService.get().subscribe((sectorOrganizations) => {
      this.dependancies.sectorOrganization = sectorOrganizations;
      this.dependanciesLoading.sectorOrganization = false;
    });
  }

  submit() {
    if (this.form.valid) {
      this.loading = true;

      const adminInfoForm = this.form.get('adminInfo') as FormGroup;
      const organizationInfoForm = this.form.get(
        'organizationInfo'
      ) as FormGroup;

      const data = {
        adminInfo: adminInfoForm.value,
        organizationInfo: {
          ...organizationInfoForm.value,
          sector_organization_ids: this.helper.arrayObject.extractField(
            organizationInfoForm.value.sectors_organization,
            'id'
          ),
          type_organization_id: organizationInfoForm.value.type_organization.id,
          country: organizationInfoForm.value.country.name,
        },
        terms_and_conditions: this.form.value.terms_and_conditions,
      };

      this.authService.registerOrganization(data).subscribe({
        next: () => {
          this.loading = false;
          this.helper.notification.toastSuccess(
            'Organization successfully registered'
          );

          setTimeout(() => {
            this.router.navigate(['/auth/account-verification']);
          }, 100);
        },
        error: () => {
          this.loading = false;
        },
      });
    }
  }
}
