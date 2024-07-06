import { Injectable } from '@angular/core';
import { BaseService } from '../../../shared/services';

@Injectable({
  providedIn: 'root',
})
export class DashboardOrganizationDueDiligenceService extends BaseService<any> {
  constructor() {
    super('organization-due-diligence-request');
  }
}
