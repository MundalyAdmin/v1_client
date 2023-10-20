import { Country } from '../../country/country.model';
import { BaseModel } from '../../shared/models/BaseModel';

export interface BusinessWaitlist extends BaseModel {
  name: string;
  country_id: string;
  country: Country;
  company_name: string;
  professional_email: string;
  job_title: string;
  website: string;
}
