import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { Ethnicity } from './ethnicity.model';

@Injectable({
  providedIn: 'root',
})
export class EthnicityService extends BaseService<Ethnicity> {
  constructor() {
    super('ethnicity');
  }
}
