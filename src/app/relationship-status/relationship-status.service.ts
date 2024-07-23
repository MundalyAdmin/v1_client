import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { RelationshipStatus } from './relationship-status.model';

@Injectable({
  providedIn: 'root',
})
export class RelationshipStatusService extends BaseService<RelationshipStatus> {
  constructor() {
    super('relationship-status');
  }
}
