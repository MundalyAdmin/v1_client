import { TestBed } from '@angular/core/testing';

import { OrganizationSurveyDataUploadService } from './organization-survey-data-upload.service';

describe('OrganizationSurveyDataUploadService', () => {
  let service: OrganizationSurveyDataUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationSurveyDataUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
