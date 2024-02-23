import { Component, OnInit } from '@angular/core';
import {
  BaseComponent,
  BaseCreateComponent,
} from '../../shared/base-component';
import { FormArray, FormGroup, Validators } from '@angular/forms';
import { TypeOrganizationService } from '../../organization/type-organization/type-organization.service';
import { SectorOrganizationService } from '../../organization/sector-organization/sector-organization.service';
import { Storage } from '../../shared/helpers/storage/storage';

@Component({
  selector: 'app-organization-registration',
  templateUrl: './organization-registration.component.html',
  styleUrls: ['./organization-registration.component.scss'],
})
export class OrganizationRegistrationComponent
  extends BaseCreateComponent<any>
  implements OnInit
{
  reportForm?: FormGroup;
  selectedReportFile: File | null = null;

  adminInfoForm?: FormGroup;
  organizationInfoForm?: FormGroup;
  reportsUploadForm?: FormGroup;

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
    reportsUpload: false,
  };

  get reports() {
    return (
      JSON.parse(this.formData.get('reportsUpload') as string)?.reports || []
    );
  }

  onReportsUpload(event: any) {
    this.selectedReportFile = event.target.files[0];
    this.reportForm?.get('file')?.patchValue(this.selectedReportFile);
  }

  constructor(
    public typeOrganizationService: TypeOrganizationService,
    public sectorOrganizationService: SectorOrganizationService,
    public storage: Storage
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
      reportsUpload: false,
    };
  }

  showStep(stepName: 'adminInfo' | 'organizationInfo' | 'reportsUpload') {
    this.closeAllSteps();
    this.activeSteps[stepName] = true;
  }

  initform() {
    this.form = this.fb.group({
      adminInfo: this.fb.group({
        name: [null, Validators.required],
        email: [null, Validators.required],
        phone_number: [null, Validators.required],
        password: [null, Validators.required],
        password_confirmation: [null, Validators.required],
      }),
      organizationInfo: this.fb.group({
        name: [null, Validators.required],
        email: [null, Validators.required],
        about: [null, Validators.required],
        website: [null, Validators.required],
        type: [null, Validators.required],
        sector: [null, Validators.required],
      }),
      reportsUpload: this.fb.group({
        reports: [[], Validators.required],
      }),
    });

    this.adminInfoForm = this.form.get('adminInfo') as FormGroup;
    this.organizationInfoForm = this.form.get('organizationInfo') as FormGroup;
    this.reportsUploadForm = this.form.get('reportsUpload') as FormGroup;

    this.reportForm = this.fb.group({
      name: [null, Validators.required],
      year: [null, Validators.required],
      file: [null, Validators.required],
    });
  }

  addReport() {
    if (this.reportForm?.valid) {
      const reportsControl = this.reportsUploadForm?.get('reports');
      if (!reportsControl?.value.length) {
        reportsControl?.patchValue([this.reportForm?.value]);
      } else {
        reportsControl?.patchValue([
          ...reportsControl?.value,
          this.reportForm?.value,
        ]);
      }

      this.reportForm?.reset();

      this.formData.set(
        'reportsUpload',
        JSON.stringify(this.form.get('reportsUpload')!.value)
      );

      this.selectedReportFile = null;
    }
  }

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
      this.storage.set('registration', this.form.value);
      this.helper.notification.alertSuccess('Successfully registered');
      this.router.navigate(['/auth/registration-processing']);
    }
  }
}
