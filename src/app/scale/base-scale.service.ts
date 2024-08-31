import { Inject, Injectable } from '@angular/core';
import { ReplaySubject, map, tap } from 'rxjs';
import { InsightsTrendData } from '../organization/dashboard-organization/dashboard-organization-insights/insights-trend.data.model';
import { ApiResponse } from '../shared/models/ApiResponse';
import { BaseService } from '../shared/services';
import { BaseScaleScore } from './base-scale-score.model';

@Injectable({
  providedIn: 'root',
})
export class BaseScaleService<T extends BaseScaleScore> extends BaseService<T> {
  private _score: T | null = null;
  private _trends: InsightsTrendData[] = [];

  public trends$ = new ReplaySubject<InsightsTrendData[]>(1);
  public score$ = new ReplaySubject<T | null>(1);

  get score(): T | null {
    return this._score;
  }

  set score(score: T | null) {
    this._score = score;
    this.score$.next(score);
  }

  constructor(@Inject('endPoint') endPoint: string) {
    super(endPoint);
  }

  getByOrganizationId(organizationId: number, options?: { params: any }) {
    return this.factory
      .get(`${this.endPoint}/organizations/${organizationId}`, options)
      .pipe(
        tap((response: ApiResponse<T>) => {
          this.score = response.data as T;
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
}
