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
import { FooterComponent } from './footer/footer.component';
import { CompaniesListComponent } from './companies/companies-list/companies-list.component';
import { CompaniesShowComponent } from './companies/companies-show/companies-show.component';
import { CompaniesShowHeroComponent } from './companies/companies-show/companies-show-hero/companies-show-hero.component';
import { CompaniesShowOverviewComponent } from './companies/companies-show/companies-show-overview/companies-show-overview.component';
import { CompaniesShowQandaComponent } from './companies/companies-show/companies-show-qanda/companies-show-qanda.component';
import { CompaniesShowAboutComponent } from './companies/companies-show/companies-show-about/companies-show-about.component';
import { CompaniesShowRatingInformationsComponent } from './companies/companies-show/companies-show-rating-informations/companies-show-rating-informations.component';
import { PublicCommunityComponent } from './public-community.component';
import { SharedModule } from '../../shared/shared.module';
import { SharedPublicModule } from '../shared-public/shared-public.module';

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
        path: 'categories/:id',
        component: CompaniesComponent,
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
            path: 'faq',
            component: CompaniesShowQandaComponent,
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
    CompaniesShowQandaComponent,
    CompaniesShowAboutComponent,
    CompaniesShowRatingInformationsComponent,
    PublicCommunityComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    SharedPublicModule,
  ],
})
export class PublicCommunityModule {}
