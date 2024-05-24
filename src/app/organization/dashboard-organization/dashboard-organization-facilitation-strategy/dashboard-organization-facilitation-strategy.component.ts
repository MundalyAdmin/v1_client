import { Component } from '@angular/core';
import { DashboardOrganizationVerifyComponent } from '../dashboard-organization-impact/dashboard-organization-verify/dashboard-organization-verify.component';
import { BaseSingleComponent } from '../../../shared/base-component';
import { FacilitationStrategyScore } from '../../../scale/facilitation-strategy/facilitation-strategy-score.model';
import { Organization } from '../../organization.model';
import { FacilitationStrategyService } from '../../../scale/facilitation-strategy/facilitation-strategy.service';
import { ScaleService } from '../../../scale/scale.service';
import { OrganizationService } from '../../organization.service';

@Component({
  selector: 'app-dashboard-organization-facilitation-strategy',
  templateUrl: './dashboard-organization-facilitation-strategy.component.html',
  styleUrls: ['./dashboard-organization-facilitation-strategy.component.scss'],
})
export class DashboardOrganizationFacilitationStrategyComponent extends BaseSingleComponent<FacilitationStrategyScore> {
  organization: Organization | null = null;
  constructor(
    public facilitationStrategyService: FacilitationStrategyService,
    public scaleService: ScaleService,
    public organizationService: OrganizationService
  ) {
    super(facilitationStrategyService);
  }

  override ngOnInit(): void {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.organization = organization;
          this.getByOrganizationId(organization.id!);
        }
      });
  }

  getByOrganizationId(organizationId: number) {
    this.loading = true;
    this.facilitationStrategyService
      .getOrganizationScore(organizationId)
      .subscribe((score) => {
        this.loading = false;
        console.log(this.facilitationStrategyService.score);
      });
  }
}
