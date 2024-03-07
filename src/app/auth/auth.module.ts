import { SharedModule } from './../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { LoginRedirectionComponent } from './login-redirection/login-redirection.component';
import { OrganizationRegistrationComponent } from './organization-registration/organization-registration.component';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrganizationRegistrationProcessingComponent } from './organization-registration/organization-registration-processing/organization-registration-processing.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: OrganizationRegistrationComponent,
  },
  {
    path: 'registration-processing',
    component: OrganizationRegistrationProcessingComponent,
  },
  {
    path: 'login-redirection',
    component: LoginRedirectionComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    LoginComponent,
    LoginRedirectionComponent,
    OrganizationRegistrationComponent,
    OrganizationRegistrationProcessingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    DropdownModule,
    InputTextareaModule,
    FileUploadModule,
    CalendarModule,
    MultiSelectModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}
