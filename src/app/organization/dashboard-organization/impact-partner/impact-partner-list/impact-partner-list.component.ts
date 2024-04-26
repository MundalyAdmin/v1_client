import { Component, OnInit } from '@angular/core';
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
  constructor(public impactPartnerService: ImpactPartnerService) {
    super();
  }

  ngOnInit(): void {
    this.getByFunderId(24);
  }

  getByFunderId(funderId: number) {
    this.loading = true;
    this.impactPartnerService.getByFunderId(funderId).subscribe(() => {
      this.loading = false;
    });
  }
}
