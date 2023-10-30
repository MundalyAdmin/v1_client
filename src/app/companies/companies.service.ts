import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { Company } from './companies.model';
import { map, tap } from 'rxjs';
import { ApiResponse } from '../shared/models/ApiResponse';
import { CompanySearchData } from '../public/public-community/companies/companies-search-data.model';

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
        this.data = response.data as Company[];

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
        this.data = response.data as Company[];
      }),
      map((response: ApiResponse<Company>) => response.data as Company[])
    );
  }

  search(searchData: CompanySearchData) {
    return this.factory
      .get(`${this.endPoint}/search`, { params: searchData })
      .pipe(
        tap((response: ApiResponse<Company>) => {
          this.data = response.data as Company[];

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
    return this.factory
      .get(`${this.endPoint}/search/names/${keyword}`)
      .pipe(
        map(
          (response: ApiResponse<{ name: string }>) =>
            response.data as { name: string }[]
        )
      );
  }

  getIdByWebsiteUrl(websiteUrl: string) {
    return this.factory
      .get(`${this.endPoint}/website`, { params: { websiteUrl } })
      .pipe(
        map(
          (response: ApiResponse<Partial<Company>>) =>
            response.data as Partial<Company>
        )
      );
  }
}
