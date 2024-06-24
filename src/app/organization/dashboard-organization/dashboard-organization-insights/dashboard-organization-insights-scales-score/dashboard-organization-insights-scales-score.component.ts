import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { CommunityTrustScore } from '../../../../scale/models/community-trust-score.model';
import { ScaleService } from '../../../../scale/scale.service';
import { AuthService } from '../../../../auth/auth.service';
import { OrganizationService } from '../../../organization.service';
import { ActivatedRoute } from '@angular/router';
import { ImpactInitiativeService } from '../../../../scale/impact-initiative/impact-initiative.service';
import { TypeOrganizationEnum } from '../../../type-organization/type-organization.enum';

@Component({
  selector: 'app-dashboard-organization-insights-scales-score',
  templateUrl: './dashboard-organization-insights-scales-score.component.html',
  styleUrls: ['./dashboard-organization-insights-scales-score.component.scss'],
})
export class DashboardOrganizationInsightsScalesScoreComponent
  extends BaseComponent<CommunityTrustScore>
  implements OnInit
{
  constructor(
    public scaleService: ScaleService,
    public organizationService: OrganizationService,
    public impactInitiativeService: ImpactInitiativeService,
    public route: ActivatedRoute
  ) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.route.queryParams.subscribe((params) => {
      const queryParams: { startDate?: string; endDate?: string } = {};
      if (params['startDate']) {
        queryParams.startDate = params['startDate'];
      }
      if (params['endDate']) {
        queryParams.endDate = params['endDate'];
      }

      this.subscriptions['currentLogOrganization'] =
        this.authService.organization$.subscribe((organization) => {
          if (
            organization?.type_organization_id ===
              TypeOrganizationEnum.IMPACT_FUNDER ||
            organization?.type_organization_id ===
              TypeOrganizationEnum.CORPORATION
          ) {
            this.subscribeToOrganizationData(queryParams);
          } else if (
            organization?.type_organization_id ===
              TypeOrganizationEnum.IMPACT_IMPLEMENTER ||
            organization?.type_organization_id === TypeOrganizationEnum.SUPPLIER
          ) {
            this.subscribeToImpactInitiativeData(queryParams);
          }
        });
    });
  }

  subscribeToOrganizationData(queryParams?: any) {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.getScalesScoreByOrganization(organization.id!, queryParams);
        }
      });
  }

  subscribeToImpactInitiativeData(queryParams?: any) {
    this.subscriptions['impactInitiative'] =
      this.impactInitiativeService.singleData$.subscribe((impactInitiative) => {
        if (impactInitiative) {
          this.getScalesScoreByImpactInitiative(
            impactInitiative.id!,
            queryParams
          );
        }
      });
  }

  getScalesScoreByOrganization(organizationId: number, queryParams?: any) {
    this.loading = true;
    this.scaleService
      .getCommunityTrustScoreByOrganizationId(organizationId, {
        params: queryParams,
      })
      .subscribe((data) => {
        this.loading = false;
      });
  }

  getScalesScoreByImpactInitiative(
    impactInitiativeId: number,
    queryParams?: any
  ) {
    this.loading = true;
    this.scaleService
      .getCommunityTrustScoreByImpactInitiaitveId(impactInitiativeId, {
        params: queryParams,
      })
      .subscribe((data) => {
        this.loading = false;
      });
  }
}
