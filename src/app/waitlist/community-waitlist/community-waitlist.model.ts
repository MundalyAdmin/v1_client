import { Country } from '../../country/country.model';
import { BaseModel } from '../../shared/models/BaseModel';

export interface CommunityWaitlist extends BaseModel {
  email?: string;
  name?: string;
  location: string;
}
