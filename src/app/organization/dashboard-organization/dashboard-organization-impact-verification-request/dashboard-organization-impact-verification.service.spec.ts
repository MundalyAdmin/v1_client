import { TestBed } from '@angular/core/testing';

import { DashboardOrganizationDueDiligenceService } from './dashboard-organization-due-diligence.service';

describe('DashboardOrganizationDueDiligenceService', () => {
  let service: DashboardOrganizationDueDiligenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardOrganizationDueDiligenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
