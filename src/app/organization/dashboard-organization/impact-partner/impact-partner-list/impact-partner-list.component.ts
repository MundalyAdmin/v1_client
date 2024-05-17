import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../shared/base-component';
import { ImpactPartner } from '../impact-partner.model';
import { ImpactPartnerService } from '../impact-partner.service';
import { AuthService } from '../../../../auth/auth.service';

@Component({
  selector: 'app-impact-partner-list',
  templateUrl: './impact-partner-list.component.html',
  styleUrls: ['./impact-partner-list.component.scss'],
})
export class ImpactPartnerListComponent
  extends BaseComponent<ImpactPartner>
  implements OnInit
{
  constructor(
    public impactPartnerService: ImpactPartnerService,
    public authService: AuthService
  ) {
    super();
  }

  ngOnInit(): void {
    this.getByFunderId(this.authService.organization?.id!);
  }

  getByFunderId(funderId: number) {
    this.loading = true;
    this.impactPartnerService.getByFunderId(funderId).subscribe(() => {
      this.loading = false;
    });
  }
}
