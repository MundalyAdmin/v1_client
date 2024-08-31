import { TestBed } from '@angular/core/testing';

import { PsychologicalWellbeingScoringService } from './psychological-wellbeing-scoring.service';

describe('PsychologicalWellbeingScoringService', () => {
  let service: PsychologicalWellbeingScoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PsychologicalWellbeingScoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
