import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminOrganizationComponent } from './super-admin-organization.component';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminOrganizationListComponent } from './super-admin-organization-list/super-admin-organization-list.component';
import { SharedModule } from '../../shared/shared.module';
import { SuperAdminOrganizationCreateComponent } from './super-admin-organization-create/super-admin-organization-create.component';

const routes: Routes = [
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
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class SuperAdminOrganizationModule {}
