import { TestBed } from '@angular/core/testing';

import { ImpactInitiativeProgressDataService } from './impact-initiative-progress-data.service';

describe('ImpactInitiativeProgressDataService', () => {
  let service: ImpactInitiativeProgressDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpactInitiativeProgressDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
