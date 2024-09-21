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
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-organization-overview-portfolio-overall-snapshot',
  templateUrl:
    './dashboard-organization-overview-portfolio-overall-snapshot.component.html',
  styleUrls: [
    './dashboard-organization-overview-portfolio-overall-snapshot.component.scss',
  ],
})
export class DashboardOrganizationOverviewPortfolioOverallSnapshotComponent extends BaseSingleComponent<PortfolioOverallSnapshot> {
  typeInsight: ImpactVerificationTypeInsightsEnum =
    ImpactVerificationTypeInsightsEnum.UNDEFINED;

  get ImpactVerificationTypeInsightsEnum() {
    return ImpactVerificationTypeInsightsEnum;
  }

  constructor(
    public scaleService: ScaleService,
    private readonly wellbeingScoringService: WellbeingScoringService,
    private readonly dashboardOrganizationService: DashboardOrganizationService,
    public override readonly route: ActivatedRoute
  ) {
    super(scaleService);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.subscriptions['type-insights'] =
      this.dashboardOrganizationService.typeInsight$.subscribe(
        (typeInsights) => {
          this.typeInsight = typeInsights;
          this.route.queryParams.subscribe((params) => {
            if (
              typeInsights === ImpactVerificationTypeInsightsEnum.DUE_DILIGENCE
            ) {
              this.getDueDiligencePortfolioOverallSnapshot(params);
            } else {
              this.getWellbeingPortfolioOverallSnapshot(params);
            }
          });
        }
      );
  }

  getDueDiligencePortfolioOverallSnapshot(params?: any) {
    this.getPortfolioOverallSnapshot(this.scaleService, params);
  }

  getWellbeingPortfolioOverallSnapshot(params?: any) {
    this.getPortfolioOverallSnapshot(this.wellbeingScoringService, params);
  }

  getPortfolioOverallSnapshot(
    service: ScaleService | WellbeingScoringService,
    params?: any
  ) {
    this.loading = true;
    service
      .getPortfolioOverallSnapshotByFunderId(
        this.currentLoggedInOrganization?.id!,
        params
      )
      .subscribe((response: PortfolioOverallSnapshot) => {
        this.single = response;
        this.loading = false;
      });
  }
}
