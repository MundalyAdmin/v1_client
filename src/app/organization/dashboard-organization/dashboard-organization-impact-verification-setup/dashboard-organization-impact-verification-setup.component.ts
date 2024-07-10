import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { ImpactVerificationSetupService } from '../../../impact-verification/impact-verification-setup/impact-verification-setup.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-organization-impact-verification-setup',
  templateUrl:
    './dashboard-organization-impact-verification-setup.component.html',
  styleUrls: [
    './dashboard-organization-impact-verification-setup.component.scss',
  ],
})
export class DashboardOrganizationImpactVerificationSetupComponent extends BaseComponent<any> {
  total: number | string = '';
  respondents = '';
  childUrl = '';

  constructor(
    private impactVerificationSetupService: ImpactVerificationSetupService,
    private router: Router
  ) {
    super();
    this.impactVerificationSetupService.total.subscribe((total) => {
      this.total = total;
    });
    this.impactVerificationSetupService.respondents.subscribe((val) => {
      this.respondents = val;
    });

    this.router.events.subscribe((evt: any) => {
      if (!(evt instanceof NavigationEnd)) return;
      this.childUrl = evt['url'];
    });
  }

  override ngOnInit() {
    super.ngOnInit();
    this.childUrl = this.router.url;
  }

  nextComponent() {
    if (this.childUrl === '/setupreport/participants')
      return '/setupreport/launch';
    return '/setupreport/participants';
  }
}
