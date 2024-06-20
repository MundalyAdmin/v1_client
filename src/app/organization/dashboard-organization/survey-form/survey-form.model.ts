import { BaseModel } from '../../../shared/models/BaseModel';
import { TypeSurveyForm } from './type-survey-form/type-survey-form.model';

export interface SurveyForm extends BaseModel {
  title?: string;

  status?: string;

  count?: number;

  last_submission?: Date;

  organization_id?: number;

  type_survey_form_id?: number;

  description?: string;

  reward?: string;

  type_survey_form?: TypeSurveyForm;
}
