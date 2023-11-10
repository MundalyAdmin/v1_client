import { TestBed } from '@angular/core/testing';

import { TypeOrganizationService } from './type-organization.service';

describe('TypeOrganizationService', () => {
  let service: TypeOrganizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeOrganizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
