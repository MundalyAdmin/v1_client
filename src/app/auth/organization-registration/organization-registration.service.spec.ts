import { TestBed } from '@angular/core/testing';

import { OrganizationRegistrationService } from './organization-registration.service';

describe('OrganizationRegistrationService', () => {
  let service: OrganizationRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
