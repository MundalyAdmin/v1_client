import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { SurveyForm } from '../../../../organization/dashboard-organization/survey-form/survey-form.model';
import { SurveyFormService } from '../../../../organization/dashboard-organization/survey-form/survey-form.service';
import { ImpactInitiativeService } from '../../../../scale/impact-initiative/impact-initiative.service';

@Component({
  selector: 'app-organization-survey',
  templateUrl: './organization-survey.component.html',
  styleUrls: ['./organization-survey.component.scss'],
})
export class OrganizationSurveyComponent extends BaseComponent<SurveyForm> {
  constructor(public surveyFormService: SurveyFormService) {
    super(surveyFormService);
  }
}
