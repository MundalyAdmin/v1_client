import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { OrganizationReport } from '../../../../organization/dashboard-organization/organization-report/organization-report.model';
import { OrganizationReportService } from '../../../../organization/dashboard-organization/organization-report/organization-report.service';
import { OrganizationService } from '../../../../organization/organization.service';

@Component({
  selector: 'app-super-admin-organization-report',
  templateUrl: './super-admin-organization-report.component.html',
  styleUrls: ['./super-admin-organization-report.component.scss'],
})
export class SuperAdminOrganizationReportComponent
  extends BaseComponent<OrganizationReport>
  implements OnInit
{
  showReportUploadModal = false;
  constructor(
    public organizationReportService: OrganizationReportService,
    public organizationService: OrganizationService
  ) {
    super();
  }

  override ngOnInit(): void {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) this.getByOrganizationId(organization.id!);
      });
  }

  getByOrganizationId(organizationId: number) {
    this.loading = true;
    this.organizationReportService
      .getByOrganizationId(organizationId)
      .subscribe({
        next: () => (this.loading = false),
        error: () => (this.loading = false),
      });
  }

  getMinifiedTypeLabel(type: string) {
    if (type.toLowerCase() === 'custom report') return type;
    return type
      .split(' ')
      .map((word) => {
        return word.includes('-')
          ? word
              .split('-')
              .map((w) => w[0].toUpperCase())
              .join('')
          : word[0].toUpperCase();
      })
      .join('');
  }
}
