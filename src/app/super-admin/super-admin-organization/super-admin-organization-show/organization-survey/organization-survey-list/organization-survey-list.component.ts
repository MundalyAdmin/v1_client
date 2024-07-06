import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../../shared/base-component';
import { SurveyForm } from '../../../../../organization/dashboard-organization/survey-form/survey-form.model';
import { SurveyFormService } from '../../../../../organization/dashboard-organization/survey-form/survey-form.service';
import { ImpactInitiativeService } from '../../../../../scale/impact-initiative/impact-initiative.service';
import { OrganizationService } from '../../../../../organization/organization.service';

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
    public impactInitiativeService: ImpactInitiativeService,
    public organizationService: OrganizationService
  ) {
    super(surveyFormService);
  }

  override ngOnInit() {
    this.subscriptions['fetch'] = this.surveyFormService.fetchBy$.subscribe(
      (fetch) => {
        if (fetch === 'impact-initiatives') {
          this.subscriptions['impactInitiative'] =
            this.impactInitiativeService.singleData$.subscribe(
              (impactInitiative) => {
                if (impactInitiative)
                  this.getByImpactIniativeId(impactInitiative.id!);
              }
            );
        } else if (fetch === 'organization') {
          this.subscriptions['organization'] =
            this.organizationService.singleData$.subscribe((organization) => {
              if (organization) this.getByOrganizationId(organization.id!);
            });
        }
      }
    );
  }

  getByOrganizationId(organizationId: number) {
    this.loading = true;
    this.surveyFormService.getByOrganizationId(organizationId).subscribe({
      next: (response) => {
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
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
