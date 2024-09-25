import { Component } from '@angular/core';
import { BaseComponent } from 'src/app/shared/base-component';
import { ImpactPartner } from '../impact-partner/impact-partner.model';
import { ImpactPartnerService } from '../impact-partner/impact-partner.service';

@Component({
  selector: 'app-dashboard-organization-impact-partners-wellbeing',
  templateUrl:
    './dashboard-organization-impact-partners-wellbeing.component.html',
  styleUrls: [
    './dashboard-organization-impact-partners-wellbeing.component.scss',
  ],
})
export class DashboardOrganizationImpactPartnersWellbeingComponent extends BaseComponent<ImpactPartner> {
  constructor(public impactPartnerService: ImpactPartnerService) {
    super(impactPartnerService);
  }

  override ngOnInit() {
    super.ngOnInit();

    this.authService.organization$.subscribe((organization) => {
      if (organization) {
        this.getWellbeingByFunderId(organization.id!);
      }
    });
  }

  getWellbeingByFunderId(funderId: number) {
    this.loading = true;
    this.impactPartnerService
      .getWellbeingByFunderId(funderId)
      .subscribe((data) => {
        this.data = data.map((item) => {
          return {
            ...item,
            scale_score: item.wellbeing_score,
          };
        });
        this.loading = false;
      });
  }
}
