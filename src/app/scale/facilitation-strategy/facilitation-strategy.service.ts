import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { FacilitationStrategyScore } from './facilitation-strategy-score.model';
import { ReplaySubject, map, tap } from 'rxjs';
import { ApiResponse } from '../../shared/models/ApiResponse';
import { InsightsTrendData } from '../../organization/dashboard-organization/dashboard-organization-insights/insights-trend.data.model';

@Injectable({
  providedIn: 'root',
})
export class FacilitationStrategyService extends BaseService<FacilitationStrategyScore> {
  private _score: FacilitationStrategyScore | null = null;
  private _trends: InsightsTrendData[] = [];

  public trends$ = new ReplaySubject<InsightsTrendData[]>(1);
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

  getScoreBreakdownByOrganization(
    organizationId: number,
    options?: { params: any }
  ) {
    return this.factory
      .get(`${this.endPoint}/organizations/${organizationId}`, options)
      .pipe(
        tap((response: ApiResponse<FacilitationStrategyScore>) => {
          this.score = response.data as FacilitationStrategyScore;
        })
      );
  }

  getScoreBreakdownByImpactInitiative(
    organizationId: number,
    options?: { params: any }
  ) {
    return this.factory
      .get(`${this.endPoint}/impact-initiatives/${organizationId}`, options)
      .pipe(
        tap((response: ApiResponse<FacilitationStrategyScore>) => {
          this.score = response.data as FacilitationStrategyScore;
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
