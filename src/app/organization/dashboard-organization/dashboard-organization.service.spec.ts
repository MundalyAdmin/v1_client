import { TestBed } from '@angular/core/testing';

import { DashboardOrganizationService } from './dashboard-organization.service';

describe('DashboardOrganizationService', () => {
  let service: DashboardOrganizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardOrganizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
