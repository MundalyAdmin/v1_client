import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { SurveyQuestionWithAnswerCount } from './survey-question-with-answer-count.model';
import { SurveyQuestionService } from './survey-question.service';
import { SurveyFormService } from '../survey-form.service';

@Component({
  selector: 'app-survey-question',
  templateUrl: './survey-question.component.html',
  styleUrls: ['./survey-question.component.scss'],
})
export class SurveyQuestionComponent
  extends BaseComponent<SurveyQuestionWithAnswerCount>
  implements OnInit
{
  basicData: any;
  constructor(
    public surveyQuestionService: SurveyQuestionService,
    public surveyFormService: SurveyFormService
  ) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions['surveyForm'] =
      this.surveyFormService.singleData$.subscribe((surveyForm) => {
        if (surveyForm?.id) this.getBySurveyFormId(surveyForm.id);
      });
  }

  getBySurveyFormId(surveyFormId: number) {
    this.loading = true;
    this.surveyQuestionService
      .getCountAnswersBySurveyFormId(surveyFormId)
      .subscribe((data) => {
        this.data = data as SurveyQuestionWithAnswerCount[];
        this.loading = false;
      });
  }

  getChartTypeByIndex(index: number) {
    if ((index + 1) % 2 === 0) return 'doughnut';
    if ((index + 1) % 3 === 0) return 'pie';

    return 'bar';
  }
}
