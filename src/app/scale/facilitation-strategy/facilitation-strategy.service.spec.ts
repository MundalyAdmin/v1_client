import { TestBed } from '@angular/core/testing';

import { FacilitationStrategyService } from './facilitation-strategy.service';

describe('FacilitationStrategyService', () => {
  let service: FacilitationStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacilitationStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
