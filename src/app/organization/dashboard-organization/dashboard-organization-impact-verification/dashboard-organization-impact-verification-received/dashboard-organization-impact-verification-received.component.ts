import { Component } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { ImpactVerification } from '../../../../impact-verification/impact-verification.model';
import { ImpactVerificationService } from '../../../../impact-verification/impact-verification.service';

@Component({
  selector: 'app-dashboard-organization-impact-verification-received',
  templateUrl:
    './dashboard-organization-impact-verification-received.component.html',
  styleUrls: [
    './dashboard-organization-impact-verification-received.component.scss',
  ],
})
export class DashboardOrganizationImpactVerificationReceivedComponent extends BaseComponent<ImpactVerification> {
  constructor(public impactVerificationService: ImpactVerificationService) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.subscriptions['loggedOrganization'] =
      this.authService.organization$.subscribe((organization) => {
        this.getByVerifiedOrganizationId(organization?.id!);
      });

    this.subscriptions['verificationData'] =
      this.impactVerificationService.data$.subscribe((data) => {
        this.data = data;
      });
  }

  getByVerifiedOrganizationId(organizationId: number) {
    this.loading = true;
    this.impactVerificationService
      .getByVerifiedOrganizationId(organizationId)
      .subscribe((data) => {
        this.loading = false;
      });
  }
}
