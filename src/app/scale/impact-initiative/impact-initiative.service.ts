import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { ImpactInitiative } from './impact-initiative.model';
import { Params } from '@angular/router';
import { map, tap } from 'rxjs';
import { ApiResponse } from '../../shared/models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class ImpactInitiativeService extends BaseService<ImpactInitiative> {
  constructor() {
    super('impact-initiative');
  }

  getByOrganizationId(organizationId: number, params?: Params) {
    return this.factory
      .get(`${this.endPoint}/organizations/${organizationId}`, { params })
      .pipe(
        tap((response: ApiResponse<ImpactInitiative>) => {
          this.data = response.data as ImpactInitiative[];

          this.paginationInfo = {
            total: response.total,
            itemsPerPage: response.per_page,
            currentPage: response.current_page,
          };
        }),
        map(
          (response: ApiResponse<ImpactInitiative>) =>
            response.data as ImpactInitiative[]
        )
      );
  }
}
