import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CategoryOrganizationEnum } from '../organization/category-organization/category-organization.enum';
import { BaseScaleService } from './base-scale.service';
import { CommunityTrustScore } from './models/community-trust-score.model';

@Injectable({
  providedIn: 'root',
})
export class ScaleService extends BaseScaleService<any> {
  constructor(public authService: AuthService) {
    super('scale/community-trust-score');
  }

  getNumberOfStars(scaleElementScore: number) {
    const numberOfStars = Math.floor(scaleElementScore);
    const numberOfHalfStars = scaleElementScore - numberOfStars >= 0.1 ? 1 : 0;
    const numberOfEmptyStars = 5 - numberOfHalfStars - numberOfStars;
    return {
      numberOfStars,
      numberOfHalfStars,
      numberOfEmptyStars,
    };
  }

  getProgressBarWidth(scaleElementScore: number, total: number = 5) {
    if (!scaleElementScore) return '0%';
    const width = (scaleElementScore * 100) / total + '%';
    return width;
  }

  getScoreKey(score: number) {
    if (score >= 80) {
      return 'High';
    } else if (score >= 60) {
      return 'Medium';
    } else {
      return 'Low';
    }
  }

  getImpactStrengthKey(score: number) {
    if (score >= 5) {
      return 'Highly Impactful';
    } else if (score >= 4 && score < 5) {
      return 'More Impactful';
    } else if (score >= 3 && score < 4) {
      return 'Neutral Impact';
    } else if (score >= 2 && score < 3) {
      return 'Less Impactful';
    } else {
      return 'Not Impactful';
    }
  }

  getScoresAlignmentKey(
    communityReportedScore: number,
    companyReportedScore: number
  ) {
    if (companyReportedScore - communityReportedScore < 0) {
      return 'is even more impactful than';
    } else if (
      companyReportedScore - communityReportedScore >= 0 &&
      companyReportedScore - communityReportedScore <= 0.5
    ) {
      return 'aligns with';
    } else if (
      companyReportedScore - communityReportedScore <= 1 &&
      companyReportedScore - communityReportedScore > 0.5
    ) {
      return 'partially aligns with';
    } else {
      return "doens't align with";
    }
  }

  getReputationKey(score: number) {
    if (score >= 4) {
      return 'high reputation';
    } else if (score >= 3 && score < 4) {
      return 'average reputation';
    } else {
      return 'low reputation';
    }
  }

  getFundabilityRecommendation(communityTrustScore: CommunityTrustScore) {
    const totalRespondants = communityTrustScore?.total_survey_respondant;
    const trustScore = communityTrustScore?.community_trust_score;

    if (totalRespondants! < 5) {
      return 'Insufficient data for a recommendation';
    }

    if (trustScore) {
      const isImpact =
        this.authService.organization?.type_organization
          ?.category_organization_id === CategoryOrganizationEnum.IMPACT;

      if (trustScore <= 55) {
        return `${
          isImpact ? 'Bad, Do Not Support' : 'High Risk, Do Not Support'
        }`;
      } else if (trustScore > 55 && trustScore <= 77) {
        return `${
          isImpact
            ? 'Need more Information'
            : 'Medium Risk, Need more Information'
        }`;
      } else if (trustScore > 77 && trustScore <= 88) {
        return `${isImpact ? 'Good, Support.' : 'Low Risk, Support.'}`;
      } else {
        return `${isImpact ? 'Excellent, Support.' : 'No Risk, Support.'}`;
      }
    }

    return '';
  }
}
