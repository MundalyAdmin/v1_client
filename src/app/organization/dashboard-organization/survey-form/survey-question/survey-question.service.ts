import { Injectable } from '@angular/core';
import { BaseService } from '../../../../shared/services';
import { map, tap } from 'rxjs';
import { ApiResponse } from '../../../../shared/models/ApiResponse';
import { SurveyQuestionWithAnswerCount } from './survey-question-with-answer-count.model';
import { SurveyQuestion } from './survey-question.model';

@Injectable({
  providedIn: 'root',
})
export class SurveyQuestionService extends BaseService<SurveyQuestion> {
  constructor() {
    super('survey/questions');
  }

  getCountAnswersBySurveyFormId(surveyFormId: number) {
    return this.factory
      .get(`${this.endPoint}/form/${surveyFormId}/count-answers`)
      .pipe(
        tap((response: ApiResponse<SurveyQuestionWithAnswerCount>) => {
          // this.data = response.data as SurveyQuestionWithAnswerCount[];

          this.paginationInfo = {
            total: response.total,
            itemsPerPage: response.per_page,
            currentPage: response.current_page,
          };
        }),
        map(
          (response: ApiResponse<SurveyQuestionWithAnswerCount>) =>
            response.data
        )
      );
  }
}
