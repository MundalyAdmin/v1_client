import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { Tags } from './tags.model';

@Injectable({
  providedIn: 'root',
})
export class TagOrganizationService extends BaseService<Tags> {
  constructor() {
    super('tag-organizations');
  }
}
