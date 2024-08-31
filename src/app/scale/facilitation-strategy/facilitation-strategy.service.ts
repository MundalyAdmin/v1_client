import { Injectable } from '@angular/core';
import { BaseScaleService } from '../base-scale.service';
import { FacilitationStrategyScore } from './facilitation-strategy-score.model';

@Injectable({
  providedIn: 'root',
})
export class FacilitationStrategyService extends BaseScaleService<FacilitationStrategyScore> {
  constructor() {
    super('scale/facilitation-strategy');
  }
}
