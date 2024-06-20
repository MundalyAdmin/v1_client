import { Injectable } from '@angular/core';
import { BaseService } from '../../../../shared/services';
import { TypeOrganizationReport } from './type-organization-report.model';

@Injectable({
  providedIn: 'root',
})
export class TypeOrganizationReportService extends BaseService<TypeOrganizationReport> {
  constructor() {
    super('type-organization-reports');
  }
}
