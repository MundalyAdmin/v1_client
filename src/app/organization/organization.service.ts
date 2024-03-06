import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { Organization } from './organization.model';
import { debounceTime, map, tap } from 'rxjs';
import { ApiResponse } from '../shared/models/ApiResponse';
import { OrganizationSearchData } from '../public/public-community/organization/organization-search-data.model';

@Injectable({
  providedIn: 'root',
})
export class OrganizationService extends BaseService<Organization> {
  constructor() {
    super('organizations');
  }

  getBySectorOrganization(sectorOrganizationId: number) {
    return this.factory
      .get(`${this.endPoint}/sector-organizations/${sectorOrganizationId}`)
      .pipe(
        tap((response: ApiResponse<Organization>) => {
          this.data = response.data as Organization[];

          this.paginationInfo = {
            total: response.total,
            itemsPerPage: response.per_page,
            currentPage: response.current_page,
          };
        }),
        map((response: ApiResponse<Organization>) => response.data)
      );
  }

  getSimilar(organizationId: number) {
    return this.factory.get(`${this.endPoint}/random/${organizationId}`).pipe(
      tap((response: ApiResponse<Organization>) => {
        this.data = response.data as Organization[];
      }),
      map(
        (response: ApiResponse<Organization>) => response.data as Organization[]
      )
    );
  }

  search(searchData: OrganizationSearchData) {
    return this.factory
      .get(`${this.endPoint}/search`, { params: searchData })
      .pipe(
        tap((response: ApiResponse<Organization>) => {
          this.data = response.data as Organization[];

          this.paginationInfo = {
            total: response.total,
            itemsPerPage: response.per_page,
            currentPage: response.current_page,
          };
        }),
        map((response: ApiResponse<Organization>) => response.data)
      );
  }

  searchNames(keyword: string) {
    return this.factory
      .get(`${this.endPoint}/search/names/${keyword}`)
      .pipe(
        map(
          (response: ApiResponse<{ name: string; logo: string }>) =>
            response.data as { name: string; logo: string }[]
        )
      );
  }

  getIdByWebsiteUrl(websiteUrl: string) {
    return this.factory
      .get(`${this.endPoint}/website`, { params: { websiteUrl } })
      .pipe(
        map(
          (response: ApiResponse<Partial<Organization>>) =>
            response.data as Partial<Organization>
        )
      );
  }

  getTopRated() {
    return this.factory
      .get(`${this.endPoint}/top-rated`)

      .pipe(
        tap((response: ApiResponse<Organization>) => {
          this.data = response.data as Organization[];

          this.paginationInfo = {
            total: response.total,
            itemsPerPage: response.per_page,
            currentPage: response.current_page,
          };
        }),
        map((response: ApiResponse<Organization>) => response.data)
      );
  }

  getPortfolio() {
    return this.factory
      .get(`${this.endPoint}/portfolio`)

      .pipe(
        tap((response: ApiResponse<Organization>) => {
          this.data = response.data as Organization[];

          this.paginationInfo = {
            total: response.total,
            itemsPerPage: response.per_page,
            currentPage: response.current_page,
          };
        }),
        map((response: ApiResponse<Organization>) => response.data)
      );
  }
}
