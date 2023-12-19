import { Organization } from '../../organization/organization.model';
import { BaseModel } from '../../shared/models/BaseModel';
import { User } from '../../user/user.model';
import { ImpactStoryReply } from './impact-story-reply/impact-story-reply.model';

export interface ImpactStory extends BaseModel {
  username?: string;

  title?: string;

  about?: string;

  rating?: number;

  media?: string;

  organization_id?: number;

  survey_submission_id?: number;

  organization?: Organization;

  reply?: ImpactStoryReply;

  user_id?: number;

  user: User;
}
