import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { InsightsTrendData } from '../dashboard-organization-insights/insights-trend.data.model';
import { BaseScaleService } from '../../../scale/base-scale.service';
import { OrganizationService } from '../../organization.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-organization-base-scale-trend',
  template: '',
  styles: [],
})
export class DashboardOrganizationBaseScaleTrendComponent
  extends BaseComponent<InsightsTrendData>
  implements OnInit
{
  constructor(
    public baseScaleService: BaseScaleService<any>,
    public organizationService: OrganizationService,
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
        queryParams.location = params['community'];
      }

      this.subscribeToOrganizationData(queryParams);
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

  getTrendByOrganization(
    organizationId: number,
    queryParams?: Record<string, unknown>,
    callback?: () => void
  ): void {
    this.loading = true;

    this.baseScaleService
      .getTrendScoreByOrganization(organizationId, { params: queryParams })
      .subscribe((data) => {
        this.data = data;
        this.loading = false;

        if (callback) {
          callback();
        }
      });
  }
}
