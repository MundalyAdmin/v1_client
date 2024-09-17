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
import { DashboardOrganizationService } from '../dashboard-organization.service';
import { ImpactVerificationTypeInsightsEnum } from 'src/app/impact-verification/impact-verification-type-insights/impact-verification-type-insights.enum';

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
  typeInsightsId: ImpactVerificationTypeInsightsEnum =
    ImpactVerificationTypeInsightsEnum.UNDEFINED;
  constructor(
    public organizationReportService: OrganizationReportService,
    public organizationService: OrganizationService,
    public impactInitiativeService: ImpactInitiativeService,
    public dashboardOrganizationService: DashboardOrganizationService,
    public route: ActivatedRoute
  ) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.subscriptions['type_insights_id'] =
      this.dashboardOrganizationService.typeInsight$.subscribe(
        (type_insights_id) => {
          this.typeInsightsId = type_insights_id;
        }
      );
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
          this.getByOrganizationInquirerAndTypeInsights(
            organization.id!,
            this.currentLoggedInOrganization?.id!,
            this.typeInsightsId,
            queryParams
          );
        }
      });
  }

  getByOrganizationInquirerAndTypeInsights(
    organizationId: number,
    inquirerId: number,
    typeInsightsId: number,
    params?: any
  ) {
    this.loading = true;
    this.organizationReportService
      .getByOrganizationInquirerAndTypeInsights(
        organizationId,
        inquirerId,
        typeInsightsId,
        { params }
      )
      .subscribe({
        next: () => (this.loading = false),
        error: () => (this.loading = false),
      });
  }

  getMinifiedTypeLabel(type: string) {
    if (type.toLowerCase() === 'custom report') return type;
    const typeName = type.split(' Insights')[0];
    return typeName;
  }
}
