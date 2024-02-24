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

const routes: Routes = [
  {
    path: '',
    component: DashboardOrganizationComponent,
    children: [
      {
        path: 'community',
        component: DashboardOrganizationCommunityComponent,
      },
      {
        path: 'impact',
        component: DashboardOrganizationImpactComponent,
      },
      {
        path: 'history',
        component: DashboardOrganizationHistoryComponent,
      },
      {
        path: 'credit',
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
        path: 'benchmark',
        component: DashboardOrganizationBenchmarkComponent,
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
      {
        path: '',
        redirectTo: 'community',
        pathMatch: 'full',
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
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class DashboardOrganizationModule {}
