import { BaseModel } from '../../../shared/models/BaseModel';
import { Organization } from '../../organization.model';

export interface ImpactPartner extends BaseModel {
  funder_id: number;
  implementer?: Organization;
  implementer_id?: number;
  implementer_admin_email: string;
  status: string;
  community_trust_score?: number;
  wellbeing_score?: number;
  scale_score?: number;
}
