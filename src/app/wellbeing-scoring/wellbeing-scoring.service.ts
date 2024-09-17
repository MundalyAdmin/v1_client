import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { BaseScaleService } from '../scale/base-scale.service';
import { PortfolioOverallSnapshot } from '../scale/models/portfolio-overall-snapshot.model';
import { PortfolioRiskScore } from '../scale/models/portfolio-risk-score.model';
import { ApiResponse } from '../shared/models/ApiResponse';
import { WellbeingScoring } from './wellbeing-scoring.model';

@Injectable({
  providedIn: 'root',
})
export class WellbeingScoringService extends BaseScaleService<WellbeingScoring> {
  constructor(public authService: AuthService) {
    super('wellbeing-scoring');
  }

  getRecommendation(wellbeingScoring: WellbeingScoring) {
    const totalRespondants = wellbeingScoring?.total_respondants;
    const trustScore = wellbeingScoring?.score;

    if (totalRespondants! < 5) {
      return 'Insufficient data for a recommendation';
    }

    if (trustScore) {
      if (trustScore <= 55) {
        return `Poor Wellbeing Status, Action Needed`;
      } else if (trustScore > 55 && trustScore <= 67) {
        return `Poor to Moderate Wellbeing Status, Action Needed`;
      } else if (trustScore > 68 && trustScore <= 77) {
        return `Moderate Wellbeing Status, Need More Insights`;
      } else if (trustScore > 78 && trustScore <= 88) {
        return `Moderate to High Wellbeing Status, No Action`;
      } else {
        return `High Wellbeing Status, No Action`;
      }
    }

    return '';
  }

  getPortfolioRiskScoreByFunderId(funderId: number) {
    return this.factory
      .get(`${this.endPoint}/portfolio-risk-score/funders/${funderId}`)
      .pipe(
        map(
          (response: ApiResponse<PortfolioRiskScore[]>) =>
            response.data as PortfolioRiskScore[]
        )
      );
  }

  getPortfolioOverallSnapshotByFunderId(funderId: number) {
    return this.factory
      .get(`${this.endPoint}/portfolio-overall-snapshot/funders/${funderId}`)
      .pipe(
        map(
          (response: ApiResponse<PortfolioOverallSnapshot>) =>
            response.data as PortfolioOverallSnapshot
        )
      );
  }
}
