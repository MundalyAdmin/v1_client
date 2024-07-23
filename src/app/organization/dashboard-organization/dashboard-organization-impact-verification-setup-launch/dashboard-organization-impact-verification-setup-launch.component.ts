import { Component } from '@angular/core';
import { ImpactVerificationSetupService } from '../../../impact-verification/impact-verification-setup/impact-verification-setup.service';
import {
  BaseComponent,
  BaseCreateComponent,
} from '../../../shared/base-component';
import { DashboardOrganizationImpactVerificationSetupBaseComponent } from '../dashboard-organization-impact-verification-setup-base/dashboard-organization-impact-verification-setup-base.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard-organization-impact-verification-setup-launch',
  templateUrl:
    './dashboard-organization-impact-verification-setup-launch.component.html',
  styleUrls: [
    './dashboard-organization-impact-verification-setup-launch.component.scss',
  ],
})
export class DashboardOrganizationImpactVerificationSetupLaunchComponent extends DashboardOrganizationImpactVerificationSetupBaseComponent {
  respondents: string = '';
  totalPrice: number = 0;
  discountedPrice: number = 0;
  state: 'card' | 'invoice' | 'link' | '' = '';
  completeForm: FormGroup | null = null;

  constructor(
    private impactVerificationSetupService: ImpactVerificationSetupService
  ) {
    super(impactVerificationSetupService, 'launchForm');
  }

  clickState(state: 'card' | 'invoice' | 'link') {
    this.state = state;
    this.form.patchValue({ paymentMethod: state });
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.subscriptions['completeForm'] =
      this.impactVerificationSetupService.form$.subscribe((form) => {
        this.completeForm = form;
      });

    this.subscriptions['totalPrice'] =
      this.impactVerificationSetupService.totalPrice$.subscribe(
        (totalPrice) => {
          this.totalPrice = totalPrice;
        }
      );

    this.subscriptions['discountedPrice'] =
      this.impactVerificationSetupService.discountedPrice$.subscribe(
        (discountedPrice) => {
          this.discountedPrice = discountedPrice;
        }
      );
  }
}
