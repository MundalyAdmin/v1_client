import { BaseModel } from '../../shared/models/BaseModel';

export interface ImpactStoryOrganization extends BaseModel {
  title?: string;

  image?: string;

  about?: string;

  link?: string;

  organization_id?: number;
}
