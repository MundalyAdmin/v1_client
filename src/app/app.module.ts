import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { GeneratingReportComponent } from './generating-report/generating-report.component';
import { AppInjector } from './shared/services';
import { SharedModule } from './shared/shared.module';
import { DialogModule } from 'primeng/dialog';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { V2RedirectComponent } from './v2-redirect/v2-redirect.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneratingReportComponent,
    PageNotFoundComponent,
    V2RedirectComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,

    NgMultiSelectDropDownModule.forRoot(),
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    AppInjector.injector = injector;
  }
}
