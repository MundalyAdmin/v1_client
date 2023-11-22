import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardOrganizationComponent } from './dashboard-organization.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { DashboardOrganizationCommunityComponent } from './dashboard-organization-community/dashboard-organization-community.component';
import { DashboardOrganizationImpactComponent } from './dashboard-organization-impact/dashboard-organization-impact.component';
import { DashboardOrganizationBenchmarkComponent } from './dashboard-organization-benchmark/dashboard-organization-benchmark.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardOrganizationComponent,
  },
];

@NgModule({
  declarations: [DashboardOrganizationComponent, DashboardOrganizationCommunityComponent, DashboardOrganizationImpactComponent, DashboardOrganizationBenchmarkComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class DashboardOrganizationModule {}
