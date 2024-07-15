import { TestBed } from '@angular/core/testing';

import { ImpactVerificationPricingTierService } from './impact-verification-pricing-tier.service';

describe('ImpactVerificationPricingTierService', () => {
  let service: ImpactVerificationPricingTierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpactVerificationPricingTierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
