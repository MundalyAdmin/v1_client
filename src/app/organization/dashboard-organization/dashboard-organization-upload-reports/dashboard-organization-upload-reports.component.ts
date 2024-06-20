import { Component, OnInit } from '@angular/core';
import { BaseCreateComponent } from '../../../shared/base-component';
import { FormGroup, Validators } from '@angular/forms';
import { DashboardOrganizationUploadReport } from './dashboard-organization-upload-reports.model';
import { Storage } from '../../../shared/helpers/storage/storage';
import { DashboardOrganizationUploadReportsService } from './dashboard-organization-upload-reports.service';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-dashboard-organization-upload-reports',
  templateUrl: './dashboard-organization-upload-reports.component.html',
  styleUrls: ['./dashboard-organization-upload-reports.component.scss'],
})
export class DashboardOrganizationUploadReportsComponent
  extends BaseCreateComponent<any>
  implements OnInit
{
  // Form to add report individually
  reportForm?: FormGroup;

  // Allow to display the name of the selected report file
  selectedReportFile: File | null = null;

  // Holds the list of reports to be able to display them in the list format
  reports: DashboardOrganizationUploadReport[] = [];

  // Holds the list of reports to be able to upload them
  reportFormData: FormData[] = [];

  constructor(
    public storage: Storage,
    public uploadReportService: DashboardOrganizationUploadReportsService,
    public authService: AuthService
  ) {
    super();
  }

  onReportsUpload(event: any) {
    this.selectedReportFile = event.target.files[0];

    this.reportForm?.get('file')?.patchValue(this.selectedReportFile);
  }

  override ngOnInit() {
    this.initform();
  }

  initform() {
    this.form = this.fb.group({
      reports: [[]],
    });

    this.initReportForm();
  }

  deleteReportFromList(index: number) {
    this.reports = this.reports.filter((_, i) => i !== index);
    this.reportFormData = this.reportFormData.filter((_, i) => i !== index);
  }

  initReportForm() {
    this.reportForm = this.fb.group({
      name: [null, Validators.required],
      year: [null, Validators.required],
      file: [null, Validators.required],
      isLast: [false, Validators.required],
      organization_id: [this.authService.organization?.id, Validators.required],
    });
  }

  addReport() {
    if (this.reportForm?.valid) {
      const newReport = {
        ...this.reportForm.value,
        file: this.selectedReportFile,
      };

      const newFormData = new FormData();
      Object.keys(newReport).forEach((key) => {
        newFormData.append(key, newReport[key]);
      });

      this.reportFormData.push(newFormData);

      this.reports.push(this.reportForm.value);

      this.initReportForm();

      this.selectedReportFile = null;
    }
  }

  async uploadReports() {
    return await Promise.all(
      this.reportFormData.map(async (report: FormData, index: number) => {
        if (index === this.reportFormData.length - 1)
          report.set('isLast', 'true');

        await firstValueFrom(this.uploadReportService.store(report));
      })
    );
  }

  async submit() {
    if (this.form.valid) {
      this.loading = true;
      await this.uploadReports().catch((error) =>
        this.helper.notification.toastDanger(error)
      );

      this.helper.notification.alertSuccess('Report uploaded');

      this.storage.set('impact_analysis_report_status', 'on-progress');

      this.loading = false;

      this.created.emit();
    }
  }
}
