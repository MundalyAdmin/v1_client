import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicBusinessComponent } from './public-business.component';
import { PublicBusinessHomeComponent } from './public-business-home/public-business-home.component';
import { PublicBusinessNavbarComponent } from './public-business-navbar/public-business-navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { SharedPublicModule } from '../shared-public/shared-public.module';
import { ComingSoonComponent } from '../../shared/components/coming-soon/coming-soon.component';
import { PublicBusinessHeadlineRiskComponent } from './public-business-headline-risk/public-business-headline-risk.component';
import { PublicBusinessValuePropsComponent } from './public-business-home/public-business-value-props/public-business-value-props.component';
import { PublicBusinessAchievementsComponent } from './public-business-home/public-business-achievements/public-business-achievements.component';
import { PublicBusinessContactUsComponent } from './public-business-home/public-business-contact-us/public-business-contact-us.component';
import { PublicBusinessHeroComponent } from './public-business-home/public-business-hero/public-business-hero.component';
import { PublicBusinessProductServiceFidelityComponent } from './public-business-product-service-fidelity/public-business-product-service-fidelity.component';
import { PublicBusinessImpactFidelityComponent } from './public-business-impact-fidelity/public-business-impact-fidelity.component';
import { PublicBusinessCommunityPerceptionComponent } from './public-business-community-perception/public-business-community-perception.component';
import { BusinessWaitlistComponent } from '../../waitlist/business-waitlist/business-waitlist.component';
import { WaitlistModule } from '../../waitlist/waitlist.module';
import { ThankYouForJoiningBusinessComponent } from '../../waitlist/business-waitlist/thank-you-for-joining-business/thank-you-for-join-business.component';
import { ProductMeasureComponent } from './product-measure/product-measure.component';
import { ProductTrackComponent } from './product-track/product-track.component';

const routes: Routes = [
  {
    path: '',
    component: PublicBusinessComponent,
    children: [
      {
        path: '',
        component: PublicBusinessHomeComponent,
      },
      {
        path: 'pricing',
        component: ComingSoonComponent,
      },
      {
        path: 'thank-you',
        component: ThankYouForJoiningBusinessComponent,
      },
      {
        path: 'product/measure',
        component: ProductMeasureComponent,
      },
      {
        path: 'product/track',
        component: ProductTrackComponent,
      },
      {
        path: 'product/headline-risk',
        component: PublicBusinessHeadlineRiskComponent,
      },
      {
        path: 'product/product-service-fidelity',
        component: PublicBusinessProductServiceFidelityComponent,
      },
      {
        path: 'product/impact-fidelity',
        component: PublicBusinessImpactFidelityComponent,
      },
      {
        path: 'product/community-perception',
        component: PublicBusinessCommunityPerceptionComponent,
      },
      {
        path: 'blog',
        component: ComingSoonComponent,
      },
      {
        path: 'login',
        component: ComingSoonComponent,
      },
      {
        path: 'book-demo',
        component: BusinessWaitlistComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    PublicBusinessComponent,
    PublicBusinessHomeComponent,
    PublicBusinessNavbarComponent,
    PublicBusinessHeroComponent,
    PublicBusinessValuePropsComponent,
    PublicBusinessAchievementsComponent,
    PublicBusinessContactUsComponent,
    PublicBusinessHeadlineRiskComponent,
    PublicBusinessProductServiceFidelityComponent,
    PublicBusinessImpactFidelityComponent,
    PublicBusinessCommunityPerceptionComponent,
    ProductMeasureComponent,
    ProductTrackComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    WaitlistModule,
    RouterModule.forChild(routes),
    SharedPublicModule,
  ],
})
export class PublicBusinessModule {}
