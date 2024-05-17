import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyFormComponent } from './survey-form.component';
import { SurveyFormListComponent } from './survey-form-list/survey-form-list.component';
import { SharedModule } from './../../../shared/shared.module';
import { SurveyFormShowComponent } from './survey-form-show/survey-form-show.component';
import { CardModule } from 'primeng/card';
import { SurveyQuestionComponent } from './survey-question/survey-question.component';
import { SurveyAnswerComponent } from './survey-answer/survey-answer.component';
import { ChartModule } from 'primeng/chart';

@NgModule({
  imports: [CommonModule, SharedModule, CardModule, ChartModule],
  declarations: [
    SurveyFormComponent,
    SurveyFormListComponent,
    SurveyFormShowComponent,
    SurveyQuestionComponent,
    SurveyAnswerComponent,
  ],
})
export class SurveyFormModule {}
