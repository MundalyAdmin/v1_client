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
  stories: any[] = [];
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

    this.stories = [
      {
        id: 30,
        username: 'Adwoa',
        title: 'Beyond the Classroom',
        rating: 5,
        verified: false,
        about:
          'The school offers great extracurricular activities for the children.',
        organization_id: 1,
        survey_submission_id: null,
        user_id: null,
        location: 'Accra, Ghana',
        reply: {
          id: 1,
          impact_story_id: 30,
          reply:
            'Thank you for your feedback. We are grateful for the opportunity to partner with you and the entire community to improve healthcare',
        },
      },
      {
        id: 29,
        username: 'Yaw',
        title: 'Safeguarding Our Community',
        rating: 4,
        verified: false,
        about:
          'The security in the community has greatly improved with Cocoa360 presence',
        organization_id: 1,
        survey_submission_id: null,
        user_id: null,
        location: 'Kumasi, Ghana',
        reply: null,
      },
      {
        id: 28,
        username: 'Kofi',
        title: 'Empowering Mind',
        rating: 4,
        verified: false,
        about: 'The education support is great in the village.',
        organization_id: 1,
        survey_submission_id: null,
        user_id: null,
        location: 'Accra, Ghana',
        reply: null,
      },
      {
        id: 27,
        username: 'Mabel',
        title: 'Empowering Lives',
        rating: 5,
        verified: false,
        about:
          'The health center is saving lives especially for expectant women',
        organization_id: 1,
        survey_submission_id: null,
        user_id: null,
        location: 'Accra, Ghana',

        reply: null,
      },
      {
        id: 26,
        username: 'Kwesi',
        title: 'A Beacon of Hope for the Future',
        rating: 5,
        verified: false,
        about:
          "Cocoa360's school has made a big difference. Hope they keep it up",
        organization_id: 1,
        survey_submission_id: null,
        user_id: null,
        location: 'Tarkwa, Ghana',
        reply: null,
      },
    ];
  }
}
