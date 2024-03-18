import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { SharedModule } from '../../shared/shared.module';
import { WaitlistModule } from '../../waitlist/waitlist.module';
import { PublicCommunitiesCategorieListComponent } from '../public-communities/public-communities-categorie-list/public-communities-categorie-list.component';
import { SharedPublicModule } from '../shared-public/shared-public.module';
import { CommunitySuggestionThanksComponent } from './community-suggestion/community-suggestion-thanks/community-suggestion-thanks.component';
import { CommunitySuggestionComponent } from './community-suggestion/community-suggestion.component';
import { HomeAboutUsComponent } from './home/home-about-us/home-about-us.component';
import { HomeHeroSectionComponent } from './home/home-hero-section/home-hero-section.component';
import { HomeOrganizationListComponent } from './home/home-organization-list/home-organization-list.component';
import { HomeSearchBarComponent } from './home/home-search-bar/home-search-bar.component';
import { HomeSectorOrganizationListComponent } from './home/home-sector-organization-list/home-sector-organization-list.component';
import { HomeComponent } from './home/home.component';
import { OrganizationContainerComponent } from './organization/organization-container/organization-container.component';
import { OrganizationComponent } from './organization/organization.component';
import { PublicCommunityComponent } from './public-community.component';

import { WhoIsForImpactFacilitatorsComponent } from './who-is-for/who-is-for-impact-facilitators/who-is-for-impact-facilitators.component';
import { WhoIsForImpactFundersComponent } from './who-is-for/who-is-for-impact-funders/who-is-for-impact-funders.component';
import { WhoIsForImpactedCommunitiesComponent } from './who-is-for/who-is-for-impacted-communities/who-is-for-impacted-communities.component';
import { WhoIsForComponent } from './who-is-for/who-is-for.component';

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

    PublicCommunityComponent,
    HomeSearchBarComponent,

    CommunitySuggestionComponent,
    CommunitySuggestionThanksComponent,

    WhoIsForComponent,
    WhoIsForImpactFacilitatorsComponent,
    WhoIsForImpactFundersComponent,
    WhoIsForImpactedCommunitiesComponent,
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
