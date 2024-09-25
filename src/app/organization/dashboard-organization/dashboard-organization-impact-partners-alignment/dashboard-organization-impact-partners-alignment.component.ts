import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component';
import { ImpactPartner } from '../impact-partner/impact-partner.model';
import { ImpactPartnerService } from '../impact-partner/impact-partner.service';

@Component({
  selector: 'app-dashboard-organization-impact-partners-alignment',
  templateUrl:
    './dashboard-organization-impact-partners-alignment.component.html',
  styleUrls: [
    './dashboard-organization-impact-partners-alignment.component.scss',
  ],
})
export class DashboardOrganizationImpactPartnersAlignmentComponent
  extends BaseComponent<ImpactPartner>
  implements OnInit
{
  constructor(public impactPartnerService: ImpactPartnerService) {
    super(impactPartnerService);
  }

  override ngOnInit() {
    super.ngOnInit();

    this.authService.organization$.subscribe((organization) => {
      if (organization) {
        this.getAlignmentByFunderId(organization.id!);
      }
    });
  }

  getAlignmentByFunderId(funderId: number) {
    this.loading = true;
    this.impactPartnerService
      .getAlignmentByFunderId(funderId)
      .subscribe((data) => {
        this.data = data.map((item) => {
          return {
            ...item,
            scale_score: item.community_trust_score,
          };
        });
        this.loading = false;
      });
  }
}
