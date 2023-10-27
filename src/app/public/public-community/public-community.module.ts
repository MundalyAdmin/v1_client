import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeHeroSectionComponent } from './home/home-hero-section/home-hero-section.component';
import { HomeCategoryListComponent } from './home/home-category-list/home-category-list.component';
import { HomeCompanyListComponent } from './home/home-company-list/home-company-list.component';
import { HomeAboutUsComponent } from './home/home-about-us/home-about-us.component';
import { CompaniesComponent } from './companies/companies.component';
import { HeaderComponent } from './header/header.component';
import { CompaniesListComponent } from './companies/companies-list/companies-list.component';
import { CompaniesShowComponent } from './companies/companies-show/companies-show.component';
import { CompaniesShowHeroComponent } from './companies/companies-show/companies-show-hero/companies-show-hero.component';
import { CompaniesShowOverviewComponent } from './companies/companies-show/companies-show-overview/companies-show-overview.component';
import { CompaniesShowAboutComponent } from './companies/companies-show/companies-show-about/companies-show-about.component';
import { CompaniesShowRatingInformationsComponent } from './companies/companies-show/companies-show-rating-informations/companies-show-rating-informations.component';
import { PublicCommunityComponent } from './public-community.component';
import { SharedModule } from '../../shared/shared.module';
import { SharedPublicModule } from '../shared-public/shared-public.module';
import { PublicCommunitiesCategorieListComponent } from '../public-communities/public-communities-categorie-list/public-communities-categorie-list.component';
import { WaitlistModule } from '../../waitlist/waitlist.module';
import { HomeSearchBarComponent } from './home/home-search-bar/home-search-bar.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { CompaniesContainerComponent } from './companies/companies-container/companies-container.component';
import { CompaniesSearchBarComponent } from './companies/companies-search-bar/companies-search-bar.component';
import { CommunitySuggestionComponent } from './community-suggestion/community-suggestion.component';
import { CommunitySuggestionThanksComponent } from './community-suggestion/community-suggestion-thanks/community-suggestion-thanks.component';
import { CompaniesShowOverviewSimilarComponent } from './companies/companies-show/companies-show-overview/companies-show-overview-similar/companies-show-overview-similar.component';

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
        path: 'categories',
        component: PublicCommunitiesCategorieListComponent,
      },
      {
        path: 'categories/:id',
        component: CompaniesComponent,
      },
      {
        path: 'companies/search',
        component: CompaniesContainerComponent,
      },
      {
        path: 'companies/:id',
        component: CompaniesShowComponent,
        children: [
          {
            path: 'about',
            component: CompaniesShowAboutComponent,
          },
          {
            path: 'overview',
            component: CompaniesShowOverviewComponent,
          },
          {
            path: '**',
            redirectTo: 'overview',
          },
        ],
      },
    ],
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeroSectionComponent,
    HomeCategoryListComponent,
    HomeCompanyListComponent,
    HomeAboutUsComponent,
    CompaniesComponent,
    HeaderComponent,
    CompaniesListComponent,
    CompaniesShowComponent,
    CompaniesShowHeroComponent,
    CompaniesShowOverviewComponent,
    CompaniesShowAboutComponent,
    CompaniesShowRatingInformationsComponent,
    PublicCommunityComponent,
    HomeSearchBarComponent,
    CompaniesContainerComponent,
    CompaniesSearchBarComponent,
    CommunitySuggestionComponent,
    CommunitySuggestionThanksComponent,
    CompaniesShowOverviewSimilarComponent,
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
