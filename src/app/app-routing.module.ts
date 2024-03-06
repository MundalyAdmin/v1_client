import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { ComingSoonComponent } from './shared/components/coming-soon/coming-soon.component';
import { AuthGuard } from './auth/auth.guard';
import { TempDashboardComponent } from './cart/temp-dashboard/temp-dashboard.component';
import { GeneratingReportComponent } from './generating-report/generating-report.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./public/public.module').then((m) => m.PublicModule),
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'super-admin',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./super-admin/super-admin.module').then(
            (m) => m.SuperAdminModule
          ),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import(
            './organization/dashboard-organization/dashboard-organization.module'
          ).then((m) => m.DashboardOrganizationModule),
      },
      {
        path: 'coming-soon',
        component: ComingSoonComponent,
      },
      {
        path: 'dash',
        component: TempDashboardComponent,
      },
      {
        path: 'report-generating',
        component: GeneratingReportComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
