import { TestBed } from '@angular/core/testing';

import { SurveyQuestion } from './survey-question.service';

describe('SurveyQuestion', () => {
  let service: SurveyQuestion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyQuestion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
