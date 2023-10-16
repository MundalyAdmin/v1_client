import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicBusinessComponent } from './public-business.component';
import { PublicBusinessHomeComponent } from './public-business-home/public-business-home.component';
import { PublicBusinessNavbarComponent } from './public-business-navbar/public-business-navbar.component';
import { PublicBusinessHeroComponent } from './public-business-hero/public-business-hero.component';
import { PublicBusinessValuePropsComponent } from './public-business-value-props/public-business-value-props.component';
import { PublicBusinessAchievementsComponent } from './public-business-achievements/public-business-achievements.component';
import { PublicBusinessContactUsComponent } from './public-business-contact-us/public-business-contact-us.component';
import { RouterModule, Routes } from '@angular/router';
import { PublicCommunityComponent } from '../public-community/public-community.component';
import { SharedModule } from '../../shared/shared.module';
import { SharedPublicModule } from '../shared-public/shared-public.module';

const routes: Routes = [
  {
    path: '',
    component: PublicBusinessComponent,
    children: [
      {
        path: '',
        component: PublicBusinessHomeComponent,
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
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    SharedPublicModule,
  ],
})
export class PublicBusinessModule {}
