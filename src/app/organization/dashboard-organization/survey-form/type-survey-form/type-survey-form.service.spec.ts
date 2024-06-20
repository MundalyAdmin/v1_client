import { TestBed } from '@angular/core/testing';

import { TypeSurveyFormService } from './type-survey-form.service';

describe('TypeSurveyFormService', () => {
  let service: TypeSurveyFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeSurveyFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
