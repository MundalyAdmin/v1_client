import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppInjector } from './shared/services';
import { SharedModule } from './shared/shared.module';
import { CommunityWaitlistComponent } from './waitlist/community-waitlist/community-waitlist.component';
import { ThankYouPageComponent } from './waitlist/thank-you-page/thank-you-page.component';

@NgModule({
  declarations: [AppComponent, CommunityWaitlistComponent, ThankYouPageComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    AppInjector.injector = injector;
  }
}
