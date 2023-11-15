import { TestBed } from '@angular/core/testing';

import { TagOrganizationService } from './tag-organization.service';

describe('TagOrganizationService', () => {
  let service: TagOrganizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagOrganizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
