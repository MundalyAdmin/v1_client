import { Component } from '@angular/core';
import { DashboardOrganizationVerifyComponent } from '../dashboard-organization-impact/dashboard-organization-verify/dashboard-organization-verify.component';
import {
  BaseComponent,
  BaseSingleComponent,
} from '../../../shared/base-component';
import { SocialImpactFidelity } from '../../../scale/social-impact-fidelity/social-impact-fidelity.model';
import { SocialImpactFidelityScore } from '../../../scale/social-impact-fidelity/social-impact-fidelity-score.model';
import { SocialImpactFidelityService } from '../../../scale/social-impact-fidelity/social-impact-fidelity.service';
import { ScaleService } from '../../../scale/scale.service';
import { OrganizationService } from '../../organization.service';
import { Organization } from '../../organization.model';
import { ImpactInitiativeService } from '../../../scale/impact-initiative/impact-initiative.service';
import { AuthService } from '../../../auth/auth.service';
import { TypeOrganizationEnum } from '../../type-organization/type-organization.enum';

@Component({
  selector: 'app-dashboard-organization-impact-fidelity',
  templateUrl: './dashboard-organization-impact-fidelity.component.html',
  styleUrls: ['./dashboard-organization-impact-fidelity.component.scss'],
})
export class DashboardOrganizationImpactFidelityComponent extends BaseSingleComponent<SocialImpactFidelityScore> {
  organization: Organization | null = null;
  constructor(
    public impactFidelityService: SocialImpactFidelityService,
    public scaleService: ScaleService,
    public organizationService: OrganizationService,
    public impactInitiativeService: ImpactInitiativeService
  ) {
    super(impactFidelityService);
  }

  override ngOnInit(): void {
    this.subscriptions['currentLogOrganization'] =
      this.authService.organization$.subscribe((organization) => {
        if (
          organization?.type_organization_id ===
            TypeOrganizationEnum.IMPACT_FUNDER ||
          organization?.type_organization_id ===
            TypeOrganizationEnum.CORPORATION
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
    this.impactFidelityService
      .getScoreBreakdownByOrganization(organizationId)
      .subscribe((score) => {
        this.loading = false;
      });
  }

  getByImpactInitiativeId(organizationId: number) {
    this.loading = true;
    this.impactFidelityService
      .getScoreBreakdownByImpactInitiative(organizationId)
      .subscribe((score) => {
        this.loading = false;
      });
  }
}
