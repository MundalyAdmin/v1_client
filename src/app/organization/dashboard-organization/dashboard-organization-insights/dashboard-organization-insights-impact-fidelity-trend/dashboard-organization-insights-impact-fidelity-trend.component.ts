import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { InsightsTrendData } from '../insights-trend.data.model';
import { SocialImpactFidelityService } from '../../../../scale/social-impact-fidelity/social-impact-fidelity.service';
import { OrganizationService } from '../../../organization.service';
import { ActivatedRoute } from '@angular/router';

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
    public route: ActivatedRoute
  ) {
    super();
  }

  override ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const queryParams1: { startDate?: string; endDate?: string } = {};
      console.log(queryParams1);
      if (params['startDate']) {
        queryParams1.startDate = params['startDate'];
      }
      if (params['endDate']) {
        queryParams1.endDate = params['endDate'];
      }
      this.subscriptions['organization'] =
        this.organizationService.singleData$.subscribe((organization) => {
          if (organization) {
            console.log(queryParams1);
            this.getTrendByOrganization(organization.id!, queryParams1);
          }
        });
    });
  }

  getTrendByOrganization(organizationId: number, queryParams?: any) {
    this.loading = true;
    this.impactFidelityService
      .getTrendScore(organizationId, { params: queryParams })
      .subscribe((data) => {
        this.data = data;
        this.loading = false;
      });
  }
}
