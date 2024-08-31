import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { OrganizationReport } from '../organization-report/organization-report.model';
import { OrganizationReportService } from '../organization-report/organization-report.service';
import { OrganizationService } from '../../organization.service';
import { AuthService } from '../../../auth/auth.service';
import { ImpactInitiativeService } from '../../../scale/impact-initiative/impact-initiative.service';
import { TypeOrganizationEnum } from '../../type-organization/type-organization.enum';
import { StatusImpactVerificationEnum } from '../../../impact-verification/enums/status-impact-verification.enum';
import { ActivatedRoute } from '@angular/router';

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
  selectedReportIndex = 0;
  showReportDetailsModal = false;
  StatusImpactVerificationEnum = StatusImpactVerificationEnum;
  constructor(
    public organizationReportService: OrganizationReportService,
    public organizationService: OrganizationService,
    public impactInitiativeService: ImpactInitiativeService,
    public route: ActivatedRoute
  ) {
    super();
  }

  override ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const queryParams: { location?: string } = {};

      if (params['community']) {
        queryParams['location'] = params['community'];
      }

      this.subscribeToOrganizationData(queryParams);
    });
  }

  subscribeToOrganizationData(queryParams?: any) {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.getByOrganizationId(organization.id!, queryParams);
        }
      });
  }

  getByOrganizationId(organizationId: number, params?: any) {
    this.loading = true;
    this.organizationReportService
      .getByOrganizationId(organizationId, { params })
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
