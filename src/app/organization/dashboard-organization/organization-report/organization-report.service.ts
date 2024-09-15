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

  getByOrganizationInquirerAndTypeInsights(
    organizationId: number,
    inquirerId: number,
    typeInsightsId: number,
    options?: { params: any }
  ) {
    return this.factory
      .get(
        `${this.endPoint}/organizations/${organizationId}/inquirers/${inquirerId}/type-insights/${typeInsightsId}`,
        options
      )
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

  getByOrganizationId(organizationId: number, options?: { params: any }) {
    return this.factory
      .get(`${this.endPoint}/organizations/${organizationId}`, options)
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

  getByImpactInitiativeId(impactInitiativeId: number) {
    return this.factory
      .get(`${this.endPoint}/impact-initiatives/${impactInitiativeId}`)
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
