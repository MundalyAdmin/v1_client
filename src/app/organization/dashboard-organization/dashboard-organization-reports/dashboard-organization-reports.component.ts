import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { OrganizationReport } from '../organization-report/organization-report.model';
import { OrganizationReportService } from '../organization-report/organization-report.service';
import { OrganizationService } from '../../organization.service';

@Component({
  selector: 'app-dashboard-organization-reports',
  templateUrl: './dashboard-organization-reports.component.html',
  styleUrls: ['./dashboard-organization-reports.component.scss'],
})
export class DashboardOrganizationReportsComponent
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
