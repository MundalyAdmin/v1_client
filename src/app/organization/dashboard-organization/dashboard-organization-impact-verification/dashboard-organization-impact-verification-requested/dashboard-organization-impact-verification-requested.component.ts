import { Component } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { ImpactVerification } from '../../../../impact-verification/impact-verification.model';
import { ImpactVerificationService } from '../../../../impact-verification/impact-verification.service';

@Component({
  selector: 'app-dashboard-organization-impact-verification-requested',
  templateUrl:
    './dashboard-organization-impact-verification-requested.component.html',
  styleUrls: [
    './dashboard-organization-impact-verification-requested.component.scss',
  ],
})
export class DashboardOrganizationImpactVerificationRequestedComponent extends BaseComponent<ImpactVerification> {
  constructor(public impactVerificationService: ImpactVerificationService) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.subscriptions['loggedOrganization'] =
      this.authService.organization$.subscribe((organization) => {
        this.getByInquirerId(organization?.id!);
      });
  }

  getByInquirerId(inquirerId: number) {
    this.loading = true;

    this.impactVerificationService
      .getByInquirerId(inquirerId)
      .subscribe((data) => {
        this.data = data as ImpactVerification[];
        this.loading = false;
      });
  }
}
