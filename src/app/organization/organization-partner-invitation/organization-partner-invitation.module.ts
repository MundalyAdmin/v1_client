import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationPartnerInvitationComponent } from './organization-partner-invitation.component';
import { OrganizationPartnerInvitationListComponent } from './organization-partner-invitation-list/organization-partner-invitation-list.component';
import { SharedModule } from '../../shared/shared.module';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    OrganizationPartnerInvitationComponent,
    OrganizationPartnerInvitationListComponent,
  ],
  imports: [CommonModule, SharedModule, ButtonModule],
  exports: [OrganizationPartnerInvitationListComponent],
})
export class OrganizationPartnerInvitationModule {}
