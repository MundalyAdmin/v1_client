import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsTagOrganizationComponent } from './settings-tag-organization.component';
import { SettingsTagOrganizationCreateComponent } from './settings-tag-organization-create/settings-tag-organization-create.component';
import { SettingsTagOrganizationListComponent } from './settings-tag-organization-list/settings-tag-organization-list.component';
import { SettingsTagOrganizationEditComponent } from './settings-tag-organization-edit/settings-tag-organization-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: SettingsTagOrganizationComponent,
  },
];

@NgModule({
  declarations: [
    SettingsTagOrganizationComponent,
    SettingsTagOrganizationCreateComponent,
    SettingsTagOrganizationListComponent,
    SettingsTagOrganizationEditComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class SettingsTagOrganizationModule {}
