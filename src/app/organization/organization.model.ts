import { Country } from '../country/country.model';
import { BaseModel } from '../shared/models/BaseModel';
import { ProfileStatusOrganization } from './profile-status-organization/profile-status-organization.model';
import { Scale } from './scale/scale.model';
import { SectorOrganization } from './sector-organization/sector-organization.model';
import { TagOrganization } from './tag-organization/tag-organization.model';
import { TypeOrganization } from './type-organization/type-organization.model';

export interface Organization extends BaseModel {
  name?: string;

  about?: string;

  logo?: string;

  website?: string;

  email?: string;

  logo_thumb?: string;

  sector_organization_id?: number;

  type_organization_id?: number;

  country_id?: number;

  location?: string;

  profile_status_organization_id?: number;

  country?: Country;

  sector_organization?: SectorOrganization;

  type_organization?: TypeOrganization;

  profile_status_organization?: ProfileStatusOrganization;

  scale?: Scale;

  tag_organizations?: TagOrganization[];

  creator_id?: number;
}
