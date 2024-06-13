import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { CommunityTrustScore } from '../../../../scale/models/community-trust-score.model';
import { ScaleService } from '../../../../scale/scale.service';
import { OrganizationService } from '../../../organization.service';
import { AuthService } from '../../../../auth/auth.service';
import { ImpactInitiativeService } from '../../../../scale/impact-initiative/impact-initiative.service';
import { TypeOrganizationEnum } from '../../../type-organization/type-organization.enum';

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
  constructor(
    public scaleService: ScaleService,
    public organizationService: OrganizationService,
    public authService: AuthService,
    public impactInitiativeService: ImpactInitiativeService
  ) {
    super();
  }

  override ngOnInit(): void {
    this.subscribeToData();
  }

  subscribeToData() {
    this.subscriptions['currentlyLoggedOrganization'] =
      this.authService.organization$.subscribe(
        (currentlyLoggedOrganization) => {
          if (
            currentlyLoggedOrganization?.type_organization_id ===
              TypeOrganizationEnum.CORPORATE ||
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
        if (organization) {
          this.getCommunityTrustScoreByOrganizationId(organization.id!);
        }
      });
  }

  private subscribeToImpactInitiativeData() {
    console.log('reached');
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
