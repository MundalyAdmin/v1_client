import { Organization } from '../organization.model';

export interface SectorOrganization {
  id: number;
  name: string;
  description: string;
  icon: string;
  organization?: Organization[];
}
