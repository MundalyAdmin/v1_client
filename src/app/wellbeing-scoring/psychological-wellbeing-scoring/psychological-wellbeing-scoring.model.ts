import { BaseScaleScore } from '../../scale/base-scale-score.model';

export interface PsychologicalWellbeingScoring extends BaseScaleScore {
  contentment: number;
  self_confidence: number;
  concentration: number;
  bodily_image_and_appearance: number;
  self_esteem: number;
  anxiety_and_depression: number;
}
