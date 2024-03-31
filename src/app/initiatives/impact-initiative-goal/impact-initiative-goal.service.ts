import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { ImpactInitiativeGoal } from './impact-initiative-goal.model';
import { Params } from '@angular/router';
import { map, tap } from 'rxjs';
import { ApiResponse } from '../../shared/models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class ImpactInitiativeGoalService extends BaseService<ImpactInitiativeGoal> {
  constructor() {
    super('impact-initiative-goal');
  }

  getByImpactInitiativeId(impactInitiativeId: number, params?: Params) {
    return this.factory
      .get(`${this.endPoint}/impact-initiative/${impactInitiativeId}`, {
        params,
      })
      .pipe(
        tap((response: ApiResponse<ImpactInitiativeGoal>) => {
          this.data = response.data as ImpactInitiativeGoal[];

          this.paginationInfo = {
            total: response.total,
            itemsPerPage: response.per_page,
            currentPage: response.current_page,
          };
        }),
        map(
          (response: ApiResponse<ImpactInitiativeGoal>) =>
            response.data as ImpactInitiativeGoal[]
        )
      );
  }
}
