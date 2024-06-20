import { BaseModel } from '../../shared/models/BaseModel';

export interface ImpactInitiativeProgressData extends BaseModel {
  data?: number;
  description?: string;
  date?: Date;
  impact_initiative_goal_id?: number;

  name?: string;
}
