import { Component } from '@angular/core';
import { BaseCreateComponent } from '../../../../shared/base-component';
import { OrganizationReport } from '../../../../organization/dashboard-organization/organization-report/organization-report.model';
import { OrganizationReportService } from '../../../../organization/dashboard-organization/organization-report/organization-report.service';
import { TypeOrganizationReportService } from '../../../../organization/dashboard-organization/organization-report/type-organization-report/type-organization-report.service';
import { TypeOrganizationReport } from '../../../../organization/dashboard-organization/organization-report/type-organization-report/type-organization-report.model';
import { Validators } from '@angular/forms';
import { OrganizationService } from '../../../../organization/organization.service';
import { Organization } from '../../../../organization/organization.model';

@Component({
  selector: 'app-super-admin-organization-report-create',
  templateUrl: './super-admin-organization-report-create.component.html',
  styleUrls: ['./super-admin-organization-report-create.component.scss'],
})
export class SuperAdminOrganizationReportCreateComponent extends BaseCreateComponent<OrganizationReport> {
  getTypeOrganizationReportsLoading = false;
  typeOrganizationReports: TypeOrganizationReport[] = [];
  organization: Organization | null = null;
  reportFile: File | null = null;
  constructor(
    public organizationReportService: OrganizationReportService,
    public typeOrganizationReportService: TypeOrganizationReportService,
    public organizationService: OrganizationService
  ) {
    super();
  }

  override ngOnInit(): void {
    this.initForm();

    this.getTypeOrganizationReports();

    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.organization = organization;
          this.form.patchValue({ organization_id: organization.id });
        }
      });
  }

  override onFileChanged(event: any) {
    this.reportFile = event.target.files[0];
    if (this.reportFile?.type !== 'application/pdf') {
      return this.helper.notification.alertDanger('Format Invalide');
    }
    this.formData.append('report_file', this.reportFile);
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      organization_id: [null, Validators.required],
      type_organization_report: [null, Validators.required],
    });

    this.formData = new FormData();
  }

  getTypeOrganizationReports() {
    this.getTypeOrganizationReportsLoading = true;
    this.typeOrganizationReportService.get().subscribe({
      next: (response) => {
        this.getTypeOrganizationReportsLoading = false;
        this.typeOrganizationReports = response;
      },
      error: () => {
        this.getTypeOrganizationReportsLoading = false;
      },
    });
  }

  isFormValid() {
    return this.form.valid && this.formData.has('report_file');
  }

  override create(): void {
    if (!this.isFormValid()) {
      this.helper.notification.alertDanger('Form invalid');
      return;
    }
    this.loading = true;
    this.formData.append('name', this.form.value.name);
    this.formData.append('organization_id', this.form.value.organization_id);
    this.formData.append(
      'type_organization_report_id',
      this.form.value.type_organization_report.id
    );
    this.organizationReportService.store(this.formData).subscribe({
      next: () => {
        this.loading = false;
        this.helper.notification.alertSuccess();
        this.initForm();
        this.form.patchValue({ organization_id: this.organization?.id });
        this.reportFile = null;
        this.created.emit();
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
