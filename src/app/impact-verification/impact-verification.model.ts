import { Organization } from '../organization/organization.model';
import { BaseModel } from '../shared/models/BaseModel';

interface CommonItem {
  id: number;
  name: string;
}

export interface ImpactVerification extends BaseModel {
  inquirer_id?: number;

  type_impact_verification_id?: number;

  status_impact_verification_id?: number;

  verified_organizations?: Organization[];

  inquirer?: Organization;

  type_impact_verification?: CommonItem;

  status_impact_verification?: CommonItem;
}
