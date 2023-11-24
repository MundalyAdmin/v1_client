import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { TagOrganization } from './tag-organization.model';

@Injectable({
  providedIn: 'root',
})
export class TagOrganizationService extends BaseService<TagOrganization> {
  constructor() {
    super('tag-organizations');
  }
}
