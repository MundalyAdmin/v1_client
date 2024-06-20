import { BaseModel } from '../../../../shared/models/BaseModel';

export interface SurveyQuestion extends BaseModel {
  name: string;

  survey_form_id: number;

  category_survey_question_id: number;

  type_survey_question_id: number;

  text: string;

  available_choices: string;
}
