import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { CommunityNeeds } from './community-needs.model';
import { map, tap } from 'rxjs';
import { ApiResponse } from '../../shared/models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class CommunityNeedsService extends BaseService<CommunityNeeds> {
  constructor() {
    super('community-needs');
  }

  getByOrganizationAndByYear(organizationId: number, year: number) {
    return this.factory
      .get(`${this.endPoint}/organizations/${organizationId}/year/${year}`)
      .pipe(
        tap((response: ApiResponse<CommunityNeeds>) => {
          this.paginationInfo = {
            total: response.total,
            itemsPerPage: response.per_page,
            currentPage: response.current_page,
          };
        }),
        map(
          (response: ApiResponse<CommunityNeeds>) =>
            response.data as CommunityNeeds[]
        )
      );
  }
}
