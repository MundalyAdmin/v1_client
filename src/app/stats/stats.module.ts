import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule, Routes } from '@angular/router';
import { WellBeingComponent } from './wellbeing/wellbeing.component';
import { ChartModule } from 'primeng/chart';
import { DueDiligentComponent } from './due-diligent/due-diligent.component';

const routes: Routes = [
  {
    path: "",
    component: WellBeingComponent
  },
  {
    path: "due-diligent",
    component: DueDiligentComponent
  }
]

@NgModule({
  declarations: [
    WellBeingComponent,
    DueDiligentComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    ChartModule,
    RouterModule.forChild(routes),
  ]
})
export class FundsModule { }
