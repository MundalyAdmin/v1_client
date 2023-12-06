import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { ImpactStory } from './impact-story.model';
import { Params } from '@angular/router';
import { tap, map } from 'rxjs/operators';
import { ApiResponse } from '../../shared/models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class ImpactStoryService extends BaseService<ImpactStory> {
  constructor() {
    super('impact-storys');
  }

  getByOrganizationId(organizationId: number, params?: Params) {
    return this.factory
      .get(`${this.endPoint}/organizations/${organizationId}`, { params })
      .pipe(
        tap((response: ApiResponse<ImpactStory>) => {
          this.data = response.data as ImpactStory[];

          this.paginationInfo = {
            total: response.total,
            itemsPerPage: response.per_page,
            currentPage: response.current_page,
          };
        }),
        map(
          (response: ApiResponse<ImpactStory>) => response.data as ImpactStory[]
        )
      );
  }
}
