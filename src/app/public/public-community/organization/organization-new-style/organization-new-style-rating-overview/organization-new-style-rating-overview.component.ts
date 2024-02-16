import { Component } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
import { OrganizationService } from '../../../../../organization/organization.service';
import { BaseSingleComponent } from '../../../../../shared/base-component';
import { Organization } from '../../../../../organization/organization.model';
import { ScaleService } from '../../../../../scale/scale.service';
import { CommunityTrustScore } from '../../../../../scale/models/community-trust-score.model';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};
@Component({
  selector: 'app-organization-new-style-rating-overview',
  templateUrl: './organization-new-style-rating-overview.component.html',
  styleUrls: ['./organization-new-style-rating-overview.component.scss'],
})
export class OrganizationNewStyleRatingOverviewComponent extends BaseSingleComponent<Organization> {
  communityTrustScore: CommunityTrustScore | null = null;
  constructor(
    public organizationService: OrganizationService,
    public scaleService: ScaleService
  ) {
    super(organizationService);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.subscriptions['communityTrstScore'] =
      this.scaleService.communityTrustScore$.subscribe((score) => {
        this.communityTrustScore = score;
      });
  }

  getRecommendation() {
    if (this.communityTrustScore?.total_survey_respondant! < 10) {
      return 'Insufficient data for a recommendation';
    }

    if (this.communityTrustScore) {
      if (this.communityTrustScore.rating <= 2) {
        return 'Bad, Do Not Support';
      }
      if (
        this.communityTrustScore.rating > 2 &&
        this.communityTrustScore.rating <= 3.5
      ) {
        return 'Need more Information';
      }
      if (
        this.communityTrustScore.rating > 3.5 &&
        this.communityTrustScore.rating <= 4
      ) {
        return 'Good, Support.';
      }
      return 'Excellent, Support.';
    }
    return '';
  }
}
