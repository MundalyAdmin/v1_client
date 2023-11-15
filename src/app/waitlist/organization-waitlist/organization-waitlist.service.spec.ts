import { TestBed } from '@angular/core/testing';

import { OrganizationWaitlistService } from './organization-waitlist.service';

describe('OrganizationWaitlistService', () => {
  let service: OrganizationWaitlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationWaitlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
