import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../../shared/base-component';
import { SocialImpactFidelityScore } from '../../../../../scale/social-impact-fidelity/social-impact-fidelity-score.model';
import { ScaleService } from '../../../../../scale/scale.service';
import { OrganizationService } from '../../../../../organization/organization.service';
import { SocialImpactFidelityService } from '../../../../../scale/social-impact-fidelity/social-impact-fidelity.service';
import { Organization } from '../../../../../organization/organization.model';

@Component({
  selector: 'app-organization-new-style-community-verified',
  templateUrl: './organization-new-style-community-verified.component.html',
  styleUrls: ['./organization-new-style-community-verified.component.scss'],
})
export class OrganizationNewStyleCommunityVerifiedComponent
  extends BaseComponent<SocialImpactFidelityScore>
  implements OnInit
{
  organization: Organization | undefined;
  total_respondant: number = 0;
  company_score_rating: number | undefined;
  company_reported_impact_strength: number | undefined;

  constructor(
    public impactFidelityService: SocialImpactFidelityService,
    public organizationService: OrganizationService,
    public scaleService: ScaleService
  ) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.getImpactFidelityScore(organization.id!);
          this.organization = organization;
        }
      });
  }

  getImpactFidelityScore(organizationId: number) {
    this.loading = true;
    this.impactFidelityService.getOrganizationScore(organizationId).subscribe({
      complete: () => {
        this.company_score_rating =
          this.impactFidelityService.score?.score_rating;

        this.company_reported_impact_strength =
          this.impactFidelityService.score?.company_reported_impact_strength;

        this.total_respondant =
          this.impactFidelityService.score?.total_respondant || 0;

        this.loading = false;
      },
    });
  }
}
