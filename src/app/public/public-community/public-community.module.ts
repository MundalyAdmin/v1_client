import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeHeroSectionComponent } from './home/home-hero-section/home-hero-section.component';
import { HomeOrganizationListComponent } from './home/home-organization-list/home-organization-list.component';
import { HomeAboutUsComponent } from './home/home-about-us/home-about-us.component';
import { OrganizationComponent } from './organization/organization.component';
import { HeaderComponent } from './header/header.component';
import { OrganizationListComponent } from './organization/organization-list/organization-list.component';
import { OrganizationShowComponent } from './organization/organization-show/organization-show.component';
import { OrganizationShowHeroComponent } from './organization/organization-show/organization-show-hero/organization-show-hero.component';
import { OrganizationShowOverviewComponent } from './organization/organization-show/organization-show-overview/organization-show-overview.component';
import { OrganizationShowAboutComponent } from './organization/organization-show/organization-show-about/organization-show-about.component';
import { OrganizationShowRatingInformationsComponent } from './organization/organization-show/organization-show-rating-informations/organization-show-rating-informations.component';
import { PublicCommunityComponent } from './public-community.component';
import { SharedModule } from '../../shared/shared.module';
import { SharedPublicModule } from '../shared-public/shared-public.module';
import { PublicCommunitiesCategorieListComponent } from '../public-communities/public-communities-categorie-list/public-communities-categorie-list.component';
import { WaitlistModule } from '../../waitlist/waitlist.module';
import { HomeSearchBarComponent } from './home/home-search-bar/home-search-bar.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { OrganizationContainerComponent } from './organization/organization-container/organization-container.component';
import { OrganizationSearchBarComponent } from './organization/organization-search-bar/organization-search-bar.component';
import { CommunitySuggestionComponent } from './community-suggestion/community-suggestion.component';
import { CommunitySuggestionThanksComponent } from './community-suggestion/community-suggestion-thanks/community-suggestion-thanks.component';
import { OrganizationShowOverviewOtherOrganizationsComponent } from './organization/organization-show/organization-show-overview/organization-show-overview-other-organization/organization-show-overview-other-organizations.component';
import { HomeSectorOrganizationListComponent } from './home/home-sector-organization-list/home-sector-organization-list.component';
import { OrganizationShowImpactStoriesComponent } from './organization/organization-show/organization-show-overview/organization-show-impact-stories/organization-show-impact-stories.component';
import { OrganizationNewStyleComponent } from './organization/organization-new-style/organization-new-style.component';
import { OrganizationNewStyleStoriesComponent } from './organization/organization-new-style/organization-new-style-stories/organization-new-style-stories.component';
import { OrganizationNewStyleRatingReportComponent } from './organization/organization-new-style/organization-new-style-rating-report/organization-new-style-rating-report.component';
import { OrganizationNewStyleCompanyReportedComponent } from './organization/organization-new-style/organization-new-style-company-reported/organization-new-style-company-reported.component';
import { OrganizationNewStyleCommunityVerifiedComponent } from './organization/organization-new-style/organization-new-style-community-verified/organization-new-style-community-verified.component';
import { OrganizationNewStyleRatingOverviewComponent } from './organization/organization-new-style/organization-new-style-rating-overview/organization-new-style-rating-overview.component';
import { OrganizationNewStyleStoriesListComponent } from './organization/organization-new-style/organization-new-style-stories/organization-new-style-stories-list/organization-new-style-stories-list.component';
import { RatingInformationComponent } from './organization/organization-new-style/rating-information/rating-information.component';
import { WhoIsForComponent } from './who-is-for/who-is-for.component';
import { WhoIsForImpactFacilitatorsComponent } from './who-is-for/who-is-for-impact-facilitators/who-is-for-impact-facilitators.component';
import { WhoIsForImpactFundersComponent } from './who-is-for/who-is-for-impact-funders/who-is-for-impact-funders.component';
import { WhoIsForImpactedCommunitiesComponent } from './who-is-for/who-is-for-impacted-communities/who-is-for-impacted-communities.component';
import { StoriesRatingComponent } from './organization/organization-new-style/organization-new-style-stories/stories-rating/stories-rating.component';
import { OrganizationNewStyleStoriesCreateComponent } from './organization/organization-new-style/organization-new-style-stories/organization-new-style-stories-create/organization-new-style-stories-create.component';
import { OrganizationFunderComponent } from './organization/organization-funder/organization-funder.component';
import { OrganizationFunderPortfolioComponent } from './organization/organization-funder/organization-funder-portfolio/organization-funder-portfolio.component';
import { CartComponent } from '../../cart/cart.component';
import { CheckoutComponent } from '../../cart/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: PublicCommunityComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('../../cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'community-voice',
        component: CommunitySuggestionComponent,
      },
      {
        path: 'who-is-for',
        component: WhoIsForComponent,
        children: [
          {
            path: 'impact-facilitators',
            component: WhoIsForImpactFacilitatorsComponent,
          },
          {
            path: 'impact-funders',
            component: WhoIsForImpactFundersComponent,
          },
          {
            path: 'impacted-communities',
            component: WhoIsForImpactedCommunitiesComponent,
          },
          {
            path: '**',
            redirectTo: 'impact-facilitators',
            pathMatch: 'full',
          },
        ],
      },

      {
        path: 'community-voice/thank-you',
        component: CommunitySuggestionThanksComponent,
      },
      {
        path: 'sector-organizations',
        component: PublicCommunitiesCategorieListComponent,
      },
      {
        path: 'sector-organizations/:id',
        component: OrganizationComponent,
      },
      {
        path: 'organizations/search',
        component: OrganizationContainerComponent,
      },
      {
        path: 'organizations/funder',
        component: OrganizationFunderComponent,
        children: [
          {
            path: 'portfolio',
            component: OrganizationFunderPortfolioComponent,
          },
          {
            path: 'stories',
            component: OrganizationNewStyleStoriesComponent,
            children: [
              {
                path: ':id',
                component: OrganizationNewStyleStoriesListComponent,
              },
              {
                path: '**',
                redirectTo: 'unverified',
                pathMatch: 'full',
              },
            ],
          },

          {
            path: '**',
            redirectTo: 'stories',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: 'organizations/:id',
        component: OrganizationNewStyleComponent,
        children: [
          {
            path: 'rating-overview',
            component: OrganizationNewStyleRatingOverviewComponent,
            children: [
              {
                path: 'company-reported',
                component: OrganizationNewStyleCompanyReportedComponent,
              },
              {
                path: 'community-verified',
                component: OrganizationNewStyleCommunityVerifiedComponent,
              },
              {
                path: '**',
                redirectTo: 'company-reported',
                pathMatch: 'full',
              },
            ],
          },
          {
            path: 'stories',
            component: OrganizationNewStyleStoriesComponent,
            children: [
              {
                path: ':id',
                component: OrganizationNewStyleStoriesListComponent,
              },
              {
                path: '**',
                redirectTo: 'unverified',
                pathMatch: 'full',
              },
            ],
          },
          {
            path: 'rating-report',
            component: OrganizationNewStyleRatingReportComponent,
          },
          {
            path: '**',
            redirectTo: 'stories',
            pathMatch: 'full',
          },
        ],
      },
      // {
      //   path: 'organizations/:id',
      //   component: OrganizationShowComponent,
      //   children: [
      //     {
      //       path: 'about',
      //       component: OrganizationShowAboutComponent,
      //     },
      //     {
      //       path: 'overview',
      //       component: OrganizationShowOverviewComponent,
      //     },
      //     {
      //       path: '**',
      //       redirectTo: 'overview',
      //     },
      //   ],
      // },
    ],
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeroSectionComponent,
    HomeSectorOrganizationListComponent,
    HomeOrganizationListComponent,
    HomeAboutUsComponent,
    OrganizationComponent,
    HeaderComponent,
    OrganizationListComponent,
    OrganizationShowComponent,
    OrganizationShowHeroComponent,
    OrganizationShowOverviewComponent,
    OrganizationShowAboutComponent,
    OrganizationShowRatingInformationsComponent,
    PublicCommunityComponent,
    HomeSearchBarComponent,
    OrganizationContainerComponent,
    OrganizationSearchBarComponent,
    CommunitySuggestionComponent,
    CommunitySuggestionThanksComponent,
    OrganizationShowOverviewOtherOrganizationsComponent,
    OrganizationShowImpactStoriesComponent,
    OrganizationNewStyleComponent,
    OrganizationNewStyleStoriesComponent,
    OrganizationNewStyleRatingReportComponent,
    OrganizationNewStyleCompanyReportedComponent,
    OrganizationNewStyleCommunityVerifiedComponent,
    OrganizationNewStyleRatingOverviewComponent,
    OrganizationNewStyleStoriesListComponent,
    RatingInformationComponent,
    WhoIsForComponent,
    WhoIsForImpactFacilitatorsComponent,
    WhoIsForImpactFundersComponent,
    WhoIsForImpactedCommunitiesComponent,
    StoriesRatingComponent,
    OrganizationNewStyleStoriesCreateComponent,
    OrganizationFunderComponent,
    OrganizationFunderPortfolioComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    WaitlistModule,
    AutocompleteLibModule,
    RouterModule.forChild(routes),
    SharedPublicModule,
  ],
})
export class PublicCommunityModule {}
