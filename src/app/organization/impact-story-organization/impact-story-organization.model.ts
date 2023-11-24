import { BaseModel } from '../../shared/models/BaseModel';

export interface ImpactStoryOrganization extends BaseModel {
  title?: string;

  description?: string;

  video?: string;

  username?: string;

  what_role?: string;

  what_like?: string;

  what_happened?: string;

  what_improve?: string;

  organization_id?: number;

  rating?: number;
}
