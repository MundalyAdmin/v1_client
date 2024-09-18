import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { UserDemographic } from './user-demographic.model';
import { map } from 'rxjs';
import { ApiResponse } from '../shared/models/ApiResponse';
import { PortfolioRiskScore } from '../scale/models/portfolio-risk-score.model';
import { DemographicData as DemographicData } from './demographic-gender-data.service';
import { ImpactVerificationTypeInsightsEnum } from '../impact-verification/impact-verification-type-insights/impact-verification-type-insights.enum';

@Injectable({
  providedIn: 'root',
})
export class DemographicService extends BaseService<UserDemographic> {
  constructor() {
    super('users/demographics');
  }

  getGenderBreakdownByFunderAndTypeInsight(
    funderId: number,
    typeInsight: ImpactVerificationTypeInsightsEnum
  ) {
    return this.factory
      .get(
        `${this.endPoint}/gender-breakdown/funders/${funderId}/type-insights/${typeInsight}`
      )
      .pipe(
        map(
          (response: ApiResponse<DemographicData[]>) =>
            response.data as DemographicData[]
        )
      );
  }

  getAgeRangeBreakdownByFunderAndTypeInsight(
    funderId: number,
    typeInsight: ImpactVerificationTypeInsightsEnum
  ) {
    return this.factory
      .get(
        `${this.endPoint}/age-breakdown/funders/${funderId}/type-insights/${typeInsight}`
      )
      .pipe(
        map(
          (response: ApiResponse<DemographicData[]>) =>
            response.data as DemographicData[]
        )
      );
  }

  getEthnicityBreakdownByFunderAndTypeInsight(
    funderId: number,
    typeInsight: ImpactVerificationTypeInsightsEnum
  ) {
    return this.factory
      .get(
        `${this.endPoint}/ethnicity-breakdown/funders/${funderId}/type-insights/${typeInsight}`
      )
      .pipe(
        map(
          (response: ApiResponse<DemographicData[]>) =>
            response.data as DemographicData[]
        )
      );
  }

  getRelationshipStatusBreakdownByFunderAndTypeInsight(
    funderId: number,
    typeInsight: ImpactVerificationTypeInsightsEnum
  ) {
    return this.factory
      .get(
        `${this.endPoint}/relationship-status-breakdown/funders/${funderId}/type-insights/${typeInsight}`
      )
      .pipe(
        map(
          (response: ApiResponse<DemographicData[]>) =>
            response.data as DemographicData[]
        )
      );
  }
}
