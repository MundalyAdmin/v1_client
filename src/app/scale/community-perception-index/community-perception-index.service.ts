import { Injectable } from '@angular/core';
import { BaseScaleService } from '../base-scale.service';
import { CommunityPerceptionIndexScore } from './community-perception-index-score.model';

@Injectable({
  providedIn: 'root',
})
export class CommunityPerceptionIndexService extends BaseScaleService<CommunityPerceptionIndexScore> {
  constructor() {
    super('scale/community-perception-index');
  }
}
