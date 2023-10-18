import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicBusinessComponent } from './public-business.component';
import { PublicBusinessHomeComponent } from './public-business-home/public-business-home.component';
import { PublicBusinessNavbarComponent } from './public-business-navbar/public-business-navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { SharedPublicModule } from '../shared-public/shared-public.module';
import { ComingSoonComponent } from '../../shared/components/coming-soon/coming-soon.component';
import { PublicBusinessHeadlineRiskComponent } from './public-business-headline-risk/public-business-headline-risk.component';
import { PublicBusinessValuePropsComponent } from './public-business-home/public-business-value-props/public-business-value-props.component';
import { PublicBusinessAchievementsComponent } from './public-business-home/public-business-achievements/public-business-achievements.component';
import { PublicBusinessContactUsComponent } from './public-business-home/public-business-contact-us/public-business-contact-us.component';
import { PublicBusinessHeroComponent } from './public-business-home/public-business-hero/public-business-hero.component';

const routes: Routes = [
  {
    path: '',
    component: PublicBusinessComponent,
    children: [
      {
        path: '',
        component: PublicBusinessHomeComponent,
      },
      {
        path: 'pricing',
        component: ComingSoonComponent,
      },
      {
        path: 'product/headline-risk',
        component: PublicBusinessHeadlineRiskComponent,
      },
      {
        path: 'blog',
        component: ComingSoonComponent,
      },
      {
        path: 'login',
        component: ComingSoonComponent,
      },
      {
        path: 'book-demo',
        component: ComingSoonComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    PublicBusinessComponent,
    PublicBusinessHomeComponent,
    PublicBusinessNavbarComponent,
    PublicBusinessHeroComponent,
    PublicBusinessValuePropsComponent,
    PublicBusinessAchievementsComponent,
    PublicBusinessContactUsComponent,
    PublicBusinessHeadlineRiskComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    SharedPublicModule,
  ],
})
export class PublicBusinessModule {}
