import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ImpactVerificationTypeInsightsEnum } from '../impact-verification/impact-verification-type-insights/impact-verification-type-insights.enum';
import { ApiResponse } from '../shared/models/ApiResponse';
import { BaseService } from '../shared/services';
import { DemographicData } from './demographic-gender-data.service';
import { UserDemographic } from './user-demographic.model';

@Injectable({
  providedIn: 'root',
})
export class DemographicService extends BaseService<UserDemographic> {
  constructor() {
    super('users/demographics');
  }

  getGenderBreakdownByFunderAndTypeInsight(
    funderId: number,
    typeInsight: ImpactVerificationTypeInsightsEnum,
    params?: any
  ) {
    return this.factory
      .get(
        `${this.endPoint}/gender-breakdown/funders/${funderId}/type-insights/${typeInsight}`,
        { params }
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
    typeInsight: ImpactVerificationTypeInsightsEnum,
    params?: any
  ) {
    return this.factory
      .get(
        `${this.endPoint}/age-breakdown/funders/${funderId}/type-insights/${typeInsight}`,
        { params }
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
    typeInsight: ImpactVerificationTypeInsightsEnum,
    params?: any
  ) {
    return this.factory
      .get(
        `${this.endPoint}/ethnicity-breakdown/funders/${funderId}/type-insights/${typeInsight}`,
        { params }
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
    typeInsight: ImpactVerificationTypeInsightsEnum,
    params?: any
  ) {
    return this.factory
      .get(
        `${this.endPoint}/relationship-status-breakdown/funders/${funderId}/type-insights/${typeInsight}`,
        { params }
      )
      .pipe(
        map(
          (response: ApiResponse<DemographicData[]>) =>
            response.data as DemographicData[]
        )
      );
  }
}
