import { TestBed } from '@angular/core/testing';

import { PhysicalWellbeingScoringService } from './physical-wellbeing-scoring.service';

describe('PhysicalWellbeingScoringService', () => {
  let service: PhysicalWellbeingScoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhysicalWellbeingScoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
