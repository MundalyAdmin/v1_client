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
  selectedCommunity: string | null = null;
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
      const queryParams: {
        startDate?: string;
        endDate?: string;
        location?: string;
      } = {};
      if (params['startDate']) {
        queryParams.startDate = params['startDate'];
      }
      if (params['endDate']) {
        queryParams.endDate = params['endDate'];
      }

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
          this.getScalesScoreByOrganization(organization.id!, queryParams);
        }
      });
  }

  getScalesScoreByOrganization(organizationId: number, queryParams?: any) {
    this.loading = true;
    this.scaleService
      .getByOrganizationId(organizationId, {
        params: queryParams,
      })
      .subscribe((data) => {
        this.loading = false;
      });
  }
}
