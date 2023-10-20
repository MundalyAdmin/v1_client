import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityWaitlistComponent } from './community-waitlist/community-waitlist.component';
import { BusinessWaitlistComponent } from './business-waitlist/business-waitlist.component';
import { SharedModule } from '../shared/shared.module';
import { ThankYouForJoiningCommunityComponent } from './community-waitlist/thank-you-for-joining-community/thank-you-for-joining-community.component';
import { ThankYouForJoiningBusinessComponent } from './business-waitlist/thank-you-for-joining-business/thank-you-for-join-business.component';

@NgModule({
  declarations: [
    CommunityWaitlistComponent,
    BusinessWaitlistComponent,
    ThankYouForJoiningBusinessComponent,
    ThankYouForJoiningCommunityComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [CommunityWaitlistComponent, BusinessWaitlistComponent],
})
export class WaitlistModule {}
