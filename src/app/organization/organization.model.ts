import { Country } from '../country/country.model';
import { BaseModel } from '../shared/models/BaseModel';
import { ProfileStatusOrganization } from './profile-status-organization/profile-status-organization.model';
import { Scale } from '../scale/models/scale.model';
import { SectorOrganization } from './sector-organization/sector-organization.model';
import { TagOrganization } from './tag-organization/tag-organization.model';
import { TypeOrganization } from './type-organization/type-organization.model';
import { ImpactInitiative } from '../scale/impact-initiative/impact-initiative.model';

export interface Organization extends BaseModel {
  name?: null | string;

  about?: null | string;

  logo?: null | string;

  cover?: null | string;

  website?: null | string;

  email?: null | string;

  logo_thumb?: null | string;

  sector_organization_id?: null | number;

  type_organization_id?: null | number;

  profile_status_organization_id?: null | number;

  country?: null | string;

  city?: null | string;

  sector_organizations?: null | SectorOrganization[];

  type_organization?: null | TypeOrganization;

  profile_status_organization?: null | ProfileStatusOrganization;

  scale?: null | Scale;

  tag_organizations?: null | TagOrganization[];

  creator_id?: null | number;

  community_trust_score?: null | number;

  impact_initiatives?: ImpactInitiative[];

  verification_status_from_current_organization?: null | {
    id: number;
    name: string;
  };

  received_invitations?: number;
}
