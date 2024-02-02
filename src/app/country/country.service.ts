import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { Country } from './country.model';
import { map } from 'rxjs';
import { ApiResponse } from '../shared/models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class CountryService extends BaseService<Country> {
  constructor() {
    super('countries');
  }

  getCitiesByCountry(countryName: string) {
    return this.factory
      .get(`${this.endPoint}/${countryName}/cities`)
      .pipe(map((response: ApiResponse<string>) => response.data as string[]));
  }
}
