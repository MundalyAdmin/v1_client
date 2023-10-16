import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { PublicCommunityComponent } from './public/public-community/public-community.component';
import { PublicBusinessComponent } from './public/public-business/public-business.component';
import { HomeComponent } from './public/public-community/home/home.component';
import { PublicBusinessHomeComponent } from './public/public-business/public-business-home/public-business-home.component';
import { CompaniesComponent } from './public/public-community/companies/companies.component';
import { CompaniesShowComponent } from './public/public-community/companies/companies-show/companies-show.component';
import { CompaniesShowAboutComponent } from './public/public-community/companies/companies-show/companies-show-about/companies-show-about.component';
import { CompaniesShowOverviewComponent } from './public/public-community/companies/companies-show/companies-show-overview/companies-show-overview.component';
import { CompaniesShowQandaComponent } from './public/public-community/companies/companies-show/companies-show-qanda/companies-show-qanda.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
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
      {
        path: 'for-business',
        component: PublicBusinessComponent,
        children: [
          {
            path: '',
            component: PublicBusinessHomeComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
