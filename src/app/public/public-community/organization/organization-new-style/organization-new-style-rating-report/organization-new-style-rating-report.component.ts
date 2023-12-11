import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../../shared/base-component';
import { SocialImpactFidelityService } from '../../../../../scale/social-impact-fidelity/social-impact-fidelity.service';
import { OrganizationService } from '../../../../../organization/organization.service';
import { ScaleService } from '../../../../../scale/scale.service';

@Component({
  selector: 'app-organization-new-style-rating-report',
  templateUrl: './organization-new-style-rating-report.component.html',
  styleUrls: ['./organization-new-style-rating-report.component.scss'],
})
export class OrganizationNewStyleRatingReportComponent
  extends BaseComponent<any>
  implements OnInit
{
  isLoading = {
    socialImpactFidelity: false,
  };
  constructor(
    public socialImpactFidelityService: SocialImpactFidelityService,
    public organizationService: OrganizationService,
    public scaleService: ScaleService
  ) {
    super();
  }

  ngOnInit() {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) this.getSocialImpactFidelityScore(organization.id!);
      });
  }

  getSocialImpactFidelityScore(organizationId: number) {
    this.isLoading.socialImpactFidelity = true;
    this.socialImpactFidelityService
      .getOrganizationScore(organizationId)
      .subscribe(() => {
        this.isLoading.socialImpactFidelity = false;
      });
  }
}
