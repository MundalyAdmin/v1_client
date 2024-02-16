import { Component } from '@angular/core';
import { BaseComponent } from '../../../../../shared/base-component';
import { ImpactInitiative } from '../../../../../scale/impact-initiative/impact-initiative.model';
import { ImpactInitiativeService } from '../../../../../scale/impact-initiative/impact-initiative.service';
import { ActivatedRoute } from '@angular/router';
import { OrganizationService } from '../../../../../organization/organization.service';
import { ScaleService } from '../../../../../scale/scale.service';
import { Organization } from '../../../../../organization/organization.model';

@Component({
  selector: 'app-organization-new-style-company-reported',
  templateUrl: './organization-new-style-company-reported.component.html',
  styleUrls: ['./organization-new-style-company-reported.component.scss'],
})
export class OrganizationNewStyleCompanyReportedComponent extends BaseComponent<ImpactInitiative> {
  facilitationStrategyScore: number = 0;
  organizationReportedImpactStrength = 0;
  organization: Organization | null = null;

  constructor(
    public impactInitiativeService: ImpactInitiativeService,
    public organizationService: OrganizationService,
    public scaleService: ScaleService
  ) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.organization = organization;
          this.getByOrganizationId(organization.id!);
        }
      });

    this.subscriptions['facilitationStrategy'] =
      this.scaleService.communityTrustScore$.subscribe((score) => {
        this.facilitationStrategyScore = score.facilitation_strategy_score;
        this.organizationReportedImpactStrength =
          score.organization_reported_impact_strength;
      });
  }

  getByOrganizationId(organizationId: number) {
    this.loading = true;
    this.impactInitiativeService.getByOrganizationId(organizationId).subscribe({
      complete: () => {
        this.loading = false;
      },
    });
  }
}
