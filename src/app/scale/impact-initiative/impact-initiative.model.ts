import { Country } from '../../country/country.model';
import { Organization } from '../../organization/organization.model';

export interface ImpactInitiative {
  name: string;

  country_id: number;

  location: string;

  progress: number;

  impact_strength: number;

  organization_id: number;

  date: Date;

  organization: Organization;

  country: Country;
}
