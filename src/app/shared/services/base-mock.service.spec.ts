import { TestBed } from '@angular/core/testing';

import { BaseMockService } from './base-mock.service';

describe('BaseMockService', () => {
  let service: BaseMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
