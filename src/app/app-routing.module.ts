import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { PublicCommunityComponent } from './public/public-community/public-community.component';
import { PublicBusinessComponent } from './public/public-business/public-business.component';
import { HomeComponent } from './public/public-community/home/home.component';
import { PublicBusinessHomeComponent } from './public/public-business/public-business-home/public-business-home.component';
import { CompaniesListComponent } from './public/public-community/companies/companies-list/companies-list.component';
import { CompaniesShowComponent } from './public/public-community/companies/companies-show/companies-show.component';
import { CompaniesComponent } from './public/public-community/companies/companies.component';

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
            path: 'companies',
            component: CompaniesComponent,
          },
          {
            path: 'companies/details',
            component: CompaniesShowComponent,
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
