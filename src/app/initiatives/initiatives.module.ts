import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { SharedModule } from '../shared/shared.module';
import { RightDrawerComponent } from './components/right-drawer/right-drawer.component';
import { ImpactInitiativeCreateComponent } from './impact-initiative-create/impact-initiative-create.component';
import { ImpactInitiativeGoalCreateComponent } from './impact-initiative-goal/impact-initiative-goal-create/impact-initiative-goal-create.component';
import { ImpactInitiativeGoalListComponent } from './impact-initiative-goal/impact-initiative-goal-list/impact-initiative-goal-list.component';
import { ImpactInitiativeListComponent } from './impact-initiative-list/impact-initiative-list.component';
import { ImpactInitiativeProgressDataCreateComponent } from './impact-initiative-progress-data/impact-initiative-progress-data-create/impact-initiative-progress-data-create.component';
import { ImpactInitiativeProgressDataShowComponent } from './impact-initiative-progress-data/impact-initiative-progress-data-show/impact-initiative-progress-data-show.component';
import { InitiativesComponent } from './initiatives.component';

const routes: Routes = [
  {
    path: '',
    component: InitiativesComponent,
  },
];

@NgModule({
  declarations: [
    InitiativesComponent,

    ImpactInitiativeCreateComponent,
    ImpactInitiativeListComponent,
    ImpactInitiativeGoalListComponent,
    ImpactInitiativeGoalCreateComponent,
    RightDrawerComponent,
    ImpactInitiativeProgressDataShowComponent,
    ImpactInitiativeProgressDataCreateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    DialogModule,
    SharedModule,
    DropdownModule,
    ChartModule,
    AutoCompleteModule,
  ],
})
export class InitiativesModule {}
