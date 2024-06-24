import { Component } from '@angular/core';
import { OrganizationNewStyleComponent } from '../../../public/public-community/organization/organization-new-style/organization-new-style.component';
import { OrganizationService } from '../../organization.service';
import { CartService } from '../../../cart/cart.service';
import { ReportService } from '../../../report/report.service';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '../../../shared/helpers/storage/storage';
import { Organization } from '../../organization.model';
import { OrganizationAvailableReportsComponent } from '../../../public/public-community/organization/organization-new-style/organization-available-reports/organization-available-reports.component';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-dashboard-organization-credit-reports',
  templateUrl: './dashboard-organization-credit-reports.component.html',
  styleUrls: ['./dashboard-organization-credit-reports.component.scss'],
})
export class DashboardOrganizationCreditReportsComponent extends OrganizationAvailableReportsComponent {
  constructor(
    public override organizationService: OrganizationService,
    public override cartService: CartService,
    public override reportService: ReportService,
    public route: ActivatedRoute,
    public storage: Storage
  ) {
    super(reportService, organizationService, cartService);
  }

  override ngOnInit(): void {
    window.scrollTo(0, 0);

    if (this.authService.organization) {
      this.getByOrganization(this.authService.organization);
    }
  }
}
