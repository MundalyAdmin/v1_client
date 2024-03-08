import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { TempDashboardComponent } from './temp-dashboard/temp-dashboard.component';
import { ReportDemographicCreateComponent } from '../report-demographic/report-demographic-create/report-demographic-create.component';
import { SelectResearchPartnersComponent } from './select-research-partners/select-research-partners.component';
import { DropdownModule } from 'primeng/dropdown';
import { SharedPublicModule } from '../public/shared-public/shared-public.module';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'dashboard',
    component: TempDashboardComponent,
  },
];

@NgModule({
  declarations: [CartComponent, CheckoutComponent, TempDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    DropdownModule,
    SharedPublicModule,
  ],
})
export class CartModule {}
