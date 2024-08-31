import { TestBed } from '@angular/core/testing';

import { SocialWellbeingScoringService } from './social-wellbeing-scoring.service';

describe('SocialWellbeingScoringService', () => {
  let service: SocialWellbeingScoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialWellbeingScoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
