import { Component, OnInit } from '@angular/core';
import { BaseCreateComponent } from '../../../../../shared/base-component';
import { SurveyForm } from '../../../../../survey/survey-form/survey-form.model';
import { Validators } from '@angular/forms';
import { SurveyFormService } from './../../../../../survey/survey-form/survey-form.service';
import { OrganizationService } from '../../../../../organization/organization.service';
import { Organization } from '../../../../../organization/organization.model';

@Component({
  selector: 'app-organization-survey-create',
  templateUrl: './organization-survey-create.component.html',
  styleUrls: ['./organization-survey-create.component.scss'],
})
export class OrganizationSurveyCreateComponent
  extends BaseCreateComponent<SurveyForm>
  implements OnInit
{
  private _organization: Organization | null = null;
  constructor(
    public surveyFormService: SurveyFormService,
    public organizationService: OrganizationService
  ) {
    super(surveyFormService);
  }

  ngOnInit() {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this._organization = organization;
          this.initForm();
        }
      });
  }

  initForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      organization_id: [this._organization!.id, Validators.required],
    });
  }

  override create(): void {
    this.loading = true;
    this.surveyFormService.store(this.form.value).subscribe({
      next: () => {
        this.loading = false;
        this.helper.notification.alertSuccess();
        this.initForm();
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
