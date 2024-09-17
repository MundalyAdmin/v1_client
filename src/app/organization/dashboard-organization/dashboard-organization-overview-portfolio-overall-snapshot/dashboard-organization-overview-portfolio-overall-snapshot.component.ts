import { Component } from '@angular/core';
import {
  BaseComponent,
  BaseSingleComponent,
} from '../../../shared/base-component';
import { PortfolioOverallSnapshot } from '../../../scale/models/portfolio-overall-snapshot.model';
import { ScaleService } from '../../../scale/scale.service';
import { WellbeingScoring } from 'src/app/wellbeing-scoring/wellbeing-scoring.model';
import { WellbeingScoringService } from 'src/app/wellbeing-scoring/wellbeing-scoring.service';
import { DashboardOrganizationService } from '../dashboard-organization.service';
import { ImpactVerificationTypeInsightsEnum } from 'src/app/impact-verification/impact-verification-type-insights/impact-verification-type-insights.enum';

@Component({
  selector: 'app-dashboard-organization-overview-portfolio-overall-snapshot',
  templateUrl:
    './dashboard-organization-overview-portfolio-overall-snapshot.component.html',
  styleUrls: [
    './dashboard-organization-overview-portfolio-overall-snapshot.component.scss',
  ],
})
export class DashboardOrganizationOverviewPortfolioOverallSnapshotComponent extends BaseSingleComponent<PortfolioOverallSnapshot> {
  constructor(
    public scaleService: ScaleService,
    private readonly wellbeingScoringService: WellbeingScoringService,
    private readonly dashboardOrganizationService: DashboardOrganizationService
  ) {
    super(scaleService);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.subscriptions['type-insights'] =
      this.dashboardOrganizationService.typeInsight$.subscribe(
        (typeInsights) => {
          if (
            typeInsights === ImpactVerificationTypeInsightsEnum.DUE_DILIGENCE
          ) {
            this.getDueDiligencePortfolioOverallSnapshot();
          } else {
            this.getWellbeingPortfolioOverallSnapshot();
          }
        }
      );
  }

  getDueDiligencePortfolioOverallSnapshot() {
    this.getPortfolioOverallSnapshot(this.scaleService);
  }

  getWellbeingPortfolioOverallSnapshot() {
    this.getPortfolioOverallSnapshot(this.wellbeingScoringService);
  }

  getPortfolioOverallSnapshot(service: ScaleService | WellbeingScoringService) {
    this.loading = true;
    service
      .getPortfolioOverallSnapshotByFunderId(
        this.currentLoggedInOrganization?.id!
      )
      .subscribe((response: PortfolioOverallSnapshot) => {
        this.single = response;
        this.loading = false;
      });
  }
}
