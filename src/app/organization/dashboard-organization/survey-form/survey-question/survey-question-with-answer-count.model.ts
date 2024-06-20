import { SurveyAnswerCount } from '../survey-answer/survey-answer-count.model';

export interface SurveyQuestionWithAnswerCount {
  id: number;
  question: string;
  count: number;
  answers: SurveyAnswerCount[];
}
