import { TestBed } from '@angular/core/testing';

import { RelationshipStatusService } from './relationship-status.service';

describe('RelationshipStatusService', () => {
  let service: RelationshipStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelationshipStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
