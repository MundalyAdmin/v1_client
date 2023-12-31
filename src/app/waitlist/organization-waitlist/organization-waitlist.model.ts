import { Country } from '../../country/country.model';
import { BaseModel } from '../../shared/models/BaseModel';

export interface OrganizationWaitlist extends BaseModel {
  name: string;
  country: Country | string;
  city: string;
  organization_name: string;
  professional_email: string;
  job_title: string;
  website: string;
}
