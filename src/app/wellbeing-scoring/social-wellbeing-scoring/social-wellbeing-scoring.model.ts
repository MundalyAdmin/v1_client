import { BaseScaleScore } from '../../scale/base-scale-score.model';

export interface SocialWellbeingScoring extends BaseScaleScore {
  personal_relationships: number;
  sexual_activity: number;
  social_support: number;
}
