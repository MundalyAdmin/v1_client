import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../../../../shared/base-component';
import { ImpactPartner } from '../impact-partner.model';
import { ImpactPartnerService } from '../impact-partner.service';

@Component({
  selector: 'app-impact-partner-list',
  templateUrl: './impact-partner-list.component.html',
  styleUrls: ['./impact-partner-list.component.scss'],
})
export class ImpactPartnerListComponent
  extends BaseComponent<ImpactPartner>
  implements OnInit
{
  @Input({ required: true }) override data: ImpactPartner[] = [];
  @Input({ required: true }) scaleScoreLabel: string = '';
  selectedImpactInitiatives: ({ id: number; location: string } | null)[] = [];

  constructor(
    public impactPartnerService: ImpactPartnerService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
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

  selectImpactPartner(partnerId: number, indexCommunity: number) {
    this.router.navigate([partnerId], {
      relativeTo: this.route,
      queryParams: {
        community: this.selectedImpactInitiatives[indexCommunity]?.location,
      },
    });
  }
}
