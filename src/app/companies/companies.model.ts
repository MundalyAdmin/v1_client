import { Category } from '../categories/categories.model';
import { Country } from '../country/country.model';
import { BaseModel } from '../shared/models/BaseModel';
import { ProfileStatus } from './profile_status/profile_status.model';
import { Scale } from './scale/scale.model';
import { Tags } from './tags/tags.model';

export interface Company extends BaseModel {
  name?: string;

  about?: string;

  logo?: string;

  website?: string;

  email?: string;

  category_id?: number;

  country_id?: number;

  location?: string;

  profile_status_id?: number;

  country?: Country;

  category?: Category;

  profile_status?: ProfileStatus;

  scale?: Scale;

  tags?: Tags[];
}
