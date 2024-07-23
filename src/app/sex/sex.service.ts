import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { Sex } from './sex.model';

@Injectable({
  providedIn: 'root',
})
export class SexService extends BaseService<Sex> {
  constructor() {
    super('sex');
  }
}
