import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminCommunitySuggestionComponent } from './super-admin-community-suggestion.component';
import { SuperAdminCommunitySuggestionListComponent } from './super-admin-community-suggestion-list/super-admin-community-suggestion-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: SuperAdminCommunitySuggestionComponent,
  },
];

@NgModule({
  declarations: [
    SuperAdminCommunitySuggestionComponent,
    SuperAdminCommunitySuggestionListComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class SuperAdminCommunitySuggestionModule {}
