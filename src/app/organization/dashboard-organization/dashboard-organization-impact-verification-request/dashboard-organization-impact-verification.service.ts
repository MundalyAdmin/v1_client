import { Injectable } from '@angular/core';
import { BaseService } from '../../../shared/services';

@Injectable({
  providedIn: 'root',
})
export class DashboardOrganizationImpactVerificationService extends BaseService<any> {
  constructor() {
    super('organization-impact-verification-request');
  }
}
