import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsCountryComponent } from './settings-country.component';
import { SettingsCountryListComponent } from './settings-country-list/settings-country-list.component';
import { SettingsCountryCreateComponent } from './settings-country-create/settings-country-create.component';
import { SettingsCountryEditComponent } from './settings-country-edit/settings-country-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: SettingsCountryComponent,
  },
];

@NgModule({
  declarations: [
    SettingsCountryComponent,
    SettingsCountryListComponent,
    SettingsCountryCreateComponent,
    SettingsCountryEditComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class SettingsCountryModule {}
