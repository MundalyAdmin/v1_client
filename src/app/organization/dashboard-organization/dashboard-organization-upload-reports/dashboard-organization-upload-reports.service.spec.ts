import { TestBed } from '@angular/core/testing';

import { DashboardOrganizationUploadReportsService } from './dashboard-organization-upload-reports.service';

describe('DashboardOrganizationUploadReportsService', () => {
  let service: DashboardOrganizationUploadReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardOrganizationUploadReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
