import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityWaitlistComponent } from './community-waitlist/community-waitlist.component';
import { SharedModule } from '../shared/shared.module';
import { ThankYouForJoiningCommunityComponent } from './community-waitlist/thank-you-for-joining-community/thank-you-for-joining-community.component';
import { OrganizationWaitlistComponent } from './organization-waitlist/organization-waitlist.component';
import { ThankYouForJoiningOrganizationComponent } from './organization-waitlist/thank-you-for-joining-organization/thank-you-for-join-organization.component';

@NgModule({
  declarations: [
    CommunityWaitlistComponent,
    OrganizationWaitlistComponent,
    ThankYouForJoiningOrganizationComponent,
    ThankYouForJoiningCommunityComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [CommunityWaitlistComponent, OrganizationWaitlistComponent],
})
export class WaitlistModule {}
