import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { ImpactVerification } from '../../../impact-verification/impact-verification.model';
import { TypeOrganizationEnum } from '../../type-organization/type-organization.enum';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-organization-impact-verification',
  templateUrl: './dashboard-organization-impact-verification.component.html',
  styleUrls: ['./dashboard-organization-impact-verification.component.scss'],
})
export class DashboardOrganizationImpactVerificationComponent extends BaseComponent<ImpactVerification> {
  get TypeOrganizationEnum() {
    return TypeOrganizationEnum;
  }

  constructor(public router: Router, public route: ActivatedRoute) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.subscriptions['organization'] =
      this.authService.organization$.subscribe((organization) => {
        if (
          organization?.type_organization_id ===
            TypeOrganizationEnum.IMPACT_IMPLEMENTER ||
          organization?.type_organization_id === TypeOrganizationEnum.SUPPLIER
        ) {
          this.router.navigate(['received'], { relativeTo: this.route });
        } else if (
          organization?.type_organization_id ===
            TypeOrganizationEnum.IMPACT_FUNDER ||
          organization?.type_organization_id ===
            TypeOrganizationEnum.CORPORATION
        ) {
          this.router.navigate(['requested'], { relativeTo: this.route });
        }
      });
  }
}
