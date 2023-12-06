import { Organization } from '../../organization/organization.model';
import { BaseModel } from '../../shared/models/BaseModel';
import { ImpactStoryReply } from './impact-story-reply/impact-story-reply.model';

export interface ImpactStory extends BaseModel {
  title?: string;

  about?: string;

  media?: string;

  organization_id?: number;

  survey_submission_id?: number;

  organization?: Organization;

  reply?: ImpactStoryReply;
}
