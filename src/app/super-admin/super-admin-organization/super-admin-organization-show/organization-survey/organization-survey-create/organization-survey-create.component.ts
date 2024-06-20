import { Component, OnInit } from '@angular/core';
import { BaseCreateComponent } from '../../../../../shared/base-component';
import { SurveyForm } from '../../../../../organization/dashboard-organization/survey-form/survey-form.model';
import { Validators } from '@angular/forms';
import { SurveyFormService } from '../../../../../organization/dashboard-organization/survey-form/survey-form.service';
import { OrganizationService } from '../../../../../organization/organization.service';
import { Organization } from '../../../../../organization/organization.model';
import { TypeSurveyFormService } from '../../../../../organization/dashboard-organization/survey-form/type-survey-form/type-survey-form.service';
import { TypeSurveyForm } from '../../../../../organization/dashboard-organization/survey-form/type-survey-form/type-survey-form.model';
import { ImpactInitiative } from '../../../../../scale/impact-initiative/impact-initiative.model';
import { ImpactInitiativeService } from '../../../../../scale/impact-initiative/impact-initiative.service';

@Component({
  selector: 'app-organization-survey-create',
  templateUrl: './organization-survey-create.component.html',
  styleUrls: ['./organization-survey-create.component.scss'],
})
export class OrganizationSurveyCreateComponent
  extends BaseCreateComponent<SurveyForm>
  implements OnInit
{
  impactInitiative: ImpactInitiative | null = null;
  typeSurveyForms: TypeSurveyForm[] = [];
  typeSurveyFormLoading = false;
  constructor(
    public surveyFormService: SurveyFormService,
    public typeSurveyFormService: TypeSurveyFormService,
    public impactInitiativeService: ImpactInitiativeService
  ) {
    super(surveyFormService);
  }

  override ngOnInit() {
    this.initForm();
    this.getTypeSurveyForms();
    this.subscriptions['organization'] =
      this.impactInitiativeService.singleData$.subscribe((impactInitiative) => {
        if (impactInitiative) {
          this.impactInitiative = impactInitiative;
          this.form.patchValue({
            impact_initiative_id: impactInitiative.id,
            organization_id: impactInitiative.organization_id,
          });
        }
      });
  }

  getTypeSurveyForms() {
    this.typeSurveyFormLoading = true;
    this.typeSurveyFormService.get().subscribe((typeSurveyForms) => {
      this.typeSurveyForms = typeSurveyForms;
      this.typeSurveyFormLoading = false;
    });
  }

  initForm() {
    this.form = this.fb.group({
      title: [null, Validators.required],
      type_survey_form_id: [null, Validators.required],
      impact_initiative_id: [null, Validators.required],
      description: [null, Validators.required],
      reward: [null],
      organization_id: [null, Validators.required],
    });
  }

  override create(): void {
    this.loading = true;
    this.surveyFormService
      .store({
        ...this.form.value,
        type_survey_form_id: this.form.value.type_survey_form_id.id,
      })
      .subscribe({
        next: () => {
          this.loading = false;
          this.helper.notification.alertSuccess();
          this.initForm();
          this.form.patchValue({
            impact_initiative_id: this.impactInitiative!.id,
            organization_id: this.impactInitiative!.organization_id,
          });
          this.created.emit();
        },
        error: () => {
          this.loading = false;
        },
      });
  }
}
