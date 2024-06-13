import { Country } from '../../country/country.model';
import { Organization } from '../../organization/organization.model';
import { BaseModel } from '../../shared/models/BaseModel';
import { ImpactInitiativeStatus } from './impact-initiative-status/impact-initiative-status.model';

export interface ImpactInitiative extends BaseModel {
  name?: string;

  country?: string;

  city?: string;

  description?: string;

  progress?: number;

  impact_strength?: number;

  organization_id?: number;

  start_date?: Date;

  end_date?: Date;

  organization?: Organization;

  impact_initiative_status_id?: number;

  impact_initiative_status?: ImpactInitiativeStatus;

  community_trust_score?: number;
}
