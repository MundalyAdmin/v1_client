import { BaseModel } from '../../shared/models/BaseModel';

export interface ImpactVerificationPricingTier extends BaseModel {
  community_reach_level_id: number;
  min_number_of_participants: number;
  max_number_of_participants: number;
  price: string;
}
