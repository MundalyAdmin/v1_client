import { Injectable } from '@angular/core';
import { BaseScaleService } from '../../scale/base-scale.service';
import { PhysicalWellbeingScoring } from './physical-wellbeing-scoring.model';

@Injectable({
  providedIn: 'root',
})
export class PhysicalWellbeingScoringService extends BaseScaleService<PhysicalWellbeingScoring> {
  constructor() {
    super('wellbeing-scoring/physical-wellbeing-scoring');
  }
}
