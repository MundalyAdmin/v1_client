import { Component, OnInit } from '@angular/core';
import { SurveyFormService } from '../../organization/dashboard-organization/survey-form/survey-form.service';

@Component({
  selector: 'app-due-diligence',
  templateUrl: './due-diligence.component.html',
  styleUrls: ['./due-diligence.component.scss'],
})
export class DueDiligenceComponent implements OnInit {
  constructor(public surveyFormService: SurveyFormService) {}

  ngOnInit(): void {
    this.surveyFormService.fetchBy$.next('organization');
  }
}
