import { TestBed } from '@angular/core/testing';

import { ImpactVerificationService } from './impact-verification.service';

describe('ImpactVerificationService', () => {
  let service: ImpactVerificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpactVerificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
