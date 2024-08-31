import { Injectable } from '@angular/core';
import { BaseScaleService } from '../../scale/base-scale.service';
import { SocialWellbeingScoring } from './social-wellbeing-scoring.model';

@Injectable({
  providedIn: 'root',
})
export class SocialWellbeingScoringService extends BaseScaleService<SocialWellbeingScoring> {
  constructor() {
    super('wellbeing-scoring/social-wellbeing-scoring');
  }
}
