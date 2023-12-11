import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { SocialImpactFidelity } from './social-impact-fidelity.model';
import { tap, ReplaySubject } from 'rxjs';
import { ApiResponse } from '../../shared/models/ApiResponse';
import { ImpactFidelityScore } from '../models/impact-fidelity-score.model';

@Injectable({
  providedIn: 'root',
})
export class SocialImpactFidelityService extends BaseService<SocialImpactFidelity> {
  private _score: ImpactFidelityScore | null = null;
  public score$ = new ReplaySubject<ImpactFidelityScore | null>(1);

  get score(): ImpactFidelityScore | null {
    return this._score;
  }

  set score(score: ImpactFidelityScore | null) {
    this._score = score;
    this.score$.next(score);
  }

  constructor() {
    super('scale/social-impact-fidelity');
  }

  getOrganizationScore(organizationId: number) {
    return this.factory.get(`${this.endPoint}/${organizationId}`).pipe(
      tap((response: ApiResponse<ImpactFidelityScore>) => {
        this.score = response.data as ImpactFidelityScore;
      })
    );
  }
}
