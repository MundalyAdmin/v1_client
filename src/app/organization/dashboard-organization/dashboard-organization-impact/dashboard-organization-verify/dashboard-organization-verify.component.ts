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
        username: 'Jennifer Lee',
        title: 'A Safe Haven for Teens',
        rating: 5,
        verified: false,
        about:
          '360 Youth Services has been a beacon of hope for me and many others. ',
        organization_id: 1,
        survey_submission_id: null,
        user_id: null,
        location: 'Naperville, United States',
        reply: {
          id: 1,
          impact_story_id: 30,
          reply:
            'Thank you for your feedback. We are grateful for the opportunity to partner with you and the entire community to improve healthcare',
        },
      },
      {
        id: 29,
        username: 'Mark Thompson',
        title: 'Empowering Youth for a Brighter Future',
        rating: 4,
        verified: false,
        about:
          'I cannot speak highly enough of 360 Youth Services and the incredible work they do. ',
        organization_id: 1,
        survey_submission_id: null,
        user_id: null,
        location: 'Aurora, United States',
        reply: null,
      },
      {
        id: 28,
        username: 'Emily Rodriguez',
        title: 'Life-Changing Support for Youth',
        rating: 4,
        verified: false,
        about:
          '360 Youth Services saved my life. When I was struggling with substance abuse, they provided the support and resources I needed to overcome my addiction and rebuild my life.',
        organization_id: 1,
        survey_submission_id: null,
        user_id: null,
        location: 'Naperville, United States',
        reply: null,
      },
      {
        id: 27,
        username: 'Alex Chang',
        title: 'Making a Difference, One Life at a Time',
        rating: 5,
        verified: false,
        about:
          "360 Youth Services is more than just an organization; it's a lifeline for teens in need.",
        organization_id: 1,
        survey_submission_id: null,
        user_id: null,
        location: 'Naperville, United States',

        reply: null,
      },
      {
        id: 26,
        username: 'Sarah Patel',
        title: 'Transformative Community Impact',
        rating: 5,
        verified: false,
        about:
          '360 Youth Services is an integral part of our community, working tirelessly to address the needs of young people and create positive change',
        organization_id: 1,
        survey_submission_id: null,
        user_id: null,
        location: 'Aurora, United States',
        reply: null,
      },
    ];
  }
}
