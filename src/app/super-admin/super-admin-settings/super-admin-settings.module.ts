import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminSettingsComponent } from './super-admin-settings.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: SuperAdminSettingsComponent,
    children: [
      {
        path: 'type-organizations',
        loadChildren: () =>
          import(
            './settings-type-organization/settings-type-organization.module'
          ).then((module) => module.SettingsTypeOrganizationModule),
      },
      {
        path: 'sector-organizations',
        loadChildren: () =>
          import(
            './settings-sector-organization/settings-sector-organization.module'
          ).then((module) => module.SettingsSectorOrganizationModule),
      },
      {
        path: 'tag-organizations',
        loadChildren: () =>
          import(
            './settings-tag-organization/settings-tag-organization.module'
          ).then((module) => module.SettingsTagOrganizationModule),
      },

      {
        path: '**',
        redirectTo: 'type-organizations',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [SuperAdminSettingsComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class SuperAdminSettingsModule {}
