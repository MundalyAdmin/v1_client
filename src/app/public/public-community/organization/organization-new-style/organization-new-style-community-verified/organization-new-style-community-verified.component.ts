import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../../../shared/base-component';
import { ImpactFidelityScore } from '../../../../../scale/models/impact-fidelity-score.model';
import { ScaleService } from '../../../../../scale/scale.service';
import { OrganizationService } from '../../../../../organization/organization.service';
import { SocialImpactFidelityService } from '../../../../../scale/social-impact-fidelity/social-impact-fidelity.service';

@Component({
  selector: 'app-organization-new-style-community-verified',
  templateUrl: './organization-new-style-community-verified.component.html',
  styleUrls: ['./organization-new-style-community-verified.component.scss'],
})
export class OrganizationNewStyleCommunityVerifiedComponent
  extends BaseComponent<ImpactFidelityScore>
  implements OnInit
{
  constructor(
    public impactFidelityService: SocialImpactFidelityService,
    public organizationService: OrganizationService,
    public scaleService: ScaleService
  ) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.getImpactFidelityScore(organization.id!);
        }
      });
  }

  getImpactFidelityScore(organizationId: number) {
    this.loading = true;
    this.impactFidelityService
      .getOrganizationScore(organizationId)
      .subscribe({ complete: () => (this.loading = false) });
  }
}
