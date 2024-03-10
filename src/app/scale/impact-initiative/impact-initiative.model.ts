import { Country } from '../../country/country.model';
import { Organization } from '../../organization/organization.model';

export interface ImpactInitiative {
  name?: string;

  location?: string;

  progress?: number;

  impact_strength?: number;

  organization_id?: number;

  date?: Date;

  organization?: Organization;
}
