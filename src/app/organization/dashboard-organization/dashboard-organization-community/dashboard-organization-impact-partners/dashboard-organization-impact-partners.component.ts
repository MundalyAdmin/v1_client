import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { OrganizationService } from '../../../organization.service';
import { Organization } from '../../../organization.model';

@Component({
  selector: 'app-dashboard-organization-impact-partners',
  templateUrl: './dashboard-organization-impact-partners.component.html',
  styleUrls: ['./dashboard-organization-impact-partners.component.scss'],
})
export class DashboardOrganizationImpactPartnersComponent
  extends BaseComponent<Organization>
  implements OnInit
{
  constructor(public organizationService: OrganizationService) {
    super(organizationService);
  }

  ngOnInit() {
    // this.subscriptions['organizaion'] =
    //   this.organizationService.singleData$.subscribe((organization) => {
    //     if (organization) this.getImpactPartners(organization.id!);
    //   });

    this.getImpactPartners(1);
  }

  getImpactPartners(organizationId: number) {
    this.loading = true;
    this.organizationService
      .getImpactPartners(organizationId)
      .subscribe((data) => {
        this.data = data as Organization[];
        this.loading = false;
      });
  }
}
