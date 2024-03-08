import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../public-community/footer/footer.component';
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from '../public-community/header/header.component';
import { PublicBusinessCheckCommunityReviewsComponent } from '../public-business/public-business-home/public-business-check-community-reviews/public-business-check-community-reviews.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ReportDemographicCreateComponent } from '../../report-demographic/report-demographic-create/report-demographic-create.component';
import { SelectResearchPartnersComponent } from '../../cart/select-research-partners/select-research-partners.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PublicBusinessCheckCommunityReviewsComponent,
    ReportDemographicCreateComponent,
    SelectResearchPartnersComponent,
  ],
  imports: [CommonModule, SharedModule, AutoCompleteModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    PublicBusinessCheckCommunityReviewsComponent,
    ReportDemographicCreateComponent,
    SelectResearchPartnersComponent,
  ],
})
export class SharedPublicModule {}
