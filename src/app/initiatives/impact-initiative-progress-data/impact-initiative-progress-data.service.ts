import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { ImpactInitiativeProgressData } from './impact-initiative-progress-data.model';
import { Params } from '@angular/router';
import { tap, map } from 'rxjs/operators';
import { ApiResponse } from '../../shared/models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class ImpactInitiativeProgressDataService extends BaseService<ImpactInitiativeProgressData> {
  constructor() {
    super('impact-initiative-progress-data');
  }

  getByImpactInitiativeGoalId(impactInitiativeGoalId: number, params?: Params) {
    return this.factory
      .get(
        `${this.endPoint}/impact-initiative-goal/${impactInitiativeGoalId}`,
        {
          params,
        }
      )
      .pipe(
        tap((response: ApiResponse<ImpactInitiativeProgressData>) => {
          this.data = response.data as ImpactInitiativeProgressData[];

          this.paginationInfo = {
            total: response.total,
            itemsPerPage: response.per_page,
            currentPage: response.current_page,
          };
        }),
        map(
          (response: ApiResponse<ImpactInitiativeProgressData>) =>
            response.data as ImpactInitiativeProgressData[]
        )
      );
  }
}
