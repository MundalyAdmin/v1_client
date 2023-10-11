import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { PublicCommunityComponent } from './public/public-community/public-community.component';
import { PublicBusinessComponent } from './public/public-business/public-business.component';
import { HomeComponent } from './public/public-community/home/home.component';
import { PublicBusinessHomeComponent } from './public/public-business/public-business-home/public-business-home.component';

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
