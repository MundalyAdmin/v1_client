import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { CommunityPerceptionIndexScore } from './community-perception-index-score.model';
import { ReplaySubject, tap } from 'rxjs';
import { ApiResponse } from '../../shared/models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class CommunityPerceptionIndexService extends BaseService<CommunityPerceptionIndexScore> {
  private _score: CommunityPerceptionIndexScore | null = null;
  public score$ = new ReplaySubject<CommunityPerceptionIndexScore | null>(1);

  get score(): CommunityPerceptionIndexScore | null {
    return this._score;
  }

  set score(score: CommunityPerceptionIndexScore | null) {
    this._score = score;
    this.score$.next(score);
  }

  constructor() {
    super('scale/community-perception-index');
  }

  getOrganizationScore(organizationId: number) {
    return this.factory.get(`${this.endPoint}/${organizationId}`).pipe(
      tap((response: ApiResponse<CommunityPerceptionIndexScore>) => {
        this.score = response.data as CommunityPerceptionIndexScore;
      })
    );
  }
}
