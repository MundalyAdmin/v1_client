import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { ImpactStory } from './impact-story.model';
import { Params } from '@angular/router';
import { tap, map } from 'rxjs/operators';
import { ApiResponse } from '../../shared/models/ApiResponse';
import { ImpactStoryRatingBreakdown } from './impact-story-rating-breakdown.model';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImpactStoryService extends BaseService<ImpactStory> {
  private _ratingBreakdown: null | ImpactStoryRatingBreakdown = null;
  public ratingBreakDown$ =
    new ReplaySubject<ImpactStoryRatingBreakdown | null>(1);

  get ratingBreakdown(): ImpactStoryRatingBreakdown | null {
    return this._ratingBreakdown;
  }

  set ratingBreakdown(ratingBreakdown: ImpactStoryRatingBreakdown | null) {
    this._ratingBreakdown = ratingBreakdown;
    this.ratingBreakDown$.next(ratingBreakdown);
  }

  constructor() {
    super('impact-storys');
  }

  getByOrganizationId(organizationId: number, params?: Params) {
    return this.factory
      .get(`${this.endPoint}/organizations/${organizationId}`, { params })
      .pipe(
        tap((response: ApiResponse<ImpactStory>) => {
          this.data = response.data as ImpactStory[];

          this.paginationInfo = {
            total: response.total,
            itemsPerPage: response.per_page,
            currentPage: response.current_page,
          };
        }),
        map(
          (response: ApiResponse<ImpactStory>) => response.data as ImpactStory[]
        )
      );
  }

  getAuth() {
    return this.factory.get(`auth/google-oauth`);
  }

  getOrganizationRatingBreadown(organizationId: number) {
    return this.factory
      .get(`${this.endPoint}/${organizationId}/rating-breakdown`)
      .pipe(
        tap((response: ApiResponse<ImpactStoryRatingBreakdown>) => {
          this.ratingBreakdown = response.data as ImpactStoryRatingBreakdown;
        }),
        map((response) => response.data as ImpactStoryRatingBreakdown)
      );
  }
}
