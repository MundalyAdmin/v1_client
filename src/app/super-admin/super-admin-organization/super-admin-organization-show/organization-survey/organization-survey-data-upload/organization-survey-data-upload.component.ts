import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {
  BaseComponent,
  BaseCreateComponent,
} from '../../../../../shared/base-component';
import { OrganizationSurveyDataUploadService } from './organization-survey-data-upload.service';
import { Validators } from '@angular/forms';
import { SurveyFormService } from '../../../../../organization/dashboard-organization/survey-form/survey-form.service';
import { MundalySurveyPartner } from '../../../../../mundaly-survey-partners/mundaly-survey-partner.model';
import { MundalySurveyPartnersService } from '../../../../../mundaly-survey-partners/mundaly-survey-partners.service';

@Component({
  selector: 'app-organization-survey-data-upload',
  templateUrl: './organization-survey-data-upload.component.html',
  styleUrls: ['./organization-survey-data-upload.component.scss'],
})
export class OrganizationSurveyDataUploadComponent
  extends BaseCreateComponent<any>
  implements OnInit, AfterViewInit
{
  getMundalySurveyPartnerLoading = false;
  csvFile: File | null = null;
  @ViewChild('fileInput', { static: false })
  fileInput: any;
  mundalySurveyPartners: MundalySurveyPartner[] = [{ id: null, name: 'None' }];
  constructor(
    public organizationSurveyDataUploadService: OrganizationSurveyDataUploadService,
    public surveyFormService: SurveyFormService,
    public mundalySurveyPartnersService: MundalySurveyPartnersService
  ) {
    super(organizationSurveyDataUploadService);
  }

  override ngOnInit(): void {
    this.initForm();

    this.getMundalySurveyPartners();
  }

  ngAfterViewInit(): void {}

  initForm() {
    this.form = this.fb.group({
      survey_form_id: [null, Validators.required],
      mundaly_survey_partner_id: [null, Validators.required],
    });

    this.formData = new FormData();

    this.subscriptions['survey-form'] =
      this.surveyFormService.singleData$.subscribe((surveyForm) => {
        if (surveyForm) this.form.patchValue({ survey_form_id: surveyForm.id });
      });
  }

  override onFileChanged(event: any) {
    let file: File = event.target.files[0];
    if (file.type !== 'text/csv') {
      return this.helper.notification.alertDanger('Format Invalide');
    }

    this.csvFile = file;

    this.formData.append('csv_file', file);
  }

  getMundalySurveyPartners() {
    this.getMundalySurveyPartnerLoading = true;
    this.mundalySurveyPartnersService.get().subscribe({
      next: (response) => {
        this.getMundalySurveyPartnerLoading = false;
        this.mundalySurveyPartners.push(...response);
      },
      error: () => {
        this.getMundalySurveyPartnerLoading = false;
      },
    });
  }

  isFormValid() {
    return this.form.valid && this.formData.has('csv_file');
  }

  override create() {
    if (!this.isFormValid()) {
      this.helper.notification.alertDanger('Form invalid');
      return;
    }

    this.loading = true;
    this.fillFormData(
      this.helper.object.removeBlankValues({
        ...this.form.value,
        mundaly_survey_partner_id:
          this.form.value.mundaly_survey_partner_id?.id,
      })
    );
    this.organizationSurveyDataUploadService.store(this.formData).subscribe({
      next: () => {
        this.loading = false;
        this.helper.notification.alertSuccess();
        this.initForm();

        this.csvFile = null;
        this.created.emit();

        this.fileInput.nativeElement.value = '';
      },
      error: () => {
        this.loading = false;
        this.formData = new FormData();
        this.csvFile = null;
      },
    });
  }
}
