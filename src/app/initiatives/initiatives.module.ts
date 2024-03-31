import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitiativesComponent } from './initiatives.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateGoalComponent } from './components/create-goal/create-goal.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ImpactInitiativeCreateComponent } from './impact-initiative-create/impact-initiative-create.component';
import { SharedModule } from '../shared/shared.module';
import { ImpactInitiativeListComponent } from './impact-initiative-list/impact-initiative-list.component';
import { ImpactInitiativeGoalListComponent } from './impact-initiative-goal/impact-initiative-goal-list/impact-initiative-goal-list.component';
import { ImpactInitiativeGoalCreateComponent } from './impact-initiative-goal/impact-initiative-goal-create/impact-initiative-goal-create.component';
import { DropdownModule } from 'primeng/dropdown';
import { RightDrawerComponent } from './components/right-drawer/right-drawer.component';
import { ImpactInitiativeProgressDataShowComponent } from './impact-initiative-progress-data/impact-initiative-progress-data-show/impact-initiative-progress-data-show.component';
import { ChartModule } from 'primeng/chart';
import { ImpactInitiativeProgressDataCreateComponent } from './impact-initiative-progress-data/impact-initiative-progress-data-create/impact-initiative-progress-data-create.component';

const routes: Routes = [
  {
    path: '',
    component: InitiativesComponent,
  },
];

@NgModule({
  declarations: [
    InitiativesComponent,
    CreateGoalComponent,
    AddDataComponent,
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
  ],
})
export class InitiativesModule {}
