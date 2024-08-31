import { TestBed } from '@angular/core/testing';

import { WellbeingScoringService } from './wellbeing-scoring.service';

describe('WellbeingScoringService', () => {
  let service: WellbeingScoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WellbeingScoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
