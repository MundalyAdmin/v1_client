import { Component, OnInit } from '@angular/core';
import {
  BaseComponent,
  BaseSingleComponent,
} from '../../../../../shared/base-component';
import { SurveyForm } from '../../../../../organization/dashboard-organization/survey-form/survey-form.model';
import { SurveyFormService } from '../../../../../organization/dashboard-organization/survey-form/survey-form.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organization-survey-show',
  templateUrl: './organization-survey-show.component.html',
  styleUrls: ['./organization-survey-show.component.scss'],
})
export class OrganizationSurveyShowComponent
  extends BaseComponent<SurveyForm>
  implements OnInit
{
  showSurveyDataUploadModal = false;
  constructor(
    public surveyFormService: SurveyFormService,
    public route: ActivatedRoute
  ) {
    super(surveyFormService);
  }

  override ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.getSurveyFormById(+params['id']);
      }
    });
  }

  getSurveyFormById(surveyFormId: number) {
    this.loading = true;
    this.surveyFormService.show(surveyFormId).subscribe((response) => {
      this.loading = false;
    });
  }
}
