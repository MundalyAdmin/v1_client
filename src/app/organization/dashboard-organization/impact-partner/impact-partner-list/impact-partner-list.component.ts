import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { ImpactPartner } from '../impact-partner.model';
import { ImpactPartnerService } from '../impact-partner.service';
import { AuthService } from '../../../../auth/auth.service';
import { ImpactInitiative } from '../../../../scale/impact-initiative/impact-initiative.model';

@Component({
  selector: 'app-impact-partner-list',
  templateUrl: './impact-partner-list.component.html',
  styleUrls: ['./impact-partner-list.component.scss'],
})
export class ImpactPartnerListComponent
  extends BaseComponent<ImpactPartner>
  implements OnInit
{
  selectedImpactInitiatives: (ImpactInitiative | null)[] = [];

  constructor(public impactPartnerService: ImpactPartnerService) {
    super();
  }

  override ngOnInit(): void {
    this.getByFunderId(this.authService.organization?.id!);
  }

  deleteImpactPartner(impactPartner: ImpactPartner) {
    this.helper.notification.confirm(
      'Are you sure you want to delete this impact partner?',
      "You won't be able to revert this!",
      () => {
        this.loading = true;
        this.impactPartnerService.delete(impactPartner.id!).subscribe({
          next: () => {
            this.loading = false;
            this.helper.notification.alertSuccess();
          },
          error: () => {
            this.loading = false;
          },
        });
      }
    );
  }

  getByFunderId(funderId: number) {
    this.loading = true;
    this.impactPartnerService.getByFunderId(funderId).subscribe((data) => {
      this.loading = false;
      this.selectedImpactInitiatives = data.map((partner) => {
        return partner.implementer?.impact_initiatives?.length
          ? partner.implementer.impact_initiatives[0]
          : null;
      });
    });
  }
}
