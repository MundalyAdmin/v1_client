import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { Country } from './country.model';

@Injectable({
  providedIn: 'root',
})
export class CountryService extends BaseService<Country> {
  constructor() {
    super('countries');
  }
}
