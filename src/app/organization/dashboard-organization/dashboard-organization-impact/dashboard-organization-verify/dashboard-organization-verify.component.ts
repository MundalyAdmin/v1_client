import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { SocialImpactFidelity } from './../../../../scale/social-impact-fidelity/social-impact-fidelity.model';
import { ScaleService } from '../../../../scale/scale.service';
import { SocialImpactFidelityService } from '../../../../scale/social-impact-fidelity/social-impact-fidelity.service';
import { ImpactFidelityScore } from './../../../../scale/models/impact-fidelity-score.model';

@Component({
  selector: 'app-dashboard-organization-verify',
  templateUrl: './dashboard-organization-verify.component.html',
  styleUrls: ['./dashboard-organization-verify.component.scss'],
})
export class DashboardOrganizationVerifyComponent
  extends BaseComponent<SocialImpactFidelity>
  implements OnInit
{
  impactFidelityScoreBreakdown: ImpactFidelityScore | null = null;

  constructor(
    public scaleService: ScaleService,
    public sifService: SocialImpactFidelityService
  ) {
    super();
  }

  ngOnInit(): void {
    this.impactFidelityScoreBreakdown = {
      acceptability: Math.floor(Math.random() * (100 - 60 + 1)) + 60,
      appropriateness: Math.floor(Math.random() * (100 - 60 + 1)) + 60,
      comprehensiveness: Math.floor(Math.random() * (100 - 60 + 1)) + 60,
      feasibility: Math.floor(Math.random() * (100 - 60 + 1)) + 60,
      quality_of_delivery: Math.floor(Math.random() * (100 - 60 + 1)) + 60,
    };

    this.impactFidelityScoreBreakdown.score =
      (this.impactFidelityScoreBreakdown['acceptability']! +
        this.impactFidelityScoreBreakdown['appropriateness']! +
        this.impactFidelityScoreBreakdown['comprehensiveness']! +
        this.impactFidelityScoreBreakdown['feasibility']! +
        this.impactFidelityScoreBreakdown['quality_of_delivery']!) /
      5;
  }
}
