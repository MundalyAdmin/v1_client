import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { ImpactVerificationTypeInsights } from './impact-verification-type-insights.model';

@Injectable({
  providedIn: 'root',
})
export class ImpactVerificationTypeInsightsService extends BaseService<ImpactVerificationTypeInsights> {
  constructor() {
    super('impact-verifications/type-insights');
  }
}
