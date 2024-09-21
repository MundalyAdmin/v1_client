import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { ImpactStory } from './impact-story.model';
import { Params } from '@angular/router';
import { tap, map } from 'rxjs/operators';
import { ApiResponse } from '../../shared/models/ApiResponse';
import { ImpactStoryRatingBreakdown } from './impact-story-rating-breakdown.model';
import { ReplaySubject } from 'rxjs';
import { NetPromoterScore } from './net-promoter-score.model';
import { ImpactVerificationTypeInsightsEnum } from 'src/app/impact-verification/impact-verification-type-insights/impact-verification-type-insights.enum';

@Injectable({
  providedIn: 'root',
})
export class ImpactStoryService extends BaseService<ImpactStory> {
  private _ratingBreakdown: null | ImpactStoryRatingBreakdown = null;
  private _netPromoterScore: null | NetPromoterScore = null;

  public ratingBreakdown$ =
    new ReplaySubject<ImpactStoryRatingBreakdown | null>(1);

  public netPromoterScore$ = new ReplaySubject<NetPromoterScore | null>(1);

  get ratingBreakdown(): ImpactStoryRatingBreakdown | null {
    return this._ratingBreakdown;
  }

  get netPromoterScore(): NetPromoterScore | null {
    return this._netPromoterScore;
  }

  set ratingBreakdown(ratingBreakdown: ImpactStoryRatingBreakdown | null) {
    this._ratingBreakdown = ratingBreakdown;
    this.ratingBreakdown$.next(ratingBreakdown);
  }

  constructor() {
    super('impact-stories');
  }

  override store(elements: FormData) {
    return this.factory.post(this.endPoint, elements).pipe(
      tap({
        next: (
          response: ApiResponse<{
            newStory: ImpactStory;
            ratingBreakdown: ImpactStoryRatingBreakdown;
          }>
        ) => {
          const responseData = response.data as {
            newStory: ImpactStory;
            ratingBreakdown: ImpactStoryRatingBreakdown;
          };
          this.lastItemCreated = responseData.newStory;
          this.unshiftItemInData(responseData.newStory);
          this.ratingBreakdown = responseData.ratingBreakdown;
        },
        error: (error) => {
          this.errorResponseHandler(error);
        },
      })
    );
  }

  getByFunderAndTypeInsight(
    funderId: number,
    typeInsight: ImpactVerificationTypeInsightsEnum,
    state: string,
    params?: Params
  ) {
    return this.factory
      .get(
        `${this.endPoint}/funders/${funderId}/type-insights/${typeInsight}/state/${state}`,
        { params }
      )
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

  getByOrganizationId(organizationId: number, params?: Params) {
    return this.factory
      .get(`${this.endPoint}/organizations/${organizationId}`, { params })
      .pipe(
        map(
          (response: ApiResponse<ImpactStory>) => response.data as ImpactStory
        )
      );
  }

  getNetPromoterScoreByOrganization(organizationId: number, options?: any) {
    return this.factory
      .get(`${this.endPoint}/organizations/${organizationId}/nps`, {
        ...options,
      })
      .pipe(
        tap((response: ApiResponse<NetPromoterScore>) => {
          this._netPromoterScore = response.data as NetPromoterScore;
          this.netPromoterScore$.next(this._netPromoterScore);
        }),
        map((response) => response.data as NetPromoterScore)
      );
  }

  getNetPromoterScoreByImpactInitiative(
    impactInitiativeId: number,
    options?: any
  ) {
    return this.factory
      .get(`${this.endPoint}/impact-initiatives/${impactInitiativeId}/nps`, {
        ...options,
      })
      .pipe(
        tap((response: ApiResponse<NetPromoterScore>) => {
          this._netPromoterScore = response.data as NetPromoterScore;
          this.netPromoterScore$.next(this._netPromoterScore);
        }),
        map((response) => response.data as NetPromoterScore)
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
