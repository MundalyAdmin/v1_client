import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { CommunityReachLevel } from './community-reach-level.model';

@Injectable({
  providedIn: 'root',
})
export class CommunityReachLevelService extends BaseService<CommunityReachLevel> {
  constructor() {
    super('community-reach-levels');
  }
}
