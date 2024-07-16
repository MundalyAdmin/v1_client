import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { NgxGpAutocompleteModule } from '@angular-magic/ngx-gp-autocomplete';
import { Loader } from '@googlemaps/js-api-loader';
import { environment } from '../../../../environments/environment';
import { DashboardOrganizationImpactVerificationSetupComponent } from './dashboard-organization-impact-verification-setup.component';
import { RouterModule } from '@angular/router';
import { DashboardOrganizationImpactVerificationSetupCommunitiesComponent } from '../dashboard-organization-impact-verification-setup-communities/dashboard-organization-impact-verification-setup-communities.component';
import { DashboardOrganizationImpactVerificationSetupParticipantComponent } from '../dashboard-organization-impact-verification-setup-participant/dashboard-organization-impact-verification-setup-participant.component';
import { SliderModule } from 'primeng/slider';
import { DashboardOrganizationImpactVerificationSetupLaunchComponent } from '../dashboard-organization-impact-verification-setup-launch/dashboard-organization-impact-verification-setup-launch.component';
import { DashboardOrganizationImpactVerificationSetupBaseComponent } from '../dashboard-organization-impact-verification-setup-base/dashboard-organization-impact-verification-setup-base.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DashboardOrganizationImpactVerificationSetupSurveyComponent } from '../dashboard-organization-impact-verification-setup-survey/dashboard-organization-impact-verification-setup-survey.component';

const routes = [
  {
    path: '',
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
    NgxGpAutocompleteModule,
    RouterModule.forChild(routes),
    InputSwitchModule,
  ],
  providers: [
    {
      provide: Loader,
      useValue: new Loader({
        apiKey: environment.googlePlaceAPI || '',
        libraries: ['places'],
      }),
    },
  ],
})
export class DashboardOrganizationImpactVerificationSetupModule {}
