import { TestBed } from '@angular/core/testing';

import { CommunityPerceptionIndexService } from './community-perception-index.service';

describe('CommunityPerceptionIndexService', () => {
  let service: CommunityPerceptionIndexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunityPerceptionIndexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
