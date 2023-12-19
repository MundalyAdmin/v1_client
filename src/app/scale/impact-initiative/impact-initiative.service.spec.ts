import { TestBed } from '@angular/core/testing';

import { ImpactInitiativeService } from './impact-initiative.service';

describe('ImpactInitiativeService', () => {
  let service: ImpactInitiativeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpactInitiativeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
