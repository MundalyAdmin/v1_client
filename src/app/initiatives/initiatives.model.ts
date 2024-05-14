import { BaseModel } from '../shared/models/BaseModel';
import { ImpactInitiativeGoal } from './impact-initiative-goal/impact-initiative-goal.model';

export interface ImpactInitiative extends BaseModel {
  name: string;
  description?: string;
  start: Date;
  endDate?: Date;
  country?: string;
  city?: string;

  sexes: { id: number; name: string }[];
  age_ranges?: { id: number; name: string }[];
  ethnicities?: { id: number; name: string }[];
  relationship_status?: { id: number; name: string }[];
}
