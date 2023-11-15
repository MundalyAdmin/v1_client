import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminOrganizationShowComponent } from './super-admin-organization-show.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { SuperAdminOrganizationShowOverviewComponent } from './super-admin-organization-show-overview/super-admin-organization-show-overview.component';
import { SuperAdminImpactStoryComponent } from './super-admin-impact-story/super-admin-impact-story.component';
import { SuperAdminImpactStoryListComponent } from './super-admin-impact-story/super-admin-impact-story-list/super-admin-impact-story-list.component';
import { SuperAdminImpactStoryCreateComponent } from './super-admin-impact-story/super-admin-impact-story-create/super-admin-impact-story-create.component';
import { SuperAdminOrganizationSharedModule } from '../super-admin-organization-shared.module';

const routes: Routes = [
  {
    path: '',
    component: SuperAdminOrganizationShowComponent,
    children: [
      {
        path: 'overview',
        component: SuperAdminOrganizationShowOverviewComponent,
      },
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    SuperAdminOrganizationShowComponent,
    SuperAdminOrganizationShowOverviewComponent,
    SuperAdminImpactStoryComponent,
    SuperAdminImpactStoryListComponent,
    SuperAdminImpactStoryCreateComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    SuperAdminOrganizationSharedModule,
  ],
})
export class SuperAdminOrganizationShowModule {}
