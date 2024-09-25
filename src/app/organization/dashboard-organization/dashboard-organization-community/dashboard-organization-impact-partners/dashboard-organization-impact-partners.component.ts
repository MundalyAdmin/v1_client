import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { Organization } from '../../../organization.model';
import { OrganizationService } from '../../../organization.service';
import { ImpactPartner } from '../../impact-partner/impact-partner.model';

@Component({
  selector: 'app-dashboard-organization-impact-partners',
  templateUrl: './dashboard-organization-impact-partners.component.html',
  styleUrls: ['./dashboard-organization-impact-partners.component.scss'],
})
export class DashboardOrganizationImpactPartnersComponent
  extends BaseComponent<Organization>
  implements OnInit
{
  @Input({ required: true }) override data: ImpactPartner[] = [];
  @Input({ required: true }) scaleScoreLabel: string = '';
  showAddOrganizationModal = false;

  constructor(public organizationService: OrganizationService) {
    super(organizationService);
  }

  override ngOnInit() {
    super.ngOnInit();
  }
}
