import { TestBed } from '@angular/core/testing';

import { ImpactStoryOrganizationService } from './impact-story-organization.service';

describe('ImpactStoryOrganizationService', () => {
  let service: ImpactStoryOrganizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpactStoryOrganizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
