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
        path: 'community-voice',
        component: CommunitySuggestionComponent,
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
          },
          {
            path: 'rating-report',
            component: OrganizationNewStyleRatingReportComponent,
          },
          {
            path: '**',
            redirectTo: 'rating-overview',
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
