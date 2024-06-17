import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountdownModule } from 'ngx-countdown';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input-gg';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SharedPublicModule } from '../public/shared-public/shared-public.module';
import { SharedModule } from './../shared/shared.module';
import { AccountVerificationComponent } from './account-verification/account-verification.component';
import { AuthService } from './auth.service';
import { LoginRedirectionComponent } from './login-redirection/login-redirection.component';
import { LoginComponent } from './login/login.component';
import { OrganizationRegistrationProcessingComponent } from './organization-registration/organization-registration-processing/organization-registration-processing.component';
import { OrganizationRegistrationComponent } from './organization-registration/organization-registration.component';
import { RegistrationSuccessComponent } from './registration-success/registration-success.component';
import { VerifyRegistrationComponent } from './verify-registration/verify-registration.component';

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
    path: 'registration-success',
    component: RegistrationSuccessComponent,
  },
  {
    path: 'verify',
    component: VerifyRegistrationComponent,
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

    AccountVerificationComponent,
    RegistrationSuccessComponent,
    VerifyRegistrationComponent,
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
    NgxIntlTelInputModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}
