import { Injectable } from '@angular/core';
import { BaseService } from '../../../shared/services';
import { TypeMetricImpactInitiativeGoal } from './type-metric-impact-initiative-goal.model';

@Injectable({
  providedIn: 'root',
})
export class TypeMetricImpactInitiativeGoalService extends BaseService<TypeMetricImpactInitiativeGoal> {
  constructor() {
    super('type-metric-impact-initiative-goal');
  }
}
