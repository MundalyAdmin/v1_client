import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { ImpactStoryOrganization } from './impact-story-organization.model';
import { Params } from '@angular/router';
import { tap, map } from 'rxjs/operators';
import { ApiResponse } from '../../shared/models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class ImpactStoryOrganizationService extends BaseService<ImpactStoryOrganization> {
  constructor() {
    super('impact-story-organizations');
  }

  getByOrganizationId(organizationId: number, params?: Params) {
    return this.factory
      .get(`${this.endPoint}/organizations/${organizationId}`, { params })
      .pipe(
        tap((response: ApiResponse<ImpactStoryOrganization>) => {
          this.data = response.data as ImpactStoryOrganization[];

          this.paginationInfo = {
            total: response.total,
            itemsPerPage: response.per_page,
            currentPage: response.current_page,
          };
        }),
        map(
          (response: ApiResponse<ImpactStoryOrganization>) =>
            response.data as ImpactStoryOrganization[]
        )
      );
  }
}
