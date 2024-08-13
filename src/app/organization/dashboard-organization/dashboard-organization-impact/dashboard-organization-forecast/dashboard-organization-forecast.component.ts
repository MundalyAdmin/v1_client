import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { CommunityTrustScore } from '../../../../scale/models/community-trust-score.model';
import { ScaleService } from '../../../../scale/scale.service';
import { OrganizationService } from '../../../organization.service';
import { AuthService } from '../../../../auth/auth.service';
import { ImpactInitiativeService } from '../../../../scale/impact-initiative/impact-initiative.service';
import { TypeOrganizationEnum } from '../../../type-organization/type-organization.enum';
import { Organization } from '../../../organization.model';
import { CategoryOrganizationEnum } from '../../../category-organization/category-organization.enum';
import { StatusImpactVerificationEnum } from '../../../../impact-verification/enums/status-impact-verification.enum';

@Component({
  selector: 'app-dashboard-organization-forecast',
  templateUrl: './dashboard-organization-forecast.component.html',
  styleUrls: ['./dashboard-organization-forecast.component.scss'],
})
export class DashboardOrganizationForecastComponent
  extends BaseComponent<CommunityTrustScore>
  implements OnInit
{
  communityTrustScore: CommunityTrustScore | null = null;
  showPhysicalHealthInfo = false;
  showPsychologicalHealthInfo = false;
  showFacilitationStrategyInfo = false;
  showCommunityTrustScoreInfo = false;
  showImpactFidelityInfo = false;
  showCommunityReputationInfo = false;

  constructor(
    public scaleService: ScaleService,
    public organizationService: OrganizationService,
    public impactInitiativeService: ImpactInitiativeService
  ) {
    super();
  }

  get StatusImpactVerificationEnum() {
    return StatusImpactVerificationEnum;
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.subscribeToData();
  }

  subscribeToData() {
    this.subscriptions['currentlyLoggedOrganization'] =
      this.authService.organization$.subscribe(
        (currentlyLoggedOrganization) => {
          if (
            currentlyLoggedOrganization?.type_organization_id ===
              TypeOrganizationEnum.CORPORATION ||
            currentlyLoggedOrganization?.type_organization_id ===
              TypeOrganizationEnum.IMPACT_FUNDER
          ) {
            this.subscribeToOrganizationData();
          } else if (
            currentlyLoggedOrganization?.type_organization_id ===
              TypeOrganizationEnum.IMPACT_IMPLEMENTER ||
            currentlyLoggedOrganization?.type_organization_id ===
              TypeOrganizationEnum.SUPPLIER
          ) {
            this.subscribeToImpactInitiativeData();
          }
        }
      );
  }

  private subscribeToOrganizationData() {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (
          organization &&
          organization.verification_status_from_current_organization?.id ===
            StatusImpactVerificationEnum.LAUNCHED
        ) {
          this.getCommunityTrustScoreByOrganizationId(organization.id!);
        }
      });
  }

  private subscribeToImpactInitiativeData() {
    this.subscriptions['impactInitiative'] =
      this.impactInitiativeService.singleData$.subscribe((impactInitiative) => {
        if (impactInitiative) {
          this.getCommunityTrustScoreByImpactInitiativeId(
            impactInitiative?.id!
          );
        }
      });
  }

  getCommunityTrustScoreByOrganizationId(organizationId: number) {
    this.loading = true;
    this.scaleService
      .getCommunityTrustScoreByOrganizationId(organizationId)
      .subscribe(() => {
        this.loading = false;
      });
  }

  getCommunityTrustScoreByImpactInitiativeId(organizationId: number) {
    this.loading = true;
    this.scaleService
      .getCommunityTrustScoreByImpactInitiaitveId(organizationId)
      .subscribe(() => {
        this.loading = false;
      });
  }
}
