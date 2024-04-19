import { TestBed } from '@angular/core/testing';

import { ImpactPartnerService } from './impact-partner.service';

describe('ImpactPartnerService', () => {
  let service: ImpactPartnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpactPartnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
