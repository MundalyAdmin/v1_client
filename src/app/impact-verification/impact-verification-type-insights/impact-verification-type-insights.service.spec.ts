import { TestBed } from '@angular/core/testing';

import { ImpactVerificationTypeInsightsService } from './impact-verification-type-insights.service';

describe('ImpactVerificationTypeInsightsService', () => {
  let service: ImpactVerificationTypeInsightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpactVerificationTypeInsightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
