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
import { OrganizationRegistrationAdminInfoComponent } from './organization-registration/organization-registration-admin-info/organization-registration-admin-info.component';
import { OrganizationRegistrationOrganizationInfoComponent } from './organization-registration/organization-registration-organization-info/organization-registration-organization-info.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SharedPublicModule } from '../public/shared-public/shared-public.module';
import { PasswordModule } from 'primeng/password';
import { AccountVerificationComponent } from './account-verification/account-verification.component';
import { CountdownModule } from 'ngx-countdown';

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
    path: 'account-verification',
    component: AccountVerificationComponent,
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
    OrganizationRegistrationAdminInfoComponent,
    OrganizationRegistrationOrganizationInfoComponent,
    AccountVerificationComponent,
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
    ScrollPanelModule,
    SharedPublicModule,
    PasswordModule,
    CountdownModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}
