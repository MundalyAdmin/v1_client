import { Component } from '@angular/core';
import { DashboardOrganizationVerifyComponent } from '../dashboard-organization-impact/dashboard-organization-verify/dashboard-organization-verify.component';
import { BaseSingleComponent } from '../../../shared/base-component';
import { FacilitationStrategyScore } from '../../../scale/facilitation-strategy/facilitation-strategy-score.model';
import { Organization } from '../../organization.model';
import { FacilitationStrategyService } from '../../../scale/facilitation-strategy/facilitation-strategy.service';
import { ScaleService } from '../../../scale/scale.service';
import { OrganizationService } from '../../organization.service';
import { TypeOrganizationEnum } from '../../type-organization/type-organization.enum';
import { AuthService } from '../../../auth/auth.service';
import { ImpactInitiativeService } from '../../../scale/impact-initiative/impact-initiative.service';

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
    public organizationService: OrganizationService,
    public authService: AuthService,
    public impactInitiativeService: ImpactInitiativeService
  ) {
    super(facilitationStrategyService);
  }

  override ngOnInit(): void {
    this.subscriptions['currentLogOrganization'] =
      this.authService.organization$.subscribe((organization) => {
        if (
          organization?.type_organization_id ===
            TypeOrganizationEnum.IMPACT_FUNDER ||
          organization?.type_organization_id === TypeOrganizationEnum.CORPORATE
        ) {
          this.subscribeToOrganizationData();
        } else if (
          organization?.type_organization_id ===
            TypeOrganizationEnum.IMPACT_IMPLEMENTER ||
          organization?.type_organization_id === TypeOrganizationEnum.SUPPLIER
        ) {
          this.subscribeToImpactInitiativeData();
        }
      });
  }

  subscribeToImpactInitiativeData() {
    this.subscriptions['impactInitiative'] =
      this.impactInitiativeService.singleData$.subscribe((impactInitiative) => {
        if (impactInitiative) {
          this.getByImpactInitiativeId(impactInitiative.id!);
        }
      });
  }

  subscribeToOrganizationData() {
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
      .getScoreBreakdownByOrganization(organizationId)
      .subscribe((score) => {
        this.loading = false;
      });
  }

  getByImpactInitiativeId(impactInitiativeId: number) {
    this.loading = true;
    this.facilitationStrategyService
      .getScoreBreakdownByImpactInitiative(impactInitiativeId)
      .subscribe((score) => {
        this.loading = false;
      });
  }
}
