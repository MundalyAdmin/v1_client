import { BaseModel } from '../../shared/models/BaseModel';

export interface ReportDemographic extends BaseModel {
  sex?: string[];
  age_range: string[];
  relationship_status?: string[];
  ethnicity: string[];
}
