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
}
