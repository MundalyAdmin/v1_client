import { Injectable } from '@angular/core';
import { BaseScaleService } from '../base-scale.service';
import { SocialImpactFidelityScore } from './social-impact-fidelity-score.model';

@Injectable({
  providedIn: 'root',
})
export class SocialImpactFidelityService extends BaseScaleService<SocialImpactFidelityScore> {
  constructor() {
    super('scale/social-impact-fidelity');
  }
}
