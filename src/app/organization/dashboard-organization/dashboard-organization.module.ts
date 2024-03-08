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

const routes: Routes = [
  {
    path: '',
    component: DashboardOrganizationComponent,
    children: [
      {
        path: 'community',
        canActivate: [funderAuthorizationGuard],
        component: DashboardOrganizationCommunityComponent,
      },
      {
        path: 'impact',
        canActivate: [funderAuthorizationGuard],
        component: DashboardOrganizationImpactComponent,
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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    SharedPublicModule,
  ],
})
export class DashboardOrganizationModule {}
