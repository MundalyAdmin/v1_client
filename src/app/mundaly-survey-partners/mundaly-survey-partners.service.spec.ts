import { TestBed } from '@angular/core/testing';

import { MundalySurveyPartnersService } from './mundaly-survey-partners.service';

describe('MundalySurveyPartnersService', () => {
  let service: MundalySurveyPartnersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MundalySurveyPartnersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
