import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationContainerComponent } from '../public/public-community/organization/organization-container/organization-container.component';
import { OrganizationFunderPortfolioComponent } from '../public/public-community/organization/organization-funder/organization-funder-portfolio/organization-funder-portfolio.component';
import { OrganizationFunderComponent } from '../public/public-community/organization/organization-funder/organization-funder.component';
import { OrganizationListComponent } from '../public/public-community/organization/organization-list/organization-list.component';
import { OrganizationAvailableReportsComponent } from '../public/public-community/organization/organization-new-style/organization-available-reports/organization-available-reports.component';
import { OrganizationNewStyleCommunityVerifiedComponent } from '../public/public-community/organization/organization-new-style/organization-new-style-community-verified/organization-new-style-community-verified.component';
import { OrganizationNewStyleCompanyReportedComponent } from '../public/public-community/organization/organization-new-style/organization-new-style-company-reported/organization-new-style-company-reported.component';
import { OrganizationNewStyleRatingOverviewComponent } from '../public/public-community/organization/organization-new-style/organization-new-style-rating-overview/organization-new-style-rating-overview.component';
import { OrganizationNewStyleRatingReportComponent } from '../public/public-community/organization/organization-new-style/organization-new-style-rating-report/organization-new-style-rating-report.component';
import { OrganizationNewStyleStoriesCreateComponent } from '../public/public-community/organization/organization-new-style/organization-new-style-stories/organization-new-style-stories-create/organization-new-style-stories-create.component';
import { OrganizationNewStyleStoriesListComponent } from '../public/public-community/organization/organization-new-style/organization-new-style-stories/organization-new-style-stories-list/organization-new-style-stories-list.component';
import { OrganizationNewStyleStoriesComponent } from '../public/public-community/organization/organization-new-style/organization-new-style-stories/organization-new-style-stories.component';
import { StoriesRatingComponent } from '../public/public-community/organization/organization-new-style/organization-new-style-stories/stories-rating/stories-rating.component';
import { OrganizationNewStyleComponent } from '../public/public-community/organization/organization-new-style/organization-new-style.component';
import { RatingInformationComponent } from '../public/public-community/organization/organization-new-style/rating-information/rating-information.component';
import { OrganizationSearchBarComponent } from '../public/public-community/organization/organization-search-bar/organization-search-bar.component';
import { OrganizationShowAboutComponent } from '../public/public-community/organization/organization-show/organization-show-about/organization-show-about.component';
import { OrganizationShowHeroComponent } from '../public/public-community/organization/organization-show/organization-show-hero/organization-show-hero.component';
import { OrganizationShowImpactStoriesComponent } from '../public/public-community/organization/organization-show/organization-show-overview/organization-show-impact-stories/organization-show-impact-stories.component';
import { OrganizationShowOverviewOtherOrganizationsComponent } from '../public/public-community/organization/organization-show/organization-show-overview/organization-show-overview-other-organization/organization-show-overview-other-organizations.component';
import { OrganizationShowOverviewComponent } from '../public/public-community/organization/organization-show/organization-show-overview/organization-show-overview.component';
import { OrganizationShowRatingInformationsComponent } from '../public/public-community/organization/organization-show/organization-show-rating-informations/organization-show-rating-informations.component';
import { OrganizationShowComponent } from '../public/public-community/organization/organization-show/organization-show.component';
import { OrganizationComponent } from '../public/public-community/organization/organization.component';
import { SharedPublicModule } from '../public/shared-public/shared-public.module';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { SharedModule } from '../shared/shared.module';
import { ComingSoonComponent } from '../shared/components/coming-soon/coming-soon.component';

const routes: Routes = [
  {
    path: 'search',
    component: OrganizationContainerComponent,
  },
  {
    path: 'become-participant',
    component: ComingSoonComponent,
  },
  {
    path: 'funder',
    component: OrganizationFunderComponent,
    children: [],
  },
  {
    path: ':id',
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
        path: 'rating-report',
        component: OrganizationNewStyleRatingReportComponent,
      },
      {
        path: 'available-reports',
        component: OrganizationAvailableReportsComponent,
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
        path: 'portfolio',
        component: OrganizationFunderPortfolioComponent,
      },

      {
        path: '**',
        redirectTo: 'stories',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    OrganizationNewStyleComponent,
    OrganizationNewStyleStoriesComponent,
    OrganizationNewStyleRatingReportComponent,
    OrganizationNewStyleCompanyReportedComponent,
    OrganizationNewStyleCommunityVerifiedComponent,
    OrganizationNewStyleRatingOverviewComponent,
    OrganizationNewStyleStoriesListComponent,
    RatingInformationComponent,
    OrganizationContainerComponent,
    OrganizationSearchBarComponent,
    StoriesRatingComponent,
    OrganizationNewStyleStoriesCreateComponent,
    OrganizationFunderComponent,
    OrganizationFunderPortfolioComponent,
    OrganizationAvailableReportsComponent,
    OrganizationComponent,
    OrganizationListComponent,
    OrganizationShowComponent,
    OrganizationShowHeroComponent,
    OrganizationShowOverviewComponent,
    OrganizationShowAboutComponent,
    OrganizationShowRatingInformationsComponent,
    OrganizationShowOverviewOtherOrganizationsComponent,
    OrganizationShowImpactStoriesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AutocompleteLibModule,
    RouterModule.forChild(routes),
    SharedPublicModule,
  ],
})
export class OrganizationModule {}
