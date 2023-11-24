import { Organization } from '../organization.model';

export interface SectorOrganization {
  id: number;
  name: string;
  about: string;
  icon: string;
  organization?: Organization[];
}
