import { Organization } from '../../organization.model';

export interface ImpactPartner {
  funder_id: number;
  implementer?: Organization;
  implementer_id?: number;
  implementer_admin_email: string;
  status: string;
}
