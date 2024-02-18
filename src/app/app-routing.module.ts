import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { ComingSoonComponent } from './shared/components/coming-soon/coming-soon.component';
import { AuthGuard } from './auth/auth.guard';

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
        path: 'coming-soon',
        component: ComingSoonComponent,
      },
      {
        path: 'initiatives',
        loadChildren: () =>
          import('./initiatives/initiatives.module').then((m) => m.InitiativesModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
