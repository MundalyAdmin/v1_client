import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicFunderComponent } from './public-funder.component';
import { PublicFunderHomeComponent } from './public-funder-home/public-funder-home.component';
import { PublicFunderSearchBarComponent } from './public-funder-search-bar/public-funder-search-bar.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationContainerComponent } from '../public-community/organization/organization-container/organization-container.component';
import { FunderOrganizationShowComponent } from './funder-organization-show/funder-organization-show.component';
import { SharedPublicModule } from '../shared-public/shared-public.module';

const routes: Routes = [
  {
    path: '',
    component: PublicFunderComponent,
    children: [
      {
        path: '',
        component: PublicFunderHomeComponent,
      },
      {
        path: 'organizations/search',
        component: OrganizationContainerComponent,
      },
      {
        path: 'organizations/:id',
        component: FunderOrganizationShowComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    PublicFunderComponent,
    PublicFunderHomeComponent,
    PublicFunderSearchBarComponent,
    FunderOrganizationShowComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AutocompleteLibModule,
    SharedPublicModule,
    RouterModule.forChild(routes),
  ],
})
export class PublicFunderModule {}
