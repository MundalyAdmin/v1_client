import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { SocialImpactFidelity } from './social-impact-fidelity.model';
import { tap, ReplaySubject, map } from 'rxjs';
import { ApiResponse } from '../../shared/models/ApiResponse';
import { SocialImpactFidelityScore } from './social-impact-fidelity-score.model';
import { InsightsTrendData } from '../../organization/dashboard-organization/dashboard-organization-insights/insights-trend.data.model';

@Injectable({
  providedIn: 'root',
})
export class SocialImpactFidelityService extends BaseService<SocialImpactFidelityScore> {
  private _score: SocialImpactFidelityScore | null = null;
  private _trends: InsightsTrendData[] = [];

  public trends$ = new ReplaySubject<InsightsTrendData[]>(1);
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

  getTrendScore(organizationId: number, options?: { params: any }) {
    console.log(options);
    return this.factory
      .get(`${this.endPoint}/${organizationId}/trends`, options)
      .pipe(
        tap((response: ApiResponse<InsightsTrendData>) => {
          this._trends = response.data as InsightsTrendData[];
          this.trends$.next(this._trends);
        }),
        map((response) => response.data as InsightsTrendData[])
      );
  }
}
