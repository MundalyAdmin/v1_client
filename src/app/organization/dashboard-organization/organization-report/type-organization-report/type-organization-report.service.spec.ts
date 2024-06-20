import { TestBed } from '@angular/core/testing';

import { TypeOrganizationReportService } from './type-organization-report.service';

describe('TypeOrganizationReportService', () => {
  let service: TypeOrganizationReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeOrganizationReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
