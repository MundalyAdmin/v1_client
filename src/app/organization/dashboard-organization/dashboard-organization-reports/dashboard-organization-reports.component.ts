import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { OrganizationReport } from '../organization-report/organization-report.model';
import { OrganizationReportService } from '../organization-report/organization-report.service';
import { OrganizationService } from '../../organization.service';
import { AuthService } from '../../../auth/auth.service';
import { ImpactInitiativeService } from '../../../scale/impact-initiative/impact-initiative.service';
import { TypeOrganizationEnum } from '../../type-organization/type-organization.enum';

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
  constructor(
    public organizationReportService: OrganizationReportService,
    public organizationService: OrganizationService,
    public authService: AuthService,
    public impactInitiativeService: ImpactInitiativeService
  ) {
    super();
  }

  override ngOnInit(): void {
    this.authService.organization$.subscribe((organization) => {
      if (
        organization?.type_organization_id ===
          TypeOrganizationEnum.IMPACT_FUNDER ||
        organization?.type_organization_id === TypeOrganizationEnum.CORPORATION
      ) {
        this.subscribeToOrganizationData();
      } else if (
        organization?.type_organization_id ===
          TypeOrganizationEnum.IMPACT_IMPLEMENTER ||
        organization?.type_organization_id === TypeOrganizationEnum.SUPPLIER
      ) {
        this.subscribeToImpactInitiativeData();
      }
    });
  }

  subscribeToImpactInitiativeData() {
    this.subscriptions['impactInitiative'] =
      this.impactInitiativeService.singleData$.subscribe((impactInitiative) => {
        if (impactInitiative) {
          this.getByImpactInitiativeId(impactInitiative.id!);
        }
      });
  }

  subscribeToOrganizationData() {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.getByOrganizationId(organization.id!);
        }
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

  getByImpactInitiativeId(impactInitiativeId: number) {
    this.loading = true;
    this.organizationReportService
      .getByImpactInitiativeId(impactInitiativeId)
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
