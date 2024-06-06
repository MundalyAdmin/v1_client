import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { SharedModule } from '../../../shared/shared.module';
import { SuperAdminOrganizationSharedModule } from '../super-admin-organization-shared.module';
import { OrganizationSurveyCreateComponent } from './organization-survey/organization-survey-create/organization-survey-create.component';
import { OrganizationSurveyDataUploadComponent } from './organization-survey/organization-survey-data-upload/organization-survey-data-upload.component';
import { OrganizationSurveyListComponent } from './organization-survey/organization-survey-list/organization-survey-list.component';
import { OrganizationSurveyShowComponent } from './organization-survey/organization-survey-show/organization-survey-show.component';
import { OrganizationSurveyComponent } from './organization-survey/organization-survey.component';
import { SuperAdminImpactStoryCreateComponent } from './super-admin-impact-story/super-admin-impact-story-create/super-admin-impact-story-create.component';
import { SuperAdminImpactStoryEditComponent } from './super-admin-impact-story/super-admin-impact-story-edit/super-admin-impact-story-edit.component';
import { SuperAdminImpactStoryListComponent } from './super-admin-impact-story/super-admin-impact-story-list/super-admin-impact-story-list.component';
import { SuperAdminImpactStoryComponent } from './super-admin-impact-story/super-admin-impact-story.component';
import { SuperAdminOrganizationImpactInitiativeListComponent } from './super-admin-organization-impact-initiative-list/super-admin-organization-impact-initiative-list.component';
import { SuperAdminOrganizationImpactInitiativeShowComponent } from './super-admin-organization-impact-initiative-show/super-admin-organization-impact-initiative-show.component';
import { SuperAdminOrganizationImpactInitiativeComponent } from './super-admin-organization-impact-initiative/super-admin-organization-impact-initiative.component';
import { SuperAdminOrganizationReportCreateComponent } from './super-admin-organization-report-create/super-admin-organization-report-create.component';
import { SuperAdminOrganizationReportListComponent } from './super-admin-organization-report-list/super-admin-organization-report-list.component';
import { SuperAdminOrganizationReportComponent } from './super-admin-organization-report/super-admin-organization-report.component';
import { SuperAdminOrganizationShowOverviewComponent } from './super-admin-organization-show-overview/super-admin-organization-show-overview.component';
import { SuperAdminOrganizationShowComponent } from './super-admin-organization-show.component';
import { SuperAdminOrganizationImpactInitiativeCreateComponent } from './super-admin-organization-impact-initiative-create/super-admin-organization-impact-initiative-create.component';
import { ImpactInitiativeModule } from '../../../scale/impact-initiative/impact-initiative.module';
import { InitiativesModule } from '../../../initiatives/initiatives.module';
import { CalendarModule } from 'primeng/calendar';

const routes: Routes = [
  {
    path: '',
    component: SuperAdminOrganizationShowComponent,
    children: [
      {
        path: 'overview',
        component: SuperAdminOrganizationShowOverviewComponent,
      },
      {
        path: 'impact-initiatives',
        component: SuperAdminOrganizationImpactInitiativeComponent,
        children: [
          {
            path: '',
            component: SuperAdminOrganizationImpactInitiativeListComponent,
          },
          {
            path: ':id',
            component: SuperAdminOrganizationImpactInitiativeShowComponent,
            children: [
              {
                path: 'surveys',
                component: OrganizationSurveyComponent,
                children: [
                  {
                    path: '',
                    component: OrganizationSurveyListComponent,
                  },
                  {
                    path: ':id',
                    component: OrganizationSurveyShowComponent,
                  },
                ],
              },
              {
                path: '',
                redirectTo: 'surveys',
                pathMatch: 'full',
              },
            ],
          },
        ],
      },
      {
        path: 'reports',
        component: SuperAdminOrganizationReportComponent,
      },

      {
        path: '',
        redirectTo: 'impact-initiatives',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    SuperAdminOrganizationShowComponent,
    SuperAdminOrganizationShowOverviewComponent,
    SuperAdminImpactStoryComponent,
    SuperAdminImpactStoryListComponent,
    SuperAdminImpactStoryCreateComponent,
    SuperAdminImpactStoryEditComponent,
    OrganizationSurveyComponent,
    OrganizationSurveyCreateComponent,
    SuperAdminOrganizationImpactInitiativeComponent,
    SuperAdminOrganizationImpactInitiativeListComponent,
    SuperAdminOrganizationImpactInitiativeShowComponent,
    OrganizationSurveyShowComponent,
    OrganizationSurveyListComponent,
    OrganizationSurveyDataUploadComponent,
    SuperAdminOrganizationReportComponent,
    SuperAdminOrganizationReportCreateComponent,
    SuperAdminOrganizationReportListComponent,
    SuperAdminOrganizationImpactInitiativeCreateComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    SuperAdminOrganizationSharedModule,
    CalendarModule,
    DialogModule,
    DropdownModule,
    AutoCompleteModule,
    InitiativesModule,
  ],
})
export class SuperAdminOrganizationShowModule {}
