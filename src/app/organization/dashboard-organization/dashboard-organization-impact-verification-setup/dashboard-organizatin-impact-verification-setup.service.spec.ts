import { TestBed } from '@angular/core/testing';

import { DashboardOrganizatinImpactVerificationSetupService } from './dashboard-organizatin-impact-verification-setup.service';

describe('DashboardOrganizatinImpactVerificationSetupService', () => {
  let service: DashboardOrganizatinImpactVerificationSetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardOrganizatinImpactVerificationSetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
