import { TestBed } from '@angular/core/testing';

import { SectorOrganizationService } from './sector-organization.service';

describe('SectorOrganizationService', () => {
  let service: SectorOrganizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectorOrganizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
