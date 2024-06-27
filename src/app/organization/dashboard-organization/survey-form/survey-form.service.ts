import { Injectable } from '@angular/core';
import { BaseService } from '../../../shared/services';
import { SurveyForm } from './survey-form.model';
import { ReplaySubject, map, tap } from 'rxjs';
import { ApiResponse } from '../../../shared/models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class SurveyFormService extends BaseService<SurveyForm> {
  fetchBy$ = new ReplaySubject<'organization' | 'impact-initiatives'>(1);
  constructor() {
    super('survey/forms');
  }

  getByOrganizationId(organizationId: number) {
    return this.factory
      .get(`${this.endPoint}/organization/${organizationId}`)
      .pipe(
        tap((response: ApiResponse<SurveyForm>) => {
          this.data = response.data as SurveyForm[];

          this.paginationInfo = {
            total: response.total,
            itemsPerPage: response.per_page,
            currentPage: response.current_page,
          };
        }),
        map((response: ApiResponse<SurveyForm>) => response.data)
      );
  }

  getByImpactInitiativeId(impactInitiativeId: number) {
    return this.factory
      .get(`${this.endPoint}/impact-initiatives/${impactInitiativeId}`)
      .pipe(
        tap((response: ApiResponse<SurveyForm>) => {
          this.data = response.data as SurveyForm[];

          this.paginationInfo = {
            total: response.total,
            itemsPerPage: response.per_page,
            currentPage: response.current_page,
          };
        }),
        map((response: ApiResponse<SurveyForm>) => response.data)
      );
  }
}
