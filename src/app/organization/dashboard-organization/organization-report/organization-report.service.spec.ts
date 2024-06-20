import { TestBed } from '@angular/core/testing';

import { OrganizationReportService } from './organization-report.service';

describe('OrganizationReportService', () => {
  let service: OrganizationReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
