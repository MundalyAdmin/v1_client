import { Injectable } from '@angular/core';
import { BaseService } from '../../../shared/services';
import { OrganizationReport } from './organization-report.model';
import { map, tap } from 'rxjs';
import { ApiResponse } from '../../../shared/models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class OrganizationReportService extends BaseService<OrganizationReport> {
  constructor() {
    super('organization-reports');
  }

  getByOrganizationId(organizationId: number) {
    return this.factory
      .get(`${this.endPoint}/organizations/${organizationId}`)
      .pipe(
        tap((response: ApiResponse<OrganizationReport>) => {
          this.data = response.data as OrganizationReport[];

          this.paginationInfo = {
            total: response.total,
            itemsPerPage: response.per_page,
            currentPage: response.current_page,
          };
        }),
        map((response: ApiResponse<OrganizationReport>) => response.data)
      );
  }
}
