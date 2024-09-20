import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiResponse } from '../shared/models/ApiResponse';
import { BaseService } from '../shared/services';
import { CitySearchResult } from './city-search-result.model';
import { Country } from './country.model';

@Injectable({
  providedIn: 'root',
})
export class CountryService extends BaseService<Country> {
  constructor() {
    super('countries');
  }

  getCountriesByFunderIdAndTypeInsightId(
    funderId: number,
    typeInsightId: number
  ) {
    return this.factory
      .get(
        `${this.endPoint}/funders/${funderId}/type-insights/${typeInsightId}`
      )
      .pipe(map((response: ApiResponse<Country>) => response.data));
  }

  getCitiesByFunderIdAndTypeInsightId(funderId: number, typeInsightId: number) {
    return this.factory
      .get(
        `${this.endPoint}/cities/funders/${funderId}/type-insights/${typeInsightId}`
      )
      .pipe(map((response: ApiResponse<CitySearchResult>) => response.data));
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
