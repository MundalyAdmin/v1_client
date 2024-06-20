import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SharedModule } from './../../../shared/shared.module';
import { SurveyAnswerComponent } from './survey-answer/survey-answer.component';
import { SurveyFormListComponent } from './survey-form-list/survey-form-list.component';
import { SurveyFormShowComponent } from './survey-form-show/survey-form-show.component';
import { SurveyFormComponent } from './survey-form.component';
import { SurveyQuestionComponent } from './survey-question/survey-question.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CardModule,
    ChartModule,
    OverlayPanelModule,
  ],
  declarations: [
    SurveyFormComponent,
    SurveyFormListComponent,
    SurveyFormShowComponent,
    SurveyQuestionComponent,
    SurveyAnswerComponent,
  ],
})
export class SurveyFormModule {}
