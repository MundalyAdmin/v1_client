import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { FacilitationStrategyScore } from './facilitation-strategy-score.model';
import { ReplaySubject, tap } from 'rxjs';
import { ApiResponse } from '../../shared/models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class FacilitationStrategyService extends BaseService<FacilitationStrategyScore> {
  private _score: FacilitationStrategyScore | null = null;
  public score$ = new ReplaySubject<FacilitationStrategyScore | null>(1);

  get score(): FacilitationStrategyScore | null {
    return this._score;
  }

  set score(score: FacilitationStrategyScore | null) {
    this._score = score;
    this.score$.next(score);
  }

  constructor() {
    super('scale/facilitation-strategy');
  }

  getOrganizationScore(organizationId: number) {
    return this.factory.get(`${this.endPoint}/${organizationId}`).pipe(
      tap((response: ApiResponse<FacilitationStrategyScore>) => {
        this.score = response.data as FacilitationStrategyScore;
      })
    );
  }
}
