import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/home/home.component';
import { HomeHeroSectionComponent } from './public/home/home-hero-section/home-hero-section.component';
import { HomeCategoryListComponent } from './public/home/home-category-list/home-category-list.component';
import { HomeCompanyListComponent } from './public/home/home-company-list/home-company-list.component';
import { HomeAboutUsComponent } from './public/home/home-about-us/home-about-us.component';
import { CompaniesComponent } from './public/companies/companies.component';
import { HeaderComponent } from './public/header/header.component';
import { FooterComponent } from './public/footer/footer.component';
import { CompaniesListComponent } from './public/companies/companies-list/companies-list.component';
import { CompaniesShowComponent } from './public/companies/companies-show/companies-show.component';
import { CompaniesShowHeroComponent } from './public/companies/companies-show/companies-show-hero/companies-show-hero.component';
import { CompaniesShowOverviewComponent } from './public/companies/companies-show/companies-show-overview/companies-show-overview.component';
import { CompaniesShowQandaComponent } from './public/companies/companies-show/companies-show-qanda/companies-show-qanda.component';
import { CompaniesShowAboutComponent } from './public/companies/companies-show/companies-show-about/companies-show-about.component';
import { CompaniesShowRatingInformationsComponent } from './public/companies/companies-show/companies-show-rating-informations/companies-show-rating-informations.component';

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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
