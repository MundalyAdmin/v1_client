import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsTypeOrganizationComponent } from './settings-type-organization.component';
import { SettingsTypeOrganizationListComponent } from './settings-type-organization-list/settings-type-organization-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { SettingsTypeOrganizationCreateComponent } from './settings-type-organization-create/settings-type-organization-create.component';
import { SettingsTypeOrganizationEditComponent } from './settings-type-organization-edit/settings-type-organization-edit.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsTypeOrganizationComponent,
  },
];

@NgModule({
  declarations: [
    SettingsTypeOrganizationComponent,
    SettingsTypeOrganizationListComponent,
    SettingsTypeOrganizationCreateComponent,
    SettingsTypeOrganizationEditComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class SettingsTypeOrganizationModule {}
