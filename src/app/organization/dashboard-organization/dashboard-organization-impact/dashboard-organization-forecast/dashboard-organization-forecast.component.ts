import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusImpactVerificationEnum } from '../../../../impact-verification/enums/status-impact-verification.enum';
import { ImpactInitiativeService } from '../../../../scale/impact-initiative/impact-initiative.service';
import { CommunityTrustScore } from '../../../../scale/models/community-trust-score.model';
import { ScaleService } from '../../../../scale/scale.service';
import { BaseComponent } from '../../../../shared/base-component';
import { OrganizationService } from '../../../organization.service';

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

  showFacilitationStrategyInfo = false;
  showCommunityTrustScoreInfo = false;
  showImpactFidelityInfo = false;
  showCommunityReputationInfo = false;
  selectedCommunity: string | null = null;

  constructor(
    public scaleService: ScaleService,
    public organizationService: OrganizationService,
    public impactInitiativeService: ImpactInitiativeService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    super();
  }

  get StatusImpactVerificationEnum() {
    return StatusImpactVerificationEnum;
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.route.queryParams.subscribe((params) => {
      if (params['community']) {
        this.selectedCommunity = params['community'];
      } else {
        this.selectedCommunity = null;
      }
      this.subscribeToData();
    });
  }

  subscribeToData() {
    this.subscribeToOrganizationData();
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

  getCommunityTrustScoreByOrganizationId(organizationId: number) {
    this.loading = true;
    const params = this.selectedCommunity
      ? { location: this.selectedCommunity }
      : {};
    this.scaleService
      .getByOrganizationId(organizationId, {
        params,
      })
      .subscribe({
        next: () => {
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this.router.navigate(['./'], {
            relativeTo: this.route,
          });
        },
      });
  }
}
