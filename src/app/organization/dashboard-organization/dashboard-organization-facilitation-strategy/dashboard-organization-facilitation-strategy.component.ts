import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacilitationStrategyScore } from '../../../scale/facilitation-strategy/facilitation-strategy-score.model';
import { FacilitationStrategyService } from '../../../scale/facilitation-strategy/facilitation-strategy.service';
import { ScaleService } from '../../../scale/scale.service';
import { OrganizationService } from '../../organization.service';
import { DashboardOrganizationBaseScaleComponent } from '../dashboard-organization-base-scale/dashboard-organization-base-scale.component';

@Component({
  selector: 'app-dashboard-organization-facilitation-strategy',
  templateUrl: './dashboard-organization-facilitation-strategy.component.html',
  styleUrls: ['./dashboard-organization-facilitation-strategy.component.scss'],
})
export class DashboardOrganizationFacilitationStrategyComponent extends DashboardOrganizationBaseScaleComponent<FacilitationStrategyScore> {
  constructor(
    public facilitationStrategyService: FacilitationStrategyService,
    public override scaleService: ScaleService,
    public override organizationService: OrganizationService,
    public override route: ActivatedRoute,
    public override router: Router
  ) {
    super(
      facilitationStrategyService,
      scaleService,
      organizationService,
      route,
      router
    );
  }
}
