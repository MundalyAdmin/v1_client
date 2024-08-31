import { Injectable } from '@angular/core';
import { BaseScaleService } from '../../scale/base-scale.service';
import { SocialWellbeingScoring } from '../social-wellbeing-scoring/social-wellbeing-scoring.model';
import { EnvironmentWellbeingScoring } from './environment-wellbeing-scoring.model';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentWellbeingScoringService extends BaseScaleService<EnvironmentWellbeingScoring> {
  constructor() {
    super('wellbeing-scoring/environment-wellbeing-scoring');
  }
}
