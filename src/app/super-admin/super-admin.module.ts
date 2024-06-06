import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminComponent } from './super-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SuperAdminSidebarComponent } from './super-admin-sidebar/super-admin-sidebar.component';
import { SuperAdminOrganizationListComponent } from './super-admin-organization/super-admin-organization-list/super-admin-organization-list.component';

const routes: Routes = [
  {
    path: '',
    component: SuperAdminComponent,
    children: [
      {
        path: '',
        component: SuperAdminOrganizationListComponent,
      },
      {
        path: 'organizations',
        loadChildren: () =>
          import(
            './super-admin-organization/super-admin-organization.module'
          ).then((module) => module.SuperAdminOrganizationModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./super-admin-settings/super-admin-settings.module').then(
            (module) => module.SuperAdminSettingsModule
          ),
      },
      {
        path: 'organization-waitlist',
        loadChildren: () =>
          import(
            './super-admin-organization-waitlist/super-admin-organization-waitlist.module'
          ).then((module) => module.SuperAdminOrganizationWaitlistModule),
      },
      {
        path: 'community-suggestion',
        loadChildren: () =>
          import(
            './super-admin-community-suggestion/super-admin-community-suggestion.module'
          ).then((module) => module.SuperAdminCommunitySuggestionModule),
      },

      {
        path: '',
        redirectTo: 'organizations',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [SuperAdminComponent, SuperAdminSidebarComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class SuperAdminModule {}
