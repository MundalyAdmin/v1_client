import { ImpactInitiative } from '../../scale/impact-initiative/impact-initiative.model';
import { BaseModel } from '../../shared/models/BaseModel';
import { TypeMetricImpactInitiativeGoal } from '../components/type-metric-impact-initiative-goal/type-metric-impact-initiative-goal.model';

export interface ImpactInitiativeGoal extends BaseModel {
  impact_initiative_id: number;

  name: string;

  type_metric_impact_initiative_goal_id: number;

  type_metric_impact_initiative_goal: TypeMetricImpactInitiativeGoal;

  metric_name: string;

  metric_target: number;

  starting_value: number;

  total_progress: number;

  total_progress_percentage: number;

  impact_initiative: ImpactInitiative;
}
