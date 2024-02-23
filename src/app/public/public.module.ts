import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PublicCommunitiesCategorieListComponent } from './public-communities/public-communities-categorie-list/public-communities-categorie-list.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedPublicModule } from './shared-public/shared-public.module';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'terms-of-services',
        component: TermsAndConditionsComponent,
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
      },
      {
        path: '',
        component: LandingPageComponent,
      },
      {
        path: 'community',
        loadChildren: () =>
          import('./public-community/public-community.module').then(
            (m) => m.PublicCommunityModule
          ),
      },
      {
        path: 'business',
        loadChildren: () =>
          import('./public-business/public-business.module').then(
            (m) => m.PublicBusinessModule
          ),
      },
      {
        path: 'funder',
        loadChildren: () =>
          import('./public-funder/public-funder.module').then(
            (m) => m.PublicFunderModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [
    PublicComponent,
    PublicCommunitiesCategorieListComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    LandingPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SharedPublicModule,
    RouterModule.forChild(routes),
  ],
})
export class PublicModule {}
