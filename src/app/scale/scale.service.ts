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
}
