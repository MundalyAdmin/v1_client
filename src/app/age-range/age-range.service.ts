import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { AgeRange } from './age-range.model';

@Injectable({
  providedIn: 'root',
})
export class AgeRangeService extends BaseService<AgeRange> {
  constructor() {
    super('age-range');
  }
}
