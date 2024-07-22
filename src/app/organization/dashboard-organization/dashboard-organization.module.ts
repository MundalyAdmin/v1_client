import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { SharedPublicModule } from '../../public/shared-public/shared-public.module';
import { SharedModule } from '../../shared/shared.module';
import { DashboardOrganizationBenchmarkAndDeriskComponent } from './dashboard-organization-benchmark-and-derisk/dashboard-organization-benchmark-and-derisk.component';
import { DashboardOrganizationBenchmarkComponent } from './dashboard-organization-benchmark/dashboard-organization-benchmark.component';
import { DashboardOrganizationBreakdownComponent } from './dashboard-organization-breakdown/dashboard-organization-breakdown.component';
import { DashboardOrganizationComingSoonComponent } from './dashboard-organization-coming-soon/dashboard-organization-coming-soon.component';
import { DashboardOrganizationCommunityPerceptionComponent } from './dashboard-organization-community-perception/dashboard-organization-community-perception.component';
import { DashboardOrganizationCommunityNeedsComponent } from './dashboard-organization-community/dashboard-organization-community-needs/dashboard-organization-community-needs.component';
import { DashboardOrganizationCommunityComponent } from './dashboard-organization-community/dashboard-organization-community.component';
import { DashboardOrganizationDemographicsComponent } from './dashboard-organization-community/dashboard-organization-demographics/dashboard-organization-demographics.component';
import { DashboardOrganizationImpactPartnersComponent } from './dashboard-organization-community/dashboard-organization-impact-partners/dashboard-organization-impact-partners.component';
import { DashboardOrganizationRoiCalculatorComponent } from './dashboard-organization-community/dashboard-organization-roi-calculator/dashboard-organization-roi-calculator.component';
import { DashboardOrganizationCompleteRegistrationComponent } from './dashboard-organization-complete-registration/dashboard-organization-complete-registration.component';
import { DashboardOrganizationCreditOrdersComponent } from './dashboard-organization-credit-orders/dashboard-organization-credit-orders.component';
import { DashboardOrganizationCreditReportsComponent } from './dashboard-organization-credit-reports/dashboard-organization-credit-reports.component';
import { DashboardOrganizationCreditComponent } from './dashboard-organization-credit/dashboard-organization-credit.component';
import { DashboardOrganizationDetailsComponent } from './dashboard-organization-details/dashboard-organization-details.component';
import { DashboardOrganizationFacilitationStrategyComponent } from './dashboard-organization-facilitation-strategy/dashboard-organization-facilitation-strategy.component';
import { DashboardOrganizationHistoryComponent } from './dashboard-organization-history/dashboard-organization-history.component';
import { DashboardOrganizationHomeComponent } from './dashboard-organization-home/dashboard-organization-home.component';
import { DashboardOrganizationImpactFidelityComponent } from './dashboard-organization-impact-fidelity/dashboard-organization-impact-fidelity.component';
import { DashboardOrganizationImpactOutcomesComponent } from './dashboard-organization-impact-outcomes/dashboard-organization-impact-outcomes.component';
import { DashboardOrganizationAccessComponent } from './dashboard-organization-impact/dashboard-organization-access/dashboard-organization-access.component';
import { DashboardOrganizationForecastComponent } from './dashboard-organization-impact/dashboard-organization-forecast/dashboard-organization-forecast.component';
import { DashboardOrganizationImpactComponent } from './dashboard-organization-impact/dashboard-organization-impact.component';
import { DashboardOrganizationVerifyComponent } from './dashboard-organization-impact/dashboard-organization-verify/dashboard-organization-verify.component';
import { DashboardOrganizationLeaderboardComponent } from './dashboard-organization-leaderboard/dashboard-organization-leaderboard.component';
import { DashboardOrganizationOverviewComponent } from './dashboard-organization-overview/dashboard-organization-overview.component';
import { DashboardOrganizationInvestorsComponent } from './dashboard-organization-regulators-and-investors/dashboard-organization-investors/dashboard-organization-investors.component';
import { DashboardOrganizationRegulatorsAndInvestorsComponent } from './dashboard-organization-regulators-and-investors/dashboard-organization-regulators-and-investors.component';
import { DashboardOrganizationRegulatorsComponent } from './dashboard-organization-regulators-and-investors/dashboard-organization-regulators/dashboard-organization-regulators.component';
import { DashboardOrganizationSidebarComponent } from './dashboard-organization-sidebar/dashboard-organization-sidebar.component';
import { DashboardOrganizationUploadReportsComponent } from './dashboard-organization-upload-reports/dashboard-organization-upload-reports.component';
import { DashboardOrganizationComponent } from './dashboard-organization.component';
import { ImpactPartnerModule } from './impact-partner/impact-partner.module';
import { SurveyFormListComponent } from './survey-form/survey-form-list/survey-form-list.component';
import { SurveyFormShowComponent } from './survey-form/survey-form-show/survey-form-show.component';
import { SurveyFormModule } from './survey-form/survey-form.module';
import { ChartModule } from 'primeng/chart';
import { ImpactPartnerListComponent } from './impact-partner/impact-partner-list/impact-partner-list.component';
import { DashboardOrganizationPortfolioComponent } from './dashboard-organization-portfolio/dashboard-organization-portfolio.component';
import { DashboardOrganizationInsightsComponent } from './dashboard-organization-insights/dashboard-organization-insights.component';
import { DashboardOrganizationReportsComponent } from './dashboard-organization-reports/dashboard-organization-reports.component';
import { DashboardOrganizationInsightsScalesTrendComponent } from './dashboard-organization-insights/dashboard-organization-insights-scales-trend/dashboard-organization-insights-scales-trend.component';
import { DashboardOrganizationInsightsScaleScoreComponent } from './dashboard-organization-insights/dashboard-organization-insights-scale-score/dashboard-organization-insights-scale-score.component';
import { DashboardOrganizationInsightsImpactFidelityTrendComponent } from './dashboard-organization-insights/dashboard-organization-insights-impact-fidelity-trend/dashboard-organization-insights-impact-fidelity-trend.component';
import { DashboardOrganizationInsightsImpactFidelityTrendDataComponent } from './dashboard-organization-insights/dashboard-organization-insights-impact-fidelity-trend-data/dashboard-organization-insights-impact-fidelity-trend-data.component';
import { DashboardOrganizationInsightsCommunityReputationTrendComponent } from './dashboard-organization-insights/dashboard-organization-insights-community-reputation-trend/dashboard-organization-insights-community-reputation-trend.component';
import { DashboardOrganizationInsightsNetPromoterScoreComponent } from './dashboard-organization-insights/dashboard-organization-insights-net-promoter-score/dashboard-organization-insights-net-promoter-score.component';
import { DashboardOrganizationInsightsScalesScoreComponent } from './dashboard-organization-insights/dashboard-organization-insights-scales-score/dashboard-organization-insights-scales-score.component';
import { DashboardOrganizationSidebarMenuImpactComponent } from './dashboard-organization-sidebar/dashboard-organization-sidebar-menu-impact/dashboard-organization-sidebar-menu-impact.component';
import { DashboardOrganizationSidebarMenuCorporateComponent } from './dashboard-organization-sidebar/dashboard-organization-sidebar-menu-corporate/dashboard-organization-sidebar-menu-corporate.component';
import { DashboardOrganizationImpactInitiativeComponent } from './dashboard-organization-impact-initiative/dashboard-organization-impact-initiative.component';
import { DashboardOrganizationImpactInitativeListComponent } from './dashboard-organization-impact-initiative/dashboard-organization-impact-initative-list/dashboard-organization-impact-initative-list.component';
import { DashboardOrganizationImpactInitiativeDetailsComponent } from './dashboard-organization-impact-initiative-details/dashboard-organization-impact-initiative-details.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { DashboardOrganizationCompleteRegistrationPasswordComponent } from './dashboard-organization-complete-registration/dashboard-organization-complete-registration-password/dashboard-organization-complete-registration-password.component';
import { DashboardOrganizationCompleteRegistrationInfoComponent } from './dashboard-organization-complete-registration/dashboard-organization-complete-registration-info/dashboard-organization-complete-registration-info.component';
import { DashboardOrganizationCompleteRegistrationDetailsComponent } from './dashboard-organization-complete-registration/dashboard-organization-complete-registration-details/dashboard-organization-complete-registration-details.component';
import { DashboardOrganizationPartnersComponent } from './dashboard-organization-partners/dashboard-organization-partners.component';
import { DashboardOrganizationHeaderComponent } from './dashboard-organization-header/dashboard-organization-header.component';
import { DashboardOrganizationPartnerInvitationComponent } from './dashboard-organization-partner-invitation/dashboard-organization-partner-invitation.component';
import { OrganizationPartnerInvitationModule } from '../organization-partner-invitation/organization-partner-invitation.module';
import { DashboardOrganizationDueDiligenceRequestComponent } from './dashboard-organization-due-diligence-request/dashboard-organization-due-diligence-request.component';
import { DashboardOrganizationImpactVerificationComponent } from './dashboard-organization-impact-verification/dashboard-organization-impact-verification.component';
import { DashboardOrganizationImpactVerificationRequestedComponent } from './dashboard-organization-impact-verification/dashboard-organization-impact-verification-requested/dashboard-organization-impact-verification-requested.component';
import { DashboardOrganizationImpactVerificationReceivedComponent } from './dashboard-organization-impact-verification/dashboard-organization-impact-verification-received/dashboard-organization-impact-verification-received.component';
import { ImpactVerificationModule } from '../../impact-verification/impact-verification.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardOrganizationComponent,
    children: [
      // {
      //   path: 'home',
      //   component: DashboardOrganizationHomeComponent,
      //   children: [
      //     {
      //       path: 'portfolio',
      //       component: DashboardOrganizationPortfolioComponent,
      //     },
      //     {
      //       path: '**',
      //       redirectTo: 'portfolio',
      //     },
      //   ],
      // },
      // {
      //   path: 'partners',
      //   component: DashboardOrganizationPartnersComponent,
      //   children: [
      //     {
      //       path: '',
      //       component: DashboardOrganizationImpactPartnersComponent,
      //     },
      //     {
      //       path: 'invitations',
      //       component: DashboardOrganizationPartnerInvitationComponent,
      //     },
      //   ],
      // },
      // {
      //   path: 'initiatives',
      //   component: DashboardOrganizationImpactInitiativeComponent,
      // },
      {
        path: 'home',
        component: DashboardOrganizationHomeComponent,
        children: [
          {
            path: 'partners',
            component: DashboardOrganizationImpactPartnersComponent,
          },

          {
            path: 'invitations',
            component: DashboardOrganizationPartnerInvitationComponent,
          },
          {
            path: 'programs',
            component: DashboardOrganizationImpactInitiativeComponent,
          },
          {
            path: 'portfolio',
            component: DashboardOrganizationPortfolioComponent,
          },
          {
            path: '**',
            redirectTo: 'programs',
          },
        ],
      },
      {
        path: 'verification-requests',
        component: DashboardOrganizationImpactVerificationComponent,
        children: [
          {
            path: 'requested',
            component:
              DashboardOrganizationImpactVerificationRequestedComponent,
          },
          {
            path: 'received',
            component: DashboardOrganizationImpactVerificationReceivedComponent,
          },
        ],
      },
      {
        path: 'impact-verification',
        loadChildren: () =>
          import(
            './dashboard-organization-impact-verification-setup/dashboard-organization-impact-verification-setup.module'
          ).then((m) => m.DashboardOrganizationImpactVerificationSetupModule),
      },
      {
        path: 'setupreport',
        loadChildren: () =>
          import('../../setup/setup.module').then((m) => m.SetupModule),
      },
      {
        path: 'organizations/:id/surveys/:id',
        component: SurveyFormShowComponent,
      },
      {
        path: 'organizations/:id',
        component: DashboardOrganizationDetailsComponent,
        children: [
          {
            path: 'overview',
            component: DashboardOrganizationOverviewComponent,
            children: [
              {
                path: 'fundability',
                component: DashboardOrganizationForecastComponent,
              },
              {
                path: 'community-needs',
                component: DashboardOrganizationCommunityNeedsComponent,
              },
              {
                path: '**',
                redirectTo: 'fundability',
              },
            ],
          },
          {
            path: 'breakdown',
            component: DashboardOrganizationBreakdownComponent,
            children: [
              {
                path: 'impact-fidelity',
                component: DashboardOrganizationImpactFidelityComponent,
              },
              {
                path: 'community-perception',
                component: DashboardOrganizationCommunityPerceptionComponent,
              },
              {
                path: 'facilitation-strategy',
                component: DashboardOrganizationFacilitationStrategyComponent,
              },
              {
                path: '**',
                redirectTo: 'impact-fidelity',
              },
            ],
          },
          {
            path: 'surveys',
            component: SurveyFormListComponent,
          },
          {
            path: 'insights',
            component: DashboardOrganizationInsightsComponent,
          },
          {
            path: 'reports',
            component: DashboardOrganizationReportsComponent,
          },

          {
            path: '**',
            redirectTo: 'overview',
          },
        ],
      },
      {
        path: 'initiatives/:id',
        component: DashboardOrganizationImpactInitiativeDetailsComponent,
        children: [
          {
            path: 'overview',
            component: DashboardOrganizationOverviewComponent,
            children: [
              {
                path: 'fundability',
                component: DashboardOrganizationForecastComponent,
              },
              {
                path: 'community-needs',
                component: DashboardOrganizationCommunityNeedsComponent,
              },
              {
                path: '**',
                redirectTo: 'fundability',
              },
            ],
          },
          {
            path: 'breakdown',
            component: DashboardOrganizationBreakdownComponent,
            children: [
              {
                path: 'impact-fidelity',
                component: DashboardOrganizationImpactFidelityComponent,
              },
              {
                path: 'community-perception',
                component: DashboardOrganizationCommunityPerceptionComponent,
              },
              {
                path: 'facilitation-strategy',
                component: DashboardOrganizationFacilitationStrategyComponent,
              },
              {
                path: '**',
                redirectTo: 'impact-fidelity',
              },
            ],
          },
          {
            path: 'surveys',
            component: SurveyFormListComponent,
          },
          {
            path: 'insights',
            component: DashboardOrganizationInsightsComponent,
          },
          {
            path: 'reports',
            component: DashboardOrganizationReportsComponent,
          },

          {
            path: '**',
            redirectTo: 'overview',
          },
        ],
      },

      {
        path: '**',
        redirectTo: 'home',
      },
      // {
      //   path: 'community',
      //   canActivate: [funderAuthorizationGuard],
      //   component: DashboardOrganizationCommunityComponent,
      //   children: [
      //     {
      //       path: 'demographics',
      //       component: DashboardOrganizationDemographicsComponent,
      //     },
      //     {
      //       path: 'social-issues',
      //       component: DashboardOrganizationSocialIssuesComponent,
      //     },
      //     {
      //       path: 'impact-partners',
      //       component: DashboardOrganizationImpactPartnersComponent,
      //     },

      //     {
      //       path: 'roi-calculator',
      //       component: DashboardOrganizationRoiCalculatorComponent,
      //     },
      //     {
      //       path: '**',
      //       redirectTo: 'demographics',
      //       pathMatch: 'full',
      //     },
      //   ],
      // },
      // {
      //   path: 'impact',
      //   canActivate: [funderAuthorizationGuard],
      //   component: DashboardOrganizationImpactComponent,
      //   children: [
      //     {
      //       path: 'forecast',
      //       component: DashboardOrganizationForecastComponent,
      //     },
      //     {
      //       path: 'access',
      //       component: DashboardOrganizationAccessComponent,
      //     },
      //     {
      //       path: 'verify',
      //       component: DashboardOrganizationVerifyComponent,
      //     },
      //     {
      //       path: '**',
      //       redirectTo: 'forecast',
      //       pathMatch: 'full',
      //     },
      //   ],
      // },
      // {
      //   path: 'benchmark',
      //   component: DashboardOrganizationBenchmarkAndDeriskComponent,
      //   children: [
      //     {
      //       path: 'leaderboard',
      //       component: DashboardOrganizationLeaderboardComponent,
      //     },
      //     {
      //       path: 'community-perception',
      //       component: DashboardOrganizationLeaderboardComponent,
      //     },
      //     {
      //       path: '**',
      //       redirectTo: 'leaderboard',
      //       pathMatch: 'full',
      //     },
      //   ],
      // },
      // {
      //   path: 'regulators-and-investors',
      //   component: DashboardOrganizationRegulatorsAndInvestorsComponent,
      //   children: [
      //     {
      //       path: 'esg-and-impact-reports',
      //       component: DashboardOrganizationRegulatorsComponent,
      //     },
      //     {
      //       path: 'investor-reports',
      //       component: DashboardOrganizationInvestorsComponent,
      //     },
      //     {
      //       path: '**',
      //       redirectTo: 'esg-and-impact-reports',
      //       pathMatch: 'full',
      //     },
      //   ],
      // },
      // {
      //   path: 'history',
      //   component: DashboardOrganizationHistoryComponent,
      // },
      // {
      //   path: 'documents',
      //   component: DashboardOrganizationCreditComponent,
      //   children: [
      //     {
      //       path: 'reports',
      //       component: DashboardOrganizationCreditReportsComponent,
      //     },
      //     {
      //       path: 'orders',
      //       component: DashboardOrganizationCreditOrdersComponent,
      //     },
      //     {
      //       path: '',
      //       redirectTo: 'reports',
      //       pathMatch: 'full',
      //     },
      //   ],
      // },
      // {
      //   path: 'report-outcomes',
      //   component: DashboardOrganizationBenchmarkComponent,
      //   canActivate: [implementerAuthorizationGuard],
      //   children: [
      //     {
      //       path: 'self-assessment',
      //       loadChildren: () =>
      //         import('../../initiatives/initiatives.module').then(
      //           (m) => m.InitiativesModule
      //         ),
      //     },
      //     {
      //       path: 'impact-outcomes',
      //       component: DashboardOrganizationImpactOutcomesComponent,
      //     },
      //     {
      //       path: '**',
      //       redirectTo: 'self-assessment',
      //       pathMatch: 'full',
      //     },
      //   ],
      // },
    ],
  },
];

@NgModule({
  declarations: [
    DashboardOrganizationComponent,
    DashboardOrganizationCommunityComponent,
    DashboardOrganizationImpactComponent,
    DashboardOrganizationBenchmarkComponent,
    DashboardOrganizationImpactOutcomesComponent,
    DashboardOrganizationCreditComponent,
    DashboardOrganizationCreditReportsComponent,
    DashboardOrganizationCreditOrdersComponent,
    DashboardOrganizationHistoryComponent,
    DashboardOrganizationDemographicsComponent,
    DashboardOrganizationCommunityNeedsComponent,
    DashboardOrganizationImpactPartnersComponent,
    DashboardOrganizationComingSoonComponent,
    DashboardOrganizationRoiCalculatorComponent,
    DashboardOrganizationForecastComponent,
    DashboardOrganizationAccessComponent,
    DashboardOrganizationVerifyComponent,
    DashboardOrganizationBenchmarkAndDeriskComponent,
    DashboardOrganizationLeaderboardComponent,
    DashboardOrganizationCommunityPerceptionComponent,
    DashboardOrganizationRegulatorsAndInvestorsComponent,
    DashboardOrganizationRegulatorsComponent,
    DashboardOrganizationInvestorsComponent,
    DashboardOrganizationCompleteRegistrationComponent,
    DashboardOrganizationUploadReportsComponent,
    DashboardOrganizationSidebarComponent,
    DashboardOrganizationHomeComponent,
    DashboardOrganizationDetailsComponent,
    DashboardOrganizationOverviewComponent,
    DashboardOrganizationBreakdownComponent,
    DashboardOrganizationImpactFidelityComponent,
    DashboardOrganizationFacilitationStrategyComponent,
    DashboardOrganizationInsightsComponent,
    DashboardOrganizationReportsComponent,
    DashboardOrganizationInsightsScalesTrendComponent,
    DashboardOrganizationInsightsScaleScoreComponent,
    DashboardOrganizationInsightsImpactFidelityTrendComponent,
    DashboardOrganizationInsightsImpactFidelityTrendDataComponent,
    DashboardOrganizationInsightsCommunityReputationTrendComponent,
    DashboardOrganizationInsightsNetPromoterScoreComponent,
    DashboardOrganizationInsightsScalesScoreComponent,
    DashboardOrganizationSidebarMenuImpactComponent,
    DashboardOrganizationSidebarMenuCorporateComponent,
    DashboardOrganizationImpactInitiativeComponent,
    DashboardOrganizationImpactInitativeListComponent,
    DashboardOrganizationImpactInitiativeDetailsComponent,
    DashboardOrganizationCompleteRegistrationPasswordComponent,
    DashboardOrganizationCompleteRegistrationInfoComponent,
    DashboardOrganizationCompleteRegistrationDetailsComponent,
    DashboardOrganizationPartnersComponent,
    DashboardOrganizationHeaderComponent,
    DashboardOrganizationPartnerInvitationComponent,
    DashboardOrganizationDueDiligenceRequestComponent,
    DashboardOrganizationImpactVerificationComponent,
    DashboardOrganizationImpactVerificationRequestedComponent,
    DashboardOrganizationImpactVerificationReceivedComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    SharedPublicModule,
    OverlayPanelModule,
    CarouselModule,
    DialogModule,
    CalendarModule,
    ImpactPartnerModule,
    SurveyFormModule,
    ChartModule,
    CalendarModule,
    MultiSelectModule,
    DropdownModule,
    InputTextareaModule,
    ScrollPanelModule,
    PasswordModule,
    OrganizationPartnerInvitationModule,
    PanelModule,
    ImpactVerificationModule,
  ],
})
export class DashboardOrganizationModule {}
