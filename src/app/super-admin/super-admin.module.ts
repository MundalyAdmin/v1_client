import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminComponent } from './super-admin.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SuperAdminSidebarComponent } from './super-admin-sidebar/super-admin-sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: SuperAdminComponent,
    children: [
      {
        path: 'organizations',
        loadChildren: () =>
          import(
            './super-admin-organization/super-admin-organization.module'
          ).then((module) => module.SuperAdminOrganizationModule),
      },
      // {
      //   path: '',
      //   redirectTo: './organizations',
      // },
    ],
  },
];

@NgModule({
  declarations: [SuperAdminComponent, SuperAdminSidebarComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class SuperAdminModule {}
