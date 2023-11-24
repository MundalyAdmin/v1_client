import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminOrganizationEditComponent } from './super-admin-organization-edit/super-admin-organization-edit.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SuperAdminOrganizationEditComponent],
  imports: [CommonModule, SharedModule],
  exports: [SuperAdminOrganizationEditComponent],
})
export class SuperAdminOrganizationSharedModule {}
