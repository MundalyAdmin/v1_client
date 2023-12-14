import { SharedModule } from './../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { LoginRedirectionComponent } from './login-redirection/login-redirection.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login-redirection',
    component: LoginRedirectionComponent,
  },
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [LoginComponent, LoginRedirectionComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  providers: [AuthService],
})
export class AuthModule {}
