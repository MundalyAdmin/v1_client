import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../../shared/base-component';
import { ImpactFidelityScore } from '../../../../../scale/models/impact-fidelity-score.model';
import { ScaleService } from '../../../../../scale/scale.service';
import { OrganizationService } from '../../../../../organization/organization.service';
import { SocialImpactFidelityService } from '../../../../../scale/social-impact-fidelity/social-impact-fidelity.service';

@Component({
  selector: 'app-organization-new-style-community-verified',
  templateUrl: './organization-new-style-community-verified.component.html',
  styleUrls: ['./organization-new-style-community-verified.component.scss'],
})
export class OrganizationNewStyleCommunityVerifiedComponent
  extends BaseComponent<ImpactFidelityScore>
  implements OnInit
{
  constructor(
    public impactFidelityService: SocialImpactFidelityService,
    public organizationService: OrganizationService
  ) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.getImpactFidelityScore(organization.id!);
        }
      });
  }

  getImpactFidelityScore(organizationId: number) {
    this.loading = true;
    this.impactFidelityService
      .getOrganizationScore(organizationId)
      .subscribe({ complete: () => (this.loading = false) });
  }

  getScoreKey(score: number) {
    if (score >= 4.5) {
      return 'High';
    } else if (score >= 3.5) {
      return 'Medium';
    } else {
      return 'Low';
    }
  }

  getImpactStrengthKey(score: number) {
    if (score >= 5) {
      return 'Highly Impactful';
    } else if (score >= 4) {
      return 'More Impactful';
    } else if (score >= 3) {
      return 'Neutral Impact';
    } else if (score >= 2) {
      return 'Less Impactful';
    } else {
      return 'Not Impactful';
    }
  }

  getScoresAlignmentKey(
    communityReportedScore: number,
    companyReportedScore: number
  ) {
    if (communityReportedScore - companyReportedScore < 0) {
      return 'is even more impactful than';
    } else if (
      communityReportedScore - companyReportedScore >= 0 &&
      communityReportedScore - companyReportedScore <= 0.5
    ) {
      return 'aligns with';
    } else if (
      communityReportedScore - companyReportedScore <= 1 &&
      communityReportedScore - companyReportedScore > 0.5
    ) {
      return 'partially aligns with';
    } else {
      return "doens't align with";
    }
  }
}
