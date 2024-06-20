import { TestBed } from '@angular/core/testing';

import { TypeMetricImpactInitiativeGoalService } from './type-metric-impact-initiative-goal.service';

describe('TypeMetricImpactInitiativeGoalService', () => {
  let service: TypeMetricImpactInitiativeGoalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeMetricImpactInitiativeGoalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
