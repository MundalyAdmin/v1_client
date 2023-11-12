import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsSectorOrganizationComponent } from './settings-sector-organization.component';
import { SettingsSectorOrganizationListComponent } from './settings-sector-organization-list/settings-sector-organization-list.component';
import { SettingsSectorOrganizationCreateComponent } from './settings-sector-organization-create/settings-sector-organization-create.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { SettingsSectorOrganizationEditComponent } from './settings-sector-organization-edit/settings-sector-organization-edit.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsSectorOrganizationComponent,
  },
];

@NgModule({
  declarations: [
    SettingsSectorOrganizationComponent,
    SettingsSectorOrganizationListComponent,
    SettingsSectorOrganizationCreateComponent,
    SettingsSectorOrganizationEditComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class SettingsSectorOrganizationModule {}
