import { TestBed } from '@angular/core/testing';

import { BaseScaleService } from './base-scale.service';

describe('BaseScaleService', () => {
  let service: BaseScaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseScaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
