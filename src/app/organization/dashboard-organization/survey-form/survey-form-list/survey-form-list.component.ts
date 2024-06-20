import { Component } from '@angular/core';
import { BaseListComponent } from '../../../../shared/base-component';
import { SurveyForm } from '../survey-form.model';
import { SurveyFormService } from '../survey-form.service';
import { OrganizationService } from '../../../organization.service';

@Component({
  selector: 'app-survey-form-list',
  templateUrl: './survey-form-list.component.html',
  styleUrls: ['./survey-form-list.component.scss'],
})
export class SurveyFormListComponent extends BaseListComponent<SurveyForm> {
  constructor(
    public surveyFormService: SurveyFormService,
    public organizationService: OrganizationService
  ) {
    super(surveyFormService);
  }

  override ngOnInit(): void {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) this.getByOrganizationId(organization.id!);
      });
  }

  getByOrganizationId(organizationId: number) {
    this.loading = true;
    this.surveyFormService.getByOrganizationId(organizationId).subscribe(() => {
      this.loading = false;
    });
  }
}
