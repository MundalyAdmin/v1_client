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
import { WaitlistModule } from '../../waitlist/waitlist.module';
import { ProductMeasureComponent } from './product-measure/product-measure.component';
import { ProductTrackComponent } from './product-track/product-track.component';
import { ProductReportComponent } from './product-report/product-report.component';
import { ProductActComponent } from './product-act/product-act.component';
import { ProductOvervirwComponent } from './product-overvirw/product-overvirw.component';
import { ThankYouForJoiningOrganizationComponent } from '../../waitlist/organization-waitlist/thank-you-for-joining-organization/thank-you-for-join-organization.component';
import { OrganizationWaitlistComponent } from '../../waitlist/organization-waitlist/organization-waitlist.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { PrincingComponent } from './princing/princing.component';
import { BusinessOrganizationSearchResultsComponent } from './business-organization-search-results/business-organization-search-results.component';
import { PublicBusinessOrganizationSearchBarComponent } from './public-business-organization-search-bar/public-business-organization-search-bar.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

const routes: Routes = [
  {
    path: '',
    component: PublicBusinessComponent,
    children: [
      {
        path: '',
        component: PublicBusinessHomeComponent,
      },
      // {
      //   path: 'pricing',
      //   component: PrincingComponent,
      // },
      {
        path: 'thank-you',
        component: ThankYouForJoiningOrganizationComponent,
      },
      {
        path: 'product/overview',
        component: ProductOvervirwComponent,
      },
      {
        path: 'product/verify',
        component: ProductMeasureComponent,
      },
      {
        path: 'product/track',
        component: ProductTrackComponent,
      },
      {
        path: 'product/evaluate',
        component: ProductReportComponent,
      },
      {
        path: 'product/act',
        component: ProductActComponent,
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
      // {
      //   path: 'case-studies',
      //   component: CaseStudiesComponent,
      // },
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
        component: OrganizationWaitlistComponent,
      },
      {
        path: 'organizations/search',
        component: BusinessOrganizationSearchResultsComponent,
      },
      {
        path: 'book-demo',
        component: OrganizationWaitlistComponent,
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
    ProductReportComponent,
    ProductActComponent,
    ProductOvervirwComponent,

    CaseStudiesComponent,
    PrincingComponent,
    BusinessOrganizationSearchResultsComponent,
    PublicBusinessOrganizationSearchBarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    WaitlistModule,
    RouterModule.forChild(routes),
    SharedPublicModule,
    AutocompleteLibModule,
  ],
})
export class PublicBusinessModule {}
