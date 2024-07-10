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

const routes = [
  {
    path: '',
    component: DashboardOrganizationImpactVerificationSetupComponent,
    children: [
      {
        path: 'communities',
        component:
          DashboardOrganizationImpactVerificationSetupCommunitiesComponent,
      },
      {
        path: 'participants',
        component:
          DashboardOrganizationImpactVerificationSetupParticipantComponent,
      },

      {
        path: 'launch',
        component: DashboardOrganizationImpactVerificationSetupLaunchComponent,
      },

      { path: '**', redirectTo: 'communities' },
    ],
  },
];

@NgModule({
  declarations: [
    DashboardOrganizationImpactVerificationSetupComponent,
    DashboardOrganizationImpactVerificationSetupCommunitiesComponent,
    DashboardOrganizationImpactVerificationSetupParticipantComponent,
    DashboardOrganizationImpactVerificationSetupLaunchComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SliderModule,
    NgxGpAutocompleteModule,
    RouterModule.forChild(routes),
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
