import { ReadMoreComponent } from './ui-elements/read-more/read-more.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthorizationInterceptor } from './interceptors/authorization.interceptor';
import { MissingDataModule } from './helpers/missing-data/missing-data.module';
import { ModalModule } from './helpers/modal/modal.module';
import { LoadingModule } from './helpers/loading/loading.module';
import { OrganizationSoloComponent } from './ui-elements/organization-solo/organization-solo.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { ThankYouPageComponent } from './components/thank-you-page/thank-you-page.component';
import { TypewriterComponent } from '../typewriter/typewriter.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CustomCarouselComponent } from './components/custom-carousel/custom-carousel.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ReadMoreComponent,
    OrganizationSoloComponent,
    ComingSoonComponent,
    ThankYouPageComponent,
    TypewriterComponent,
    CustomCarouselComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthorizationInterceptor,
    //   multi: true,
    // },
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
    NgMultiSelectDropDownModule,
    NgApexchartsModule,
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
    OrganizationSoloComponent,
    ThankYouPageComponent,
    TypewriterComponent,
    NgMultiSelectDropDownModule,
    CustomCarouselComponent,
    NgApexchartsModule,
  ],
})
export class SharedModule {}
