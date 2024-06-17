import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { InsightsTrendData } from '../insights-trend.data.model';
import { SocialImpactFidelityService } from '../../../../scale/social-impact-fidelity/social-impact-fidelity.service';
import { OrganizationService } from '../../../organization.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../auth/auth.service';
import { ImpactInitiativeService } from '../../../../scale/impact-initiative/impact-initiative.service';
import { TypeOrganizationEnum } from '../../../type-organization/type-organization.enum';

@Component({
  selector: 'app-dashboard-organization-insights-impact-fidelity-trend',
  templateUrl:
    './dashboard-organization-insights-impact-fidelity-trend.component.html',
  styleUrls: [
    './dashboard-organization-insights-impact-fidelity-trend.component.scss',
  ],
})
export class DashboardOrganizationInsightsImpactFidelityTrendComponent
  extends BaseComponent<InsightsTrendData>
  implements OnInit
{
  constructor(
    public impactFidelityService: SocialImpactFidelityService,
    public organizationService: OrganizationService,
    public authService: AuthService,
    public impactInitiativeService: ImpactInitiativeService,
    public route: ActivatedRoute
  ) {
    super();
  }

  override ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const queryParams1: { startDate?: string; endDate?: string } = {};
      if (params['startDate']) {
        queryParams1.startDate = params['startDate'];
      }
      if (params['endDate']) {
        queryParams1.endDate = params['endDate'];
      }

      this.subscriptions['currentLogOrganization'] =
        this.authService.organization$.subscribe((organization) => {
          if (
            organization?.type_organization_id ===
              TypeOrganizationEnum.IMPACT_FUNDER ||
            organization?.type_organization_id ===
              TypeOrganizationEnum.CORPORATION
          ) {
            this.subscribeToOrganizationData(queryParams1);
          } else if (
            organization?.type_organization_id ===
              TypeOrganizationEnum.IMPACT_IMPLEMENTER ||
            organization?.type_organization_id === TypeOrganizationEnum.SUPPLIER
          ) {
            this.subscribeToImpactInitiativeData(queryParams1);
          }
        });
    });
  }

  subscribeToOrganizationData(queryParams?: any) {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.getTrendByOrganization(organization.id!, queryParams);
        }
      });
  }

  subscribeToImpactInitiativeData(queryParams?: any) {
    this.subscriptions['impactInitiative'] =
      this.impactInitiativeService.singleData$.subscribe((impactInitiative) => {
        if (impactInitiative) {
          this.getTrendByImpactInitiative(impactInitiative.id!, queryParams);
        }
      });
  }

  getTrendByOrganization(organizationId: number, queryParams?: any) {
    this.loading = true;
    this.impactFidelityService
      .getTrendScoreByOrganization(organizationId, { params: queryParams })
      .subscribe((data) => {
        this.data = data;
        this.loading = false;
      });
  }

  getTrendByImpactInitiative(impactInitiativeId: number, queryParams?: any) {
    this.loading = true;
    this.impactFidelityService
      .getTrendScoreByImpactInitiatives(impactInitiativeId, {
        params: queryParams,
      })
      .subscribe((data) => {
        this.data = data;
        this.loading = false;
      });
  }
}
