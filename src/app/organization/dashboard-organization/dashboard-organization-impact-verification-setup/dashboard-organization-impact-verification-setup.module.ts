import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SliderModule } from 'primeng/slider';
import { SharedModule } from '../../../shared/shared.module';
import { DashboardOrganizationImpactVerificationSetupBaseComponent } from '../dashboard-organization-impact-verification-setup-base/dashboard-organization-impact-verification-setup-base.component';
import { DashboardOrganizationImpactVerificationSetupCommunitiesComponent } from '../dashboard-organization-impact-verification-setup-communities/dashboard-organization-impact-verification-setup-communities.component';
import { DashboardOrganizationImpactVerificationSetupLaunchComponent } from '../dashboard-organization-impact-verification-setup-launch/dashboard-organization-impact-verification-setup-launch.component';
import { DashboardOrganizationImpactVerificationSetupParticipantComponent } from '../dashboard-organization-impact-verification-setup-participant/dashboard-organization-impact-verification-setup-participant.component';
import { DashboardOrganizationImpactVerificationSetupSurveyComponent } from '../dashboard-organization-impact-verification-setup-survey/dashboard-organization-impact-verification-setup-survey.component';
import { DashboardOrganizationImpactVerificationSetupComponent } from './dashboard-organization-impact-verification-setup.component';

const routes = [
  {
    path: ':id',
    component: DashboardOrganizationImpactVerificationSetupComponent,
    children: [
      {
        path: 'setup',
        component:
          DashboardOrganizationImpactVerificationSetupCommunitiesComponent,
      },
      {
        path: 'participants',
        component:
          DashboardOrganizationImpactVerificationSetupParticipantComponent,
      },
      {
        path: 'survey',
        component: DashboardOrganizationImpactVerificationSetupSurveyComponent,
      },

      {
        path: 'launch',
        component: DashboardOrganizationImpactVerificationSetupLaunchComponent,
      },

      { path: '**', redirectTo: 'setup' },
    ],
  },
];

@NgModule({
  declarations: [
    DashboardOrganizationImpactVerificationSetupComponent,
    DashboardOrganizationImpactVerificationSetupCommunitiesComponent,
    DashboardOrganizationImpactVerificationSetupParticipantComponent,
    DashboardOrganizationImpactVerificationSetupLaunchComponent,
    DashboardOrganizationImpactVerificationSetupBaseComponent,
    DashboardOrganizationImpactVerificationSetupSurveyComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SliderModule,
    RouterModule.forChild(routes),
    InputSwitchModule,
    AutoCompleteModule,
  ],
})
export class DashboardOrganizationImpactVerificationSetupModule {}
