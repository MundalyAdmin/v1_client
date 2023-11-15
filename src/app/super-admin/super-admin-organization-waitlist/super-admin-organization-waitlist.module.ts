import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminOrganizationWaitlistComponent } from './super-admin-organization-waitlist.component';
import { SuperAdminOrganizationWaitlistListComponent } from './super-admin-organization-waitlist-list/super-admin-organization-waitlist-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: SuperAdminOrganizationWaitlistComponent,
  },
];

@NgModule({
  declarations: [
    SuperAdminOrganizationWaitlistComponent,
    SuperAdminOrganizationWaitlistListComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class SuperAdminOrganizationWaitlistModule {}
