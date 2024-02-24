import { Component } from '@angular/core';
import { OrganizationNewStyleComponent } from '../../../public/public-community/organization/organization-new-style/organization-new-style.component';
import { OrganizationService } from '../../organization.service';
import { CartService } from '../../../cart/cart.service';
import { ReportService } from '../../../report/report.service';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '../../../shared/helpers/storage/storage';
import { Organization } from '../../organization.model';

@Component({
  selector: 'app-dashboard-organization-credit-reports',
  templateUrl: './dashboard-organization-credit-reports.component.html',
  styleUrls: ['./dashboard-organization-credit-reports.component.scss'],
})
export class DashboardOrganizationCreditReportsComponent extends OrganizationNewStyleComponent {
  constructor(
    public override organizationService: OrganizationService,
    public override cartService: CartService,
    public override reportService: ReportService,
    public override route: ActivatedRoute,
    public storage: Storage
  ) {
    super(organizationService, cartService, reportService, route);
  }

  override ngOnInit(): void {
    window.scrollTo(0, 0);
    this.organizationService.singleData = this.storage.get<any>('registration')!
      .organizationInfo as Organization;
    this.reports = this.reportService.data;
  }
}
