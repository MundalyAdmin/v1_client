import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { UserDemographic } from './user-demographic.model';
import { map } from 'rxjs';
import { ApiResponse } from '../shared/models/ApiResponse';
import { PortfolioRiskScore } from '../scale/models/portfolio-risk-score.model';
import { DemographicData as DemographicData } from './demographic-gender-data.service';

@Injectable({
  providedIn: 'root',
})
export class DemographicService extends BaseService<UserDemographic> {
  constructor() {
    super('users/demographics');
  }

  getGenderBreakdownByFunder(funderId: number) {
    return this.factory
      .get(`${this.endPoint}/gender-breakdown/funders/${funderId}`)
      .pipe(
        map(
          (response: ApiResponse<DemographicData[]>) =>
            response.data as DemographicData[]
        )
      );
  }

  getAgeRangeBreakdownByFunder(funderId: number) {
    return this.factory
      .get(`${this.endPoint}/age-breakdown/funders/${funderId}`)
      .pipe(
        map(
          (response: ApiResponse<DemographicData[]>) =>
            response.data as DemographicData[]
        )
      );
  }

  getEthnicityBreakdownByFunder(funderId: number) {
    return this.factory
      .get(`${this.endPoint}/ethnicity-breakdown/funders/${funderId}`)
      .pipe(
        map(
          (response: ApiResponse<DemographicData[]>) =>
            response.data as DemographicData[]
        )
      );
  }

  getRelationshipStatusBreakdownByFunder(funderId: number) {
    return this.factory
      .get(`${this.endPoint}/relationship-status-breakdown/funders/${funderId}`)
      .pipe(
        map(
          (response: ApiResponse<DemographicData[]>) =>
            response.data as DemographicData[]
        )
      );
  }
}
