import { Injectable } from '@angular/core';
import { BaseScaleService } from '../../scale/base-scale.service';
import { PsychologicalWellbeingScoring } from './psychological-wellbeing-scoring.model';

@Injectable({
  providedIn: 'root',
})
export class PsychologicalWellbeingScoringService extends BaseScaleService<PsychologicalWellbeingScoring> {
  constructor() {
    super('wellbeing-scoring/psychological-wellbeing-scoring');
  }
}
