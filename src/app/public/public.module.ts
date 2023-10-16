import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';

import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./public-community/public-community.module').then(
            (m) => m.PublicCommunityModule
          ),
      },
      {
        path: 'for-business',
        loadChildren: () =>
          import('./public-business/public-business.module').then(
            (m) => m.PublicBusinessModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [PublicComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class PublicModule {}
