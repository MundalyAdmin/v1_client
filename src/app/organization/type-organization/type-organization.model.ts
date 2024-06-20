import { BaseModel } from '../../shared/models/BaseModel';

export interface TypeOrganization extends BaseModel {
  name: string;

  category_organization_id: number;
}
