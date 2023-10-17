import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PublicCommunitiesCategorieListComponent } from './public-communities/public-communities-categorie-list/public-communities-categorie-list.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: 'for-business',
        loadChildren: () =>
          import('./public-business/public-business.module').then(
            (m) => m.PublicBusinessModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./public-community/public-community.module').then(
            (m) => m.PublicCommunityModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [PublicComponent, PublicCommunitiesCategorieListComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class PublicModule {}
