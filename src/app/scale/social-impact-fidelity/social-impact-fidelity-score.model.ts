import { BaseScaleScore } from '../base-scale-score.model';

export interface SocialImpactFidelityScore extends BaseScaleScore {
  // Scaled from 0 to 5
  company_reported_impact_strength?: number;

  // Scaled from 0 to 100
  acceptability?: number;
  appropriateness?: number;
  comprehensiveness?: number;
  feasibility?: number;
  quality_of_delivery?: number;
}
