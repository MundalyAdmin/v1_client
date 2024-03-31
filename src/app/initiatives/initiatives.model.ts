import { BaseModel } from '../shared/models/BaseModel';
import { ImpactInitiativeGoal } from './impact-initiative-goal/impact-initiative-goal.model';

export interface ImpactInitiative extends BaseModel {
  name: string;
  description?: string;
  startDate: Date;
  endDate?: Date;
  country?: string;
  city?: string;
  ethnicity?: string;
  sex?: 'Male' | 'Female' | 'All';
  ageRangeStart?: number;
  ageRangeEnd?: number;
}
