import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel';
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { OverlayPanelModule } from 'primeng/overlaypanel';
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
import { DashboardOrganizationImpactInitiativeDetailsComponent } from './dashboard-organization-impact-initiative-details/dashboard-organization-impact-initiative-details.component';
import { DashboardOrganizationImpactInitativeListComponent } from './dashboard-organization-impact-initiative/dashboard-organization-impact-initative-list/dashboard-organization-impact-initative-list.component';
import { DashboardOrganizationImpactInitiativeComponent } from './dashboard-organization-impact-initiative/dashboard-organization-impact-initiative.component';
import { DashboardOrganizationImpactOutcomesComponent } from './dashboard-organization-impact-outcomes/dashboard-organization-impact-outcomes.component';
import { DashboardOrganizationAccessComponent } from './dashboard-organization-impact/dashboard-organization-access/dashboard-organization-access.component';
import { DashboardOrganizationForecastComponent } from './dashboard-organization-impact/dashboard-organization-forecast/dashboard-organization-forecast.component';
import { DashboardOrganizationImpactComponent } from './dashboard-organization-impact/dashboard-organization-impact.component';
import { DashboardOrganizationVerifyComponent } from './dashboard-organization-impact/dashboard-organization-verify/dashboard-organization-verify.component';
import { DashboardOrganizationInsightsCommunityReputationTrendComponent } from './dashboard-organization-insights/dashboard-organization-insights-community-reputation-trend/dashboard-organization-insights-community-reputation-trend.component';
import { DashboardOrganizationInsightsImpactFidelityTrendComponent } from './dashboard-organization-insights/dashboard-organization-insights-impact-fidelity-trend/dashboard-organization-insights-impact-fidelity-trend.component';
import { DashboardOrganizationInsightsNetPromoterScoreComponent } from './dashboard-organization-insights/dashboard-organization-insights-net-promoter-score/dashboard-organization-insights-net-promoter-score.component';
import { DashboardOrganizationInsightsScaleScoreComponent } from './dashboard-organization-insights/dashboard-organization-insights-scale-score/dashboard-organization-insights-scale-score.component';
import { DashboardOrganizationInsightsScalesScoreComponent } from './dashboard-organization-insights/dashboard-organization-insights-scales-score/dashboard-organization-insights-scales-score.component';
import { DashboardOrganizationInsightsScalesTrendComponent } from './dashboard-organization-insights/dashboard-organization-insights-scales-trend/dashboard-organization-insights-scales-trend.component';
import { DashboardOrganizationInsightsComponent } from './dashboard-organization-insights/dashboard-organization-insights.component';
import { DashboardOrganizationLeaderboardComponent } from './dashboard-organization-leaderboard/dashboard-organization-leaderboard.component';
import { DashboardOrganizationOverviewComponent } from './dashboard-organization-overview/dashboard-organization-overview.component';
import { DashboardOrganizationInvestorsComponent } from './dashboard-organization-regulators-and-investors/dashboard-organization-investors/dashboard-organization-investors.component';
import { DashboardOrganizationRegulatorsAndInvestorsComponent } from './dashboard-organization-regulators-and-investors/dashboard-organization-regulators-and-investors.component';
import { DashboardOrganizationRegulatorsComponent } from './dashboard-organization-regulators-and-investors/dashboard-organization-regulators/dashboard-organization-regulators.component';
import { DashboardOrganizationReportsComponent } from './dashboard-organization-reports/dashboard-organization-reports.component';
import { DashboardOrganizationSidebarComponent } from './dashboard-organization-sidebar/dashboard-organization-sidebar.component';
import { DashboardOrganizationUploadReportsComponent } from './dashboard-organization-upload-reports/dashboard-organization-upload-reports.component';
import { DashboardOrganizationComponent } from './dashboard-organization.component';
import { ImpactPartnerModule } from './impact-partner/impact-partner.module';
import { SurveyFormListComponent } from './survey-form/survey-form-list/survey-form-list.component';
import { SurveyFormShowComponent } from './survey-form/survey-form-show/survey-form-show.component';
import { SurveyFormModule } from './survey-form/survey-form.module';

import { PanelModule } from 'primeng/panel';
import { PasswordModule } from 'primeng/password';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { OrganizationShowImpactStoriesComponent } from 'src/app/public/public-community/organization/organization-show/organization-show-overview/organization-show-impact-stories/organization-show-impact-stories.component';
import { ImpactVerificationModule } from '../../impact-verification/impact-verification.module';
import { OrganizationPartnerInvitationModule } from '../organization-partner-invitation/organization-partner-invitation.module';
import { DashboardOrganizationBaseScaleTrendComponent } from './dashboard-organization-base-scale-trend/dashboard-organization-base-scale-trend.component';
import { DashboardOrganizationBaseScaleComponent } from './dashboard-organization-base-scale/dashboard-organization-base-scale.component';
import { DashboardOrganizationCompleteRegistrationDetailsComponent } from './dashboard-organization-complete-registration/dashboard-organization-complete-registration-details/dashboard-organization-complete-registration-details.component';
import { DashboardOrganizationCompleteRegistrationInfoComponent } from './dashboard-organization-complete-registration/dashboard-organization-complete-registration-info/dashboard-organization-complete-registration-info.component';
import { DashboardOrganizationCompleteRegistrationPasswordComponent } from './dashboard-organization-complete-registration/dashboard-organization-complete-registration-password/dashboard-organization-complete-registration-password.component';
import { DashboardOrganizationDemographicsAgeRangeComponent } from './dashboard-organization-demographics-age-range/dashboard-organization-demographics-age-range.component';
import { DashboardOrganizationDemographicsEhtnicityComponent } from './dashboard-organization-demographics-ehtnicity/dashboard-organization-demographics-ehtnicity.component';
import { DashboardOrganizationDemographicsGenderComponent } from './dashboard-organization-demographics-gender/dashboard-organization-demographics-gender.component';
import { DashboardOrganizationDemographicsRelationshipStatusComponent } from './dashboard-organization-demographics-relationship-status/dashboard-organization-demographics-relationship-status.component';
import { DashboardOrganizationDueDiligenceOverviewSecondComponent } from './dashboard-organization-due-diligence-overview-second/dashboard-organization-due-diligence-overview-second.component';
import { DashboardOrganizationDueDiligenceRequestComponent } from './dashboard-organization-impact-verification-request/dashboard-organization-impact-verification-request.component';
import { DashboardOrganizationDueDiligenceComponent } from './dashboard-organization-due-diligence/dashboard-organization-due-diligence.component';
import { DashboardOrganizationEnvironmentalWellbeingComponent } from './dashboard-organization-environmental-wellbeing/dashboard-organization-environmental-wellbeing.component';
import { DashboardOrganizationHeaderComponent } from './dashboard-organization-header/dashboard-organization-header.component';
import { DashboardOrganizationImpactStoriesListComponent } from './dashboard-organization-impact-stories-list/dashboard-organization-impact-stories-list.component';
import { DashboardOrganizationImpactStoriesComponent } from './dashboard-organization-impact-stories/dashboard-organization-impact-stories.component';
import { DashboardOrganizationImpactVerificationReceivedComponent } from './dashboard-organization-impact-verification/dashboard-organization-impact-verification-received/dashboard-organization-impact-verification-received.component';
import { DashboardOrganizationImpactVerificationRequestedComponent } from './dashboard-organization-impact-verification/dashboard-organization-impact-verification-requested/dashboard-organization-impact-verification-requested.component';
import { DashboardOrganizationImpactVerificationComponent } from './dashboard-organization-impact-verification/dashboard-organization-impact-verification.component';
import { DashboardOrganizationInsightTrendDataComponent } from './dashboard-organization-insight-trend-data/dashboard-organization-insight-trend-data.component';
import { DashboardOrganizationOverviewFilterComponent } from './dashboard-organization-overview-filter/dashboard-organization-overview-filter.component';
import { DashboardOrganizationOverviewPortfolioOverallSnapshotComponent } from './dashboard-organization-overview-portfolio-overall-snapshot/dashboard-organization-overview-portfolio-overall-snapshot.component';
import { DashboardOrganizationOverviewPortfolioRiskComponent } from './dashboard-organization-overview-portfolio-risk/dashboard-organization-overview-portfolio-risk.component';
import { DashboardOrganizationPartnerInvitationComponent } from './dashboard-organization-partner-invitation/dashboard-organization-partner-invitation.component';
import { DashboardOrganizationPartnersComponent } from './dashboard-organization-partners/dashboard-organization-partners.component';
import { DashboardOrganizationPhysicalWellbeingComponent } from './dashboard-organization-physical-wellbeing/dashboard-organization-physical-wellbeing.component';
import { DashboardOrganizationPsychologicalWellbeingComponent } from './dashboard-organization-psychological-wellbeing/dashboard-organization-psychological-wellbeing.component';
import { DashboardOrganizationSocialWellbeingComponent } from './dashboard-organization-social-wellbeing/dashboard-organization-social-wellbeing.component';
import { DashboardOrganizationUnavailableInsightsComponent } from './dashboard-organization-unavailable-insights/dashboard-organization-unavailable-insights.component';
import { DashboardOrganizationWellbeingBreakdownComponent } from './dashboard-organization-wellbeing-breakdown/dashboard-organization-wellbeing-breakdown.component';
import { DashboardOrganizationWellbeingComponent } from './dashboard-organization-wellbeing/dashboard-organization-wellbeing.component';
import { DashboardOrganizationInsightsPhysicalWellbeingTrendComponent } from './wellbeing/dashboard-organization-insights-physical-wellbeing-trend/dashboard-organization-insights-physical-wellbeing-trend.component';
import { DashboardOrganizationInsightsPsychologicalWellbeingTrendComponent } from './wellbeing/dashboard-organization-insights-psychological-wellbeing-trend/dashboard-organization-insights-psychological-wellbeing-trend.component';
import { DashboardOrganizationInsightsWellbeingTrendComponent } from './wellbeing/dashboard-organization-insights-wellbeing-trend/dashboard-organization-insights-wellbeing-trend.component';
import { DashboardOrganizationWellbeingInsightsComponent } from './wellbeing/dashboard-organization-wellbeing-insights/dashboard-organization-wellbeing-insights.component';
import { DashboardOrganizationWellbeingOverviewSecondComponent } from './wellbeing/dashboard-organization-wellbeing-overview-second/dashboard-organization-wellbeing-overview-second.component';
import { DashboardOrganizationWellbeingOverviewComponent } from './wellbeing/dashboard-organization-wellbeing-overview/dashboard-organization-wellbeing-overview.component';
import { DashboardOrganizationWellbeingScoresComponent } from './wellbeing/dashboard-organization-wellbeing-scores/dashboard-organization-wellbeing-scores.component';
import { DashboardOrganizationWellbeingSummaryComponent } from './wellbeing/dashboard-organization-wellbeing-summary/dashboard-organization-wellbeing-summary.component';
import { DashboardOrganizationImpactPartnersAlignmentComponent } from './dashboard-organization-impact-partners-alignment/dashboard-organization-impact-partners-alignment.component';
import { DashboardOrganizationImpactPartnersWellbeingComponent } from './dashboard-organization-impact-partners-wellbeing/dashboard-organization-impact-partners-wellbeing.component';
import { DashboardOrganizationReportsCreateComponent } from './dashboard-organization-reports-create/dashboard-organization-reports-create.component';

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
        path: 'overview',
        component: DashboardOrganizationHomeComponent,
        children: [
          {
            path: 'alignment',
            component: DashboardOrganizationDueDiligenceOverviewSecondComponent,
          },
          {
            path: 'quality-of-life',
            component: DashboardOrganizationWellbeingOverviewSecondComponent,
          },
          {
            path: 'invitations',
            component: DashboardOrganizationPartnerInvitationComponent,
          },

          {
            path: '**',
            redirectTo: 'alignment',
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
      // {
      //   path: 'setupreport',
      //   loadChildren: () =>
      //     import('../../setup/setup.module').then((m) => m.SetupModule),
      // },
      {
        path: 'organizations/:id/surveys/:id',
        component: SurveyFormShowComponent,
      },
      // Alignment
      {
        path: 'alignment',
        component: DashboardOrganizationDueDiligenceComponent,
        children: [
          {
            path: 'partners',
            component: DashboardOrganizationImpactPartnersAlignmentComponent,
          },
          {
            path: 'community-needs',
            component: DashboardOrganizationCommunityNeedsComponent,
          },
          {
            path: 'stories',
            component: DashboardOrganizationImpactStoriesComponent,
            children: [
              {
                path: ':id',
                component: DashboardOrganizationImpactStoriesListComponent,
              },
              {
                path: '**',
                redirectTo: 'verified',
                pathMatch: 'full',
              },
            ],
          },
          {
            path: '',
            redirectTo: 'partners',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'alignment/partners/:id',
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
      // Wellbeing
      {
        path: 'quality-of-life',
        component: DashboardOrganizationWellbeingComponent,
        children: [
          {
            path: 'partners',
            component: DashboardOrganizationImpactPartnersWellbeingComponent,
          },
          {
            path: 'stories',
            component: DashboardOrganizationImpactStoriesComponent,
            children: [
              {
                path: ':id',
                component: DashboardOrganizationImpactStoriesListComponent,
              },
              {
                path: '**',
                redirectTo: 'verified',
                pathMatch: 'full',
              },
            ],
          },
          {
            path: '',
            redirectTo: 'partners',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'quality-of-life/partners/:id',
        component: DashboardOrganizationDetailsComponent,
        children: [
          {
            path: 'overview',
            component: DashboardOrganizationWellbeingOverviewComponent,
            children: [
              {
                path: 'summary',
                component: DashboardOrganizationWellbeingSummaryComponent,
              },

              {
                path: '**',
                redirectTo: 'summary',
              },
            ],
          },

          {
            path: 'breakdown',
            component: DashboardOrganizationWellbeingBreakdownComponent,
            children: [
              {
                path: 'physical',
                component: DashboardOrganizationPhysicalWellbeingComponent,
              },
              {
                path: 'psychological',
                component: DashboardOrganizationPsychologicalWellbeingComponent,
              },
              {
                path: 'social',
                component: DashboardOrganizationSocialWellbeingComponent,
              },

              {
                path: 'environmental',
                component: DashboardOrganizationEnvironmentalWellbeingComponent,
              },
              {
                path: '**',
                redirectTo: 'physical',
              },
            ],
          },

          {
            path: 'surveys',
            component: SurveyFormListComponent,
          },
          {
            path: 'insights',
            component: DashboardOrganizationWellbeingInsightsComponent,
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
        redirectTo: 'overview',
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
    DashboardOrganizationInsightsCommunityReputationTrendComponent,
    DashboardOrganizationInsightsNetPromoterScoreComponent,
    DashboardOrganizationInsightsScalesScoreComponent,
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
    DashboardOrganizationUnavailableInsightsComponent,
    DashboardOrganizationDueDiligenceComponent,
    DashboardOrganizationWellbeingComponent,
    DashboardOrganizationImpactStoriesComponent,
    DashboardOrganizationWellbeingOverviewComponent,
    DashboardOrganizationWellbeingSummaryComponent,
    DashboardOrganizationWellbeingInsightsComponent,
    DashboardOrganizationWellbeingScoresComponent,
    DashboardOrganizationInsightsPhysicalWellbeingTrendComponent,
    DashboardOrganizationInsightsPsychologicalWellbeingTrendComponent,
    DashboardOrganizationInsightsWellbeingTrendComponent,
    DashboardOrganizationDueDiligenceOverviewSecondComponent,
    DashboardOrganizationWellbeingOverviewSecondComponent,
    DashboardOrganizationBaseScaleComponent,
    DashboardOrganizationWellbeingBreakdownComponent,
    DashboardOrganizationPhysicalWellbeingComponent,
    DashboardOrganizationPsychologicalWellbeingComponent,
    DashboardOrganizationEnvironmentalWellbeingComponent,
    DashboardOrganizationSocialWellbeingComponent,
    DashboardOrganizationBaseScaleTrendComponent,
    DashboardOrganizationInsightTrendDataComponent,
    DashboardOrganizationOverviewPortfolioRiskComponent,
    DashboardOrganizationOverviewPortfolioOverallSnapshotComponent,
    DashboardOrganizationDemographicsGenderComponent,
    DashboardOrganizationDemographicsAgeRangeComponent,
    DashboardOrganizationDemographicsEhtnicityComponent,
    DashboardOrganizationDemographicsRelationshipStatusComponent,
    OrganizationShowImpactStoriesComponent,
    DashboardOrganizationImpactStoriesListComponent,
    DashboardOrganizationOverviewFilterComponent,
    DashboardOrganizationImpactPartnersAlignmentComponent,
    DashboardOrganizationImpactPartnersWellbeingComponent,
    DashboardOrganizationReportsCreateComponent,
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
