import { BaseModel } from '../../shared/models/BaseModel';
import { Organization } from '../organization.model';

export interface OrganizationPartnerInvitation extends BaseModel {
  sender_id: number;
  receiver_id: number;
  sender: Organization | null;
  receiver: Organization | null;
  partner?: Organization | null;
}
