import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { Company } from './companies.model';
import { map, tap } from 'rxjs';
import { ApiResponse } from '../shared/models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService extends BaseService<Company> {
  constructor() {
    super('companies');
  }

  getByCategory(categoryId: number) {
    return this.factory.get(`${this.endPoint}/categories/${categoryId}`).pipe(
      tap((response: ApiResponse<Company>) => {
        this.data = response.data;

        this.paginationInfo = {
          total: response.total,
          itemsPerPage: response.per_page,
          currentPage: response.current_page,
        };
      }),
      map((response: ApiResponse<Company>) => response.data)
    );
  }

  getSimilar(companyId: number) {
    return this.factory.get(`${this.endPoint}/similar/${companyId}`).pipe(
      tap((response: ApiResponse<Company>) => {
        this.data = response.data;
      }),
      map((response: ApiResponse<Company>) => response.data)
    );
  }

  research(keyword: string) {
    return this.factory.get(`${this.endPoint}/search/${keyword}`).pipe(
      tap((response: ApiResponse<Company>) => {
        this.data = response.data;

        this.paginationInfo = {
          total: response.total,
          itemsPerPage: response.per_page,
          currentPage: response.current_page,
        };
      }),
      map((response: ApiResponse<Company>) => response.data)
    );
  }

  searchNames(keyword: string) {
    return this.factory.get(`${this.endPoint}/search/names/${keyword}`).pipe(
      tap((response: ApiResponse<{ name: string }>) => {}),
      map((response: ApiResponse<{ name: string }>) => response.data)
    );
  }
}
