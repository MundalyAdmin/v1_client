import { TestBed } from '@angular/core/testing';

import { CommunityNeedsService } from './community-needs.service';

describe('CommunityNeedsService', () => {
  let service: CommunityNeedsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunityNeedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
