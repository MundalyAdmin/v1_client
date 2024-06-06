import { Country } from '../../country/country.model';
import { Organization } from '../../organization/organization.model';
import { BaseModel } from '../../shared/models/BaseModel';

export interface ImpactInitiative extends BaseModel {
  name?: string;

  country?: string;

  city?: string;

  description?: string;

  progress?: number;

  impact_strength?: number;

  organization_id?: number;

  date?: Date;

  organization?: Organization;
}
