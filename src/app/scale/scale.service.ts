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
    const width = (scaleElementScore * 100) / total + '%';
    return width;
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
