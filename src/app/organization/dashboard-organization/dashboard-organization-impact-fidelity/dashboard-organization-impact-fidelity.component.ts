import { Component } from '@angular/core';
import { DashboardOrganizationVerifyComponent } from '../dashboard-organization-impact/dashboard-organization-verify/dashboard-organization-verify.component';
import {
  BaseComponent,
  BaseSingleComponent,
} from '../../../shared/base-component';
import { SocialImpactFidelity } from '../../../scale/social-impact-fidelity/social-impact-fidelity.model';
import { SocialImpactFidelityScore } from '../../../scale/social-impact-fidelity/social-impact-fidelity-score.model';
import { SocialImpactFidelityService } from '../../../scale/social-impact-fidelity/social-impact-fidelity.service';
import { ScaleService } from '../../../scale/scale.service';
import { OrganizationService } from '../../organization.service';
import { Organization } from '../../organization.model';

@Component({
  selector: 'app-dashboard-organization-impact-fidelity',
  templateUrl: './dashboard-organization-impact-fidelity.component.html',
  styleUrls: ['./dashboard-organization-impact-fidelity.component.scss'],
})
export class DashboardOrganizationImpactFidelityComponent extends BaseSingleComponent<SocialImpactFidelityScore> {
  organization: Organization | null = null;
  constructor(
    public impactFidelityService: SocialImpactFidelityService,
    public scaleService: ScaleService,
    public organizationService: OrganizationService
  ) {
    super(impactFidelityService);
  }

  override ngOnInit(): void {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.organization = organization;
          this.getByOrganizationId(organization.id!);
        }
      });
  }

  getByOrganizationId(organizationId: number) {
    this.loading = true;
    this.impactFidelityService
      .getOrganizationScore(organizationId)
      .subscribe((score) => {
        this.loading = false;
      });
  }
}
