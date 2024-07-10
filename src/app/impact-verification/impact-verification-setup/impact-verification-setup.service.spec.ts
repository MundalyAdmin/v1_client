import { TestBed } from '@angular/core/testing';

import { ImpactVerificationSetupService } from './impact-verification-setup.service';

describe('ImpactVerificationSetupService', () => {
  let service: ImpactVerificationSetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpactVerificationSetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
