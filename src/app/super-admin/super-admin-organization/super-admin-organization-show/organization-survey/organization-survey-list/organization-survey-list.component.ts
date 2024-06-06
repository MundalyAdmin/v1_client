import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../../shared/base-component';
import { SurveyForm } from '../../../../../organization/dashboard-organization/survey-form/survey-form.model';
import { SurveyFormService } from '../../../../../organization/dashboard-organization/survey-form/survey-form.service';
import { ImpactInitiativeService } from '../../../../../scale/impact-initiative/impact-initiative.service';

@Component({
  selector: 'app-organization-survey-list',
  templateUrl: './organization-survey-list.component.html',
  styleUrls: ['./organization-survey-list.component.scss'],
})
export class OrganizationSurveyListComponent
  extends BaseComponent<SurveyForm>
  implements OnInit
{
  constructor(
    public surveyFormService: SurveyFormService,
    public impactInitiativeService: ImpactInitiativeService
  ) {
    super(surveyFormService);
  }

  override ngOnInit() {
    this.subscriptions['impactInitiative'] =
      this.impactInitiativeService.singleData$.subscribe((impactInitiative) => {
        if (impactInitiative) this.getByImpactIniativeId(impactInitiative.id!);
      });
  }

  getByImpactIniativeId(impactInitiativeId: number) {
    this.loading = true;
    this.surveyFormService
      .getByImpactInitiativeId(impactInitiativeId)
      .subscribe({
        next: (response) => {
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        },
      });
  }
}
