import { Injectable } from '@angular/core';
import { BaseService } from '../../../../shared/services';
import { TypeSurveyForm } from './type-survey-form.model';

@Injectable({
  providedIn: 'root',
})
export class TypeSurveyFormService extends BaseService<TypeSurveyForm> {
  constructor() {
    super('type-survey-forms');
  }
}
