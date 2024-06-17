import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { TypeOrganization } from './type-organization.model';
import { map, tap } from 'rxjs';
import { ApiResponse } from '../../shared/models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class TypeOrganizationService extends BaseService<TypeOrganization> {
  constructor() {
    super('type-organizations');
  }

  getByCategoryOrganization(categoryOrganizationId: number) {
    return this.factory
      .get(`${this.endPoint}/category-organizations/${categoryOrganizationId}`)
      .pipe(
        tap((response: ApiResponse<TypeOrganization>) => {
          this.data = response.data as TypeOrganization[];

          this.paginationInfo = {
            total: response.total,
            itemsPerPage: response.per_page,
            currentPage: response.current_page,
          };
        }),
        map((response: ApiResponse<TypeOrganization>) => response.data)
      );
  }
}
