import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppInjector } from './shared/services';
import { SharedModule } from './shared/shared.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { GeneratingReportComponent } from './generating-report/generating-report.component';

@NgModule({
  declarations: [AppComponent, GeneratingReportComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgMultiSelectDropDownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    AppInjector.injector = injector;
  }
}
