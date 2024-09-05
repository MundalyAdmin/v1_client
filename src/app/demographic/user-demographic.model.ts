import { BaseModel } from '../shared/models/BaseModel';

export interface UserDemographic extends BaseModel {
  sex_id: number;
  age_range_id: number;
  ethnicity_id: number;
  relationship_status_id: number;
}
