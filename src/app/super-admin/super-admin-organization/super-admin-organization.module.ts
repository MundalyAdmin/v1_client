import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminOrganizationComponent } from './super-admin-organization.component';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminOrganizationListComponent } from './super-admin-organization-list/super-admin-organization-list.component';
import { SharedModule } from '../../shared/shared.module';
import { SuperAdminOrganizationCreateComponent } from './super-admin-organization-create/super-admin-organization-create.component';
import { SuperAdminOrganizationSharedModule } from './super-admin-organization-shared.module';

const routes: Routes = [
  {
    path: ':id',
    loadChildren: () =>
      import(
        './super-admin-organization-show/super-admin-organization-show.module'
      ).then((module) => module.SuperAdminOrganizationShowModule),
  },
  {
    path: '',
    component: SuperAdminOrganizationComponent,
  },
];

@NgModule({
  declarations: [
    SuperAdminOrganizationComponent,
    SuperAdminOrganizationListComponent,
    SuperAdminOrganizationCreateComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    SuperAdminOrganizationSharedModule,
  ],
})
export class SuperAdminOrganizationModule {}
