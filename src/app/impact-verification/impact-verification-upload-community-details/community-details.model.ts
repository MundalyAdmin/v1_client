import { BaseModel } from '../../shared/models/BaseModel';

export interface CommunityMemberDetails extends BaseModel {
  phone_number: string;
  email?: string;
}
