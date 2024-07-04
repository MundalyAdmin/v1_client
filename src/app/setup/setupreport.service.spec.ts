import { TestBed } from '@angular/core/testing';

import { SetupreportService } from './setupreport.service';

describe('SetupreportService', () => {
  let service: SetupreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
