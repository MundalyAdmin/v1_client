import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitiativesComponent } from './initiatives.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateGoalComponent } from './components/create-goal/create-goal.component';
import { AddDataComponent } from './components/add-data/add-data.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    AddDataComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class InitiativesModule { }
