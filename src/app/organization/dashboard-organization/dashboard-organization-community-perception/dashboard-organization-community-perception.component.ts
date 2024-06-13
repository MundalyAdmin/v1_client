import { Component } from '@angular/core';
import { DashboardOrganizationVerifyComponent } from '../dashboard-organization-impact/dashboard-organization-verify/dashboard-organization-verify.component';
import { BaseSingleComponent } from '../../../shared/base-component';
import { CommunityPerceptionIndexScore } from '../../../scale/community-perception-index/community-perception-index-score.model';
import { CommunitySuggestionService } from '../../../public/public-community/community-suggestion/community-suggestion.service';
import { Organization } from '../../organization.model';
import { ScaleService } from '../../../scale/scale.service';
import { OrganizationService } from '../../organization.service';
import { CommunityPerceptionIndexService } from '../../../scale/community-perception-index/community-perception-index.service';
import { TypeOrganizationEnum } from '../../type-organization/type-organization.enum';
import { ImpactInitiativeService } from '../../../scale/impact-initiative/impact-initiative.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-dashboard-organization-community-perception',
  templateUrl: './dashboard-organization-community-perception.component.html',
  styleUrls: ['./dashboard-organization-community-perception.component.scss'],
})
export class DashboardOrganizationCommunityPerceptionComponent extends BaseSingleComponent<CommunityPerceptionIndexScore> {
  organization: Organization | null = null;
  constructor(
    public communityPerceptionService: CommunityPerceptionIndexService,
    public scaleService: ScaleService,
    public organizationService: OrganizationService,
    public impactInitiativeService: ImpactInitiativeService,
    public authService: AuthService
  ) {
    super(communityPerceptionService);
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
        console.log('imapact initiative', impactInitiative);
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
    this.communityPerceptionService
      .getScoreBreakdownByOrganization(organizationId)
      .subscribe((score) => {
        this.loading = false;
      });
  }

  getByImpactInitiativeId(imapactInitiativeId: number) {
    this.loading = true;
    this.communityPerceptionService
      .getScoreBreakdownByImpactInitiative(imapactInitiativeId)
      .subscribe((score) => {
        this.loading = false;
        console.log('score', this.communityPerceptionService.score);
      });
  }
}
