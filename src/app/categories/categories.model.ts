import { Company } from '../companies/companies.model';

export interface Category {
  id: number;
  name: string;
  description: string;
  icon: string;
  companies?: Company[];
}
