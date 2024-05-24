import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { ReplaySubject, tap } from 'rxjs';
import { ApiResponse } from '../shared/models/ApiResponse';
import { CommunityTrustScore } from './models/community-trust-score.model';

@Injectable({
  providedIn: 'root',
})
export class ScaleService extends BaseService<any> {
  communityTrustScore$ = new ReplaySubject<CommunityTrustScore>(1);
  private _communityTrustScore!: CommunityTrustScore;

  get communityTrustScore(): CommunityTrustScore {
    return this._communityTrustScore;
  }

  set communityTrustScore(value: CommunityTrustScore) {
    this._communityTrustScore = value;
    this.communityTrustScore$.next(value);
  }

  constructor() {
    super('scale');
  }

  getCommunityTrustScore(organizationId: number) {
    return this.factory
      .get(`${this.endPoint}/community-trust-score/${organizationId}`)
      .pipe(
        tap((response: ApiResponse<CommunityTrustScore>) => {
          this.communityTrustScore = response.data as CommunityTrustScore;
        })
      );
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
    if (communityTrustScore?.total_survey_respondant! < 5) {
      return 'Insufficient data for a recommendation';
    }

    if (communityTrustScore && communityTrustScore.community_trust_score) {
      if (communityTrustScore.community_trust_score <= 40) {
        return 'Bad, Do Not Support';
      } else if (
        communityTrustScore.community_trust_score > 40 &&
        communityTrustScore.community_trust_score <= 70
      ) {
        return 'Need more Information';
      } else if (
        communityTrustScore.community_trust_score > 70 &&
        communityTrustScore.community_trust_score <= 80
      ) {
        return 'Good, Support.';
      } else return 'Excellent, Support.';
    }
    return '';
  }
}
