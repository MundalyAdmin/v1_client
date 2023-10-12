import { ReadMoreComponent } from './ui-elements/read-more/read-more.component';
import { LoadingModule } from './../helpers/loading/loading.module';
import { ModalModule } from './../helpers/modal/modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthorizationInterceptor } from './interceptors/authorization.interceptor';
import { MissingDataModule } from '../helpers/missing-data/missing-data.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [ReadMoreComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true,
    },
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MissingDataModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ModalModule,
    LoadingModule,
    NgbModule,
  ],
  exports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ModalModule,
    LoadingModule,
    ReadMoreComponent,
    MissingDataModule,
    NgbModule,
  ],
})
export class SharedModule {}
