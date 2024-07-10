import { Component } from '@angular/core';
import { ImpactVerificationSetupService } from '../../../impact-verification/impact-verification-setup/impact-verification-setup.service';

@Component({
  selector: 'app-dashboard-organization-impact-verification-setup-launch',
  templateUrl:
    './dashboard-organization-impact-verification-setup-launch.component.html',
  styleUrls: [
    './dashboard-organization-impact-verification-setup-launch.component.scss',
  ],
})
export class DashboardOrganizationImpactVerificationSetupLaunchComponent {
  respondents: string = '';
  total: string = '';
  state: 'card' | 'invoice' | 'link' | '' = '';

  constructor(
    private impactVerificationSetupVerification: ImpactVerificationSetupService
  ) {
    this.impactVerificationSetupVerification.respondents.subscribe(
      (val) => (this.respondents = val)
    );
    this.impactVerificationSetupVerification.total.subscribe(
      (val) => (this.total = val)
    );
  }

  clickState(state: 'card' | 'invoice' | 'link') {
    this.state = state;
  }
}
