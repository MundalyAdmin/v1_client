import { AgeRange } from '../../age-range/age-range.model';
import { Ethnicity } from '../../ethnicity/ethnicity.model';
import { RelationshipStatus } from '../../relationship-status/relationship-status.model';
import { Sex } from '../../sex/sex.model';
import { BaseModel } from '../../shared/models/BaseModel';
import { CommunityReachLevel } from '../community-reach-level/community-reach-level.model';
import { ImpactVerificationTypeInsights } from '../impact-verification-type-insights/impact-verification-type-insights.model';

export interface ImpactVerificationSetup extends BaseModel {
  impact_verification_id: number;
  location: string;
  impact_stories_enabled: boolean;
  number_of_participants: number;
  community_reach_level_id: number;
  price: number;
  community_reach_level: CommunityReachLevel;
  sexes: Sex[];
  relationship_status: RelationshipStatus[];
  ethnicities: Ethnicity[];
  age_ranges: AgeRange[];
  type_insights: ImpactVerificationTypeInsights[];
}
