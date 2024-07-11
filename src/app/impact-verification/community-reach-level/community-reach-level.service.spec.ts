import { TestBed } from '@angular/core/testing';

import { CommunityReachLevelService } from './community-reach-level.service';

describe('CommunityReachLevelService', () => {
  let service: CommunityReachLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunityReachLevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
