import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { Country } from './country.model';
import { map } from 'rxjs';
import { ApiResponse } from '../shared/models/ApiResponse';
import { CitySearchResult } from './city-search-result.model';

@Injectable({
  providedIn: 'root',
})
export class CountryService extends BaseService<Country> {
  constructor() {
    super('countries');
  }

  searchCitiesByName(name: string) {
    return this.factory
      .get(`${this.endPoint}/cities/${name}`)
      .pipe(
        map(
          (response: ApiResponse<CitySearchResult>) =>
            response.data as CitySearchResult[]
        )
      );
  }
}
