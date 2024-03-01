import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../public-community/footer/footer.component';
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from '../public-community/header/header.component';
import { PublicBusinessCheckCommunityReviewsComponent } from '../public-business/public-business-home/public-business-check-community-reviews/public-business-check-community-reviews.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PublicBusinessCheckCommunityReviewsComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    PublicBusinessCheckCommunityReviewsComponent,
  ],
})
export class SharedPublicModule {}
