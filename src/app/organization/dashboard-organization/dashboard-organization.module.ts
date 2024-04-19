import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardOrganizationComponent } from './dashboard-organization.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { DashboardOrganizationCommunityComponent } from './dashboard-organization-community/dashboard-organization-community.component';
import { DashboardOrganizationImpactComponent } from './dashboard-organization-impact/dashboard-organization-impact.component';
import { DashboardOrganizationBenchmarkComponent } from './dashboard-organization-benchmark/dashboard-organization-benchmark.component';
import { DashboardOrganizationSwotComponent } from './dashboard-organization-swot/dashboard-organization-swot.component';
import { DashboardOrganizationCreditComponent } from './dashboard-organization-credit/dashboard-organization-credit.component';
import { DashboardOrganizationCreditReportsComponent } from './dashboard-organization-credit-reports/dashboard-organization-credit-reports.component';
import { DashboardOrganizationCreditOrdersComponent } from './dashboard-organization-credit-orders/dashboard-organization-credit-orders.component';
import { DashboardOrganizationHistoryComponent } from './dashboard-organization-history/dashboard-organization-history.component';
import { implementerAuthorizationGuard } from '../../auth/guards/implementer-authorization.guard';
import { funderAuthorizationGuard } from '../../auth/guards/funder-authorization.guard';
import { SharedPublicModule } from '../../public/shared-public/shared-public.module';
import { DashboardOrganizationDemographicsComponent } from './dashboard-organization-community/dashboard-organization-demographics/dashboard-organization-demographics.component';
import { DashboardOrganizationSocialIssuesComponent } from './dashboard-organization-community/dashboard-organization-social-issues/dashboard-organization-social-issues.component';
import { DashboardOrganizationImpactPartnersComponent } from './dashboard-organization-community/dashboard-organization-impact-partners/dashboard-organization-impact-partners.component';
import { DashboardOrganizationComingSoonComponent } from './dashboard-organization-coming-soon/dashboard-organization-coming-soon.component';
import { DashboardOrganizationRoiCalculatorComponent } from './dashboard-organization-community/dashboard-organization-roi-calculator/dashboard-organization-roi-calculator.component';
import { DashboardOrganizationForecastComponent } from './dashboard-organization-impact/dashboard-organization-forecast/dashboard-organization-forecast.component';
import { DashboardOrganizationAccessComponent } from './dashboard-organization-impact/dashboard-organization-access/dashboard-organization-access.component';
import { DashboardOrganizationVerifyComponent } from './dashboard-organization-impact/dashboard-organization-verify/dashboard-organization-verify.component';
import { DashboardOrganizationBenchmarkAndDeriskComponent } from './dashboard-organization-benchmark-and-derisk/dashboard-organization-benchmark-and-derisk.component';
import { DashboardOrganizationLeaderboardComponent } from './dashboard-organization-leaderboard/dashboard-organization-leaderboard.component';
import { DashboardOrganizationCommunityPerceptionComponent } from './dashboard-organization-community-perception/dashboard-organization-community-perception.component';
import { DashboardOrganizationRegulatorsAndInvestorsComponent } from './dashboard-organization-regulators-and-investors/dashboard-organization-regulators-and-investors.component';
import { DashboardOrganizationRegulatorsComponent } from './dashboard-organization-regulators-and-investors/dashboard-organization-regulators/dashboard-organization-regulators.component';
import { DashboardOrganizationInvestorsComponent } from './dashboard-organization-regulators-and-investors/dashboard-organization-investors/dashboard-organization-investors.component';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { ImpactPartnerModule } from './impact-partner/impact-partner.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardOrganizationComponent,
    children: [
      {
        path: 'community',
        canActivate: [funderAuthorizationGuard],
        component: DashboardOrganizationCommunityComponent,
        children: [
          {
            path: 'demographics',
            component: DashboardOrganizationDemographicsComponent,
          },
          {
            path: 'social-issues',
            component: DashboardOrganizationSocialIssuesComponent,
          },
          {
            path: 'impact-partners',
            component: DashboardOrganizationImpactPartnersComponent,
          },

          {
            path: 'roi-calculator',
            component: DashboardOrganizationRoiCalculatorComponent,
          },
          {
            path: '**',
            redirectTo: 'demographics',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'impact',
        canActivate: [funderAuthorizationGuard],
        component: DashboardOrganizationImpactComponent,
        children: [
          {
            path: 'forecast',
            component: DashboardOrganizationForecastComponent,
          },
          {
            path: 'access',
            component: DashboardOrganizationAccessComponent,
          },
          {
            path: 'verify',
            component: DashboardOrganizationVerifyComponent,
          },
          {
            path: '**',
            redirectTo: 'forecast',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'benchmark',
        component: DashboardOrganizationBenchmarkAndDeriskComponent,
        children: [
          {
            path: 'leaderboard',
            component: DashboardOrganizationLeaderboardComponent,
          },
          {
            path: 'community-perception',
            component: DashboardOrganizationLeaderboardComponent,
          },
          {
            path: '**',
            redirectTo: 'leaderboard',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'regulators-and-investors',
        component: DashboardOrganizationRegulatorsAndInvestorsComponent,
        children: [
          {
            path: 'esg-and-impact-reports',
            component: DashboardOrganizationRegulatorsComponent,
          },
          {
            path: 'investor-reports',
            component: DashboardOrganizationInvestorsComponent,
          },
          {
            path: '**',
            redirectTo: 'esg-and-impact-reports',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'history',
        component: DashboardOrganizationHistoryComponent,
      },
      {
        path: 'documents',
        component: DashboardOrganizationCreditComponent,
        children: [
          {
            path: 'reports',
            component: DashboardOrganizationCreditReportsComponent,
          },
          {
            path: 'orders',
            component: DashboardOrganizationCreditOrdersComponent,
          },
          {
            path: '',
            redirectTo: 'reports',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'report-outcomes',
        component: DashboardOrganizationBenchmarkComponent,
        canActivate: [implementerAuthorizationGuard],
        children: [
          {
            path: 'self-assessment',
            loadChildren: () =>
              import('../../initiatives/initiatives.module').then(
                (m) => m.InitiativesModule
              ),
          },
          {
            path: 'swot-analysis',
            component: DashboardOrganizationSwotComponent,
          },
          {
            path: '**',
            redirectTo: 'self-assessment',
          },
        ],
      },
    ],
  },
];

@NgModule({
  declarations: [
    DashboardOrganizationComponent,
    DashboardOrganizationCommunityComponent,
    DashboardOrganizationImpactComponent,
    DashboardOrganizationBenchmarkComponent,
    DashboardOrganizationSwotComponent,
    DashboardOrganizationCreditComponent,
    DashboardOrganizationCreditReportsComponent,
    DashboardOrganizationCreditOrdersComponent,
    DashboardOrganizationHistoryComponent,
    DashboardOrganizationDemographicsComponent,
    DashboardOrganizationSocialIssuesComponent,
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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    SharedPublicModule,
    CarouselModule,
    DialogModule,
    ImpactPartnerModule,
  ],
})
export class DashboardOrganizationModule {}
