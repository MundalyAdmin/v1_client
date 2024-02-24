import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { SurveyForm } from './survey-form.model';

@Injectable({
  providedIn: 'root',
})
export class SurveyFormService extends BaseService<SurveyForm> {
  constructor() {
    super('survey-form');
  }
}
