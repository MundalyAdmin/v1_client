import { BaseScaleScore } from '../scale/base-scale-score.model';
import { BaseModel } from '../shared/models/BaseModel';

export interface WellbeingScoring extends BaseScaleScore {
  physical_wellbeing: number;
  psychological_wellbeing: number;
  social_wellbeing: number;
  environment_wellbeing: number;
}
