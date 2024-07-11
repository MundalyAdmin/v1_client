import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SharedPublicModule } from '../public/shared-public/shared-public.module';
import { CommunitiesComponent } from './communities/communities.component';
import { ParticipantsComponent } from './participants/participants.component';
import { LaunchComponent } from './launch/launch.component';
import { NgxGpAutocompleteModule } from '@angular-magic/ngx-gp-autocomplete';
import { Loader } from '@googlemaps/js-api-loader';
import { SetupreportService } from './setupreport.service';
import { SliderModule } from 'primeng/slider';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { DragDropModule } from 'primeng/dragdrop';
import { SurveyComponent } from './survey/survey.component';
import { TooltipModule } from 'primeng/tooltip';


const routes: Routes = [
  {
    path: '',
    component: SetupComponent,
    children: [
      {
        path: "communities",
        component: CommunitiesComponent
      },
      {
        path: "participants",
        component: ParticipantsComponent
      },
      {
        path: "survey",
        component: SurveyComponent
      },
      {
        path: "launch",
        component: LaunchComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    SetupComponent,
    CommunitiesComponent,
    ParticipantsComponent,
    LaunchComponent,
    SurveyComponent
  ],
  imports: [
    SharedPublicModule,
    RouterModule.forChild(routes),
    NgxGpAutocompleteModule,
    SliderModule,
    DividerModule,
    FormsModule,
    CommonModule,
    DragDropModule,
    TooltipModule
  ],
  providers: [
    {
      provide: Loader,
      useValue: new Loader({
        apiKey: environment.googlePlaceAPI || "",
        libraries: ['places']
      })
    },
    SetupreportService
  ]
})
export class SetupModule { }
