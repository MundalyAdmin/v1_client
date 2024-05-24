import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { SocialImpactFidelity } from './social-impact-fidelity.model';
import { tap, ReplaySubject } from 'rxjs';
import { ApiResponse } from '../../shared/models/ApiResponse';
import { SocialImpactFidelityScore } from './social-impact-fidelity-score.model';

@Injectable({
  providedIn: 'root',
})
export class SocialImpactFidelityService extends BaseService<SocialImpactFidelityScore> {
  private _score: SocialImpactFidelityScore | null = null;
  public score$ = new ReplaySubject<SocialImpactFidelityScore | null>(1);

  get score(): SocialImpactFidelityScore | null {
    return this._score;
  }

  set score(score: SocialImpactFidelityScore | null) {
    this._score = score;
    this.score$.next(score);
  }

  constructor() {
    super('scale/social-impact-fidelity');
  }

  getOrganizationScore(organizationId: number) {
    return this.factory.get(`${this.endPoint}/${organizationId}`).pipe(
      tap((response: ApiResponse<SocialImpactFidelityScore>) => {
        this.score = response.data as SocialImpactFidelityScore;
      })
    );
  }
}
