import { TestBed } from '@angular/core/testing';

import { ImpactInitiativeGoalService } from './impact-initiative-goal.service';

describe('ImpactInitiativeGoalService', () => {
  let service: ImpactInitiativeGoalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpactInitiativeGoalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
