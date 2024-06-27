import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { ImpactInitiative } from '../../../../scale/impact-initiative/impact-initiative.model';
import { ImpactInitiativeService } from '../../../../scale/impact-initiative/impact-initiative.service';
import { OrganizationService } from '../../../../organization/organization.service';
import { SurveyFormService } from '../../../../organization/dashboard-organization/survey-form/survey-form.service';

@Component({
  selector: 'app-super-admin-organization-impact-initiative',
  templateUrl: './super-admin-organization-impact-initiative.component.html',
  styleUrls: ['./super-admin-organization-impact-initiative.component.scss'],
})
export class SuperAdminOrganizationImpactInitiativeComponent
  extends BaseComponent<ImpactInitiative>
  implements OnInit
{
  constructor(
    public impactInitiativeService: ImpactInitiativeService,
    public surveyFormService: SurveyFormService
  ) {
    super(impactInitiativeService);
  }

  override ngOnInit() {
    this.surveyFormService.fetchBy$.next('impact-initiatives');
  }
}
