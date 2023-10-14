import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/public-community/home/home.component';
import { HomeHeroSectionComponent } from './public/public-community/home/home-hero-section/home-hero-section.component';
import { HomeCategoryListComponent } from './public/public-community/home/home-category-list/home-category-list.component';
import { HomeCompanyListComponent } from './public/public-community/home/home-company-list/home-company-list.component';
import { HomeAboutUsComponent } from './public/public-community/home/home-about-us/home-about-us.component';
import { CompaniesComponent } from './public/public-community/companies/companies.component';
import { HeaderComponent } from './public/public-community/header/header.component';
import { FooterComponent } from './public/public-community/footer/footer.component';
import { CompaniesListComponent } from './public/public-community/companies/companies-list/companies-list.component';
import { CompaniesShowComponent } from './public/public-community/companies/companies-show/companies-show.component';
import { CompaniesShowHeroComponent } from './public/public-community/companies/companies-show/companies-show-hero/companies-show-hero.component';
import { CompaniesShowOverviewComponent } from './public/public-community/companies/companies-show/companies-show-overview/companies-show-overview.component';
import { CompaniesShowQandaComponent } from './public/public-community/companies/companies-show/companies-show-qanda/companies-show-qanda.component';
import { CompaniesShowAboutComponent } from './public/public-community/companies/companies-show/companies-show-about/companies-show-about.component';
import { CompaniesShowRatingInformationsComponent } from './public/public-community/companies/companies-show/companies-show-rating-informations/companies-show-rating-informations.component';
import { PublicCommunityComponent } from './public/public-community/public-community.component';
import { PublicBusinessComponent } from './public/public-business/public-business.component';
import { PublicBusinessHomeComponent } from './public/public-business/public-business-home/public-business-home.component';
import { PublicBusinessNavbarComponent } from './public/public-business/public-business-navbar/public-business-navbar.component';
import { PublicBusinessHeroComponent } from './public/public-business/public-business-hero/public-business-hero.component';
import { PublicBusinessValuePropsComponent } from './public/public-business/public-business-value-props/public-business-value-props.component';
import { PublicBusinessAchievementsComponent } from './public/public-business/public-business-achievements/public-business-achievements.component';
import { PublicBusinessContactUsComponent } from './public/public-business/public-business-contact-us/public-business-contact-us.component';
import { AppInjector } from './shared/services';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    HomeComponent,
    HomeHeroSectionComponent,
    HomeCategoryListComponent,
    HomeCompanyListComponent,
    HomeAboutUsComponent,
    CompaniesComponent,
    HeaderComponent,
    FooterComponent,
    CompaniesListComponent,
    CompaniesShowComponent,
    CompaniesShowHeroComponent,
    CompaniesShowOverviewComponent,
    CompaniesShowQandaComponent,
    CompaniesShowAboutComponent,
    CompaniesShowRatingInformationsComponent,
    PublicCommunityComponent,
    PublicBusinessComponent,
    PublicBusinessHomeComponent,
    PublicBusinessNavbarComponent,
    PublicBusinessHeroComponent,
    PublicBusinessValuePropsComponent,
    PublicBusinessAchievementsComponent,
    PublicBusinessContactUsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    AppInjector.injector = injector;
  }
}
