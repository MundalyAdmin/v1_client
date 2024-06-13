import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { CommunityPerceptionIndexScore } from './community-perception-index-score.model';
import { ReplaySubject, map, tap } from 'rxjs';
import { ApiResponse } from '../../shared/models/ApiResponse';
import { InsightsTrendData } from '../../organization/dashboard-organization/dashboard-organization-insights/insights-trend.data.model';

@Injectable({
  providedIn: 'root',
})
export class CommunityPerceptionIndexService extends BaseService<CommunityPerceptionIndexScore> {
  private _score: CommunityPerceptionIndexScore | null = null;
  private _trends: InsightsTrendData[] = [];

  public trends$ = new ReplaySubject<InsightsTrendData[]>(1);
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

  getScoreBreakdownByOrganization(organizationId: number) {
    return this.factory
      .get(`${this.endPoint}/organizations/${organizationId}`)
      .pipe(
        tap((response: ApiResponse<CommunityPerceptionIndexScore>) => {
          this.score = response.data as CommunityPerceptionIndexScore;
        })
      );
  }

  getScoreBreakdownByImpactInitiative(organizationId: number) {
    return this.factory
      .get(`${this.endPoint}/impact-initiatives/${organizationId}`)
      .pipe(
        tap((response: ApiResponse<CommunityPerceptionIndexScore>) => {
          this.score = response.data as CommunityPerceptionIndexScore;
        })
      );
  }

  getTrendScoreByOrganization(
    organizationId: number,
    options?: { params: any }
  ) {
    return this.factory
      .get(`${this.endPoint}/organizations/${organizationId}/trends`, options)
      .pipe(
        tap((response: ApiResponse<InsightsTrendData>) => {
          this._trends = response.data as InsightsTrendData[];
          this.trends$.next(this._trends);
        }),
        map((response) => response.data as InsightsTrendData[])
      );
  }

  getTrendScoreByImpactInitiative(
    impactInitiativeId: number,
    options?: { params: any }
  ) {
    return this.factory
      .get(
        `${this.endPoint}/impact-initiatives/${impactInitiativeId}/trends`,
        options
      )
      .pipe(
        tap((response: ApiResponse<InsightsTrendData>) => {
          this._trends = response.data as InsightsTrendData[];
          this.trends$.next(this._trends);
        }),
        map((response) => response.data as InsightsTrendData[])
      );
  }
}
