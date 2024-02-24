import { TestBed } from '@angular/core/testing';

import { ResearchPartnerService } from './research-partner.service';

describe('ResearchPartnerService', () => {
  let service: ResearchPartnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResearchPartnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
