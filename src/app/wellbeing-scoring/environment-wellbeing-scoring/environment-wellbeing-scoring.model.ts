import { BaseScaleScore } from '../../scale/base-scale-score.model';

export interface EnvironmentWellbeingScoring extends BaseScaleScore {
  safety: number;
  pollution_free: number;
  financial_capacity: number;
  access_to_information: number;
  leisure_opportunities: number;
  living_space_quality: number;
  healthcare_access: number;
  transport_access: number;
}
