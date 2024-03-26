import { Component, OnInit } from '@angular/core';
import { BaseCreateComponent } from '../../../shared/base-component';
import { FormGroup, Validators } from '@angular/forms';
import { DashboardOrganizationUploadReport } from './dashboard-organization-upload-reports.model';
import { Storage } from '../../../shared/helpers/storage/storage';

@Component({
  selector: 'app-dashboard-organization-upload-reports',
  templateUrl: './dashboard-organization-upload-reports.component.html',
  styleUrls: ['./dashboard-organization-upload-reports.component.scss'],
})
export class DashboardOrganizationUploadReportsComponent
  extends BaseCreateComponent<any>
  implements OnInit
{
  reportForm?: FormGroup;
  selectedReportFile: File | null = null;
  reports: DashboardOrganizationUploadReport[] = [];

  constructor(public storage: Storage) {
    super();
  }

  onReportsUpload(event: any) {
    this.selectedReportFile = event.target.files[0];

    this.reportForm?.get('file')?.patchValue(this.selectedReportFile);
  }

  ngOnInit() {
    this.initform();
  }

  initform() {
    this.form = this.fb.group({
      reports: [[]],
    });

    this.reportForm = this.fb.group({
      name: [null, Validators.required],
      year: [null, Validators.required],
      file: [null, Validators.required],
    });
  }

  addReport() {
    if (this.reportForm?.valid) {
      const newReport = {
        ...this.reportForm.value,
        file: this.selectedReportFile,
      };
      const reportList = JSON.parse(
        this.formData.get('reports')?.toString() || '[]'
      );

      const newReportList = [...reportList, { ...newReport }];
      this.formData.set('reports', JSON.stringify(newReportList));

      // const reportsControl = this.form?.get('reports');
      // if (!reportsControl?.value.length) {
      //   reportsControl?.patchValue([this.reportForm?.value]);
      // } else {
      //   reportsControl?.patchValue([
      //     ...reportsControl?.value,
      //     this.reportForm?.value,
      //   ]);
      // }

      this.reports.push(this.reportForm.value);

      this.reportForm?.reset();

      this.selectedReportFile = null;
    }
  }

  submit() {
    if (this.form.valid) {
      this.helper.notification.alertSuccess('Report uploaded');

      this.storage.set('report_loading', 'true');

      // show formdata
      // @ts-expect-error
      for (const [key, value] of this.formData.entries()) {
        console.log(`${key}: ${value}`);
      }

      this.created.emit();
    }
  }
}
