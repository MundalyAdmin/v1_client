import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { Country } from './country.model';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../shared/models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class CountryService extends BaseService<Country> {
  constructor() {
    super('countries');
  }

  getCitiesByCountry(country: string) {
    return this.factory
      .get(`${this.endPoint}/${country}/cities`)
      .pipe(map((response: ApiResponse<string>) => response.data as string[]));
  }
}
