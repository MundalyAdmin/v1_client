import { BaseScaleScore } from '../../scale/base-scale-score.model';

export interface PhysicalWellbeingScoring extends BaseScaleScore {
  capacity_of_daily_activities: number;
  medication_dependence: number;
  energy_and_fatigue: number;
  mobility: number;
  sleep_and_rest: number;
  pain_and_discomfort: number;
  work_capacity: number;
}
