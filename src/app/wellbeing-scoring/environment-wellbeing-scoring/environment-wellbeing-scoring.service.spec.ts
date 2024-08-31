import { TestBed } from '@angular/core/testing';

import { EnvironmentWellbeingScoringService } from './environment-wellbeing-scoring.service';

describe('EnvironmentWellbeingScoringService', () => {
  let service: EnvironmentWellbeingScoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvironmentWellbeingScoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
