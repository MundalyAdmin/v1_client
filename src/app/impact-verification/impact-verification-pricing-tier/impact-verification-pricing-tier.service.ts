import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { ImpactVerificationPricingTier } from './impact-verification-pricing-tier.model';

@Injectable({
  providedIn: 'root',
})
export class ImpactVerificationPricingTierService extends BaseService<ImpactVerificationPricingTier> {
  constructor() {
    super('impact-verification-pricing-tiers');
  }
}
