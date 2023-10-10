import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { HomeComponent } from './public/home/home.component';
import { CompaniesComponent } from './public/companies/companies.component';
import { CompaniesShowComponent } from './public/companies/companies-show/companies-show.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'companies', component: CompaniesComponent },
      { path: 'companies/:id', component: CompaniesShowComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
