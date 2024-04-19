import { Injectable } from '@angular/core';
import { BaseService } from '../../../shared/services';
import { ImpactPartner } from './impact-partner.model';
import { map, tap } from 'rxjs';
import { ApiResponse } from '../../../shared/models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class ImpactPartnerService extends BaseService<ImpactPartner> {
  constructor() {
    super('impact-partner');
  }

  getByFunderId(funderId: number) {
    return this.factory.get(`${this.endPoint}/funder/${funderId}`).pipe(
      tap((response: ApiResponse<ImpactPartner>) => {
        this.data = response.data as ImpactPartner[];

        this.paginationInfo = {
          total: response.total,
          itemsPerPage: response.per_page,
          currentPage: response.current_page,
        };
      }),
      map(
        (response: ApiResponse<ImpactPartner>) =>
          response.data as ImpactPartner[]
      )
    );
  }
}
