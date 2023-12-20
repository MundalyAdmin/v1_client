import { TestBed } from '@angular/core/testing';

import { SocialImpactFidelityService } from './social-impact-fidelity.service';

describe('ImpactFidelityService', () => {
  let service: SocialImpactFidelityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialImpactFidelityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
