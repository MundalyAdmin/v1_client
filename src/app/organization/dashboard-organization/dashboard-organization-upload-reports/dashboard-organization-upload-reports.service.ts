import { Injectable } from '@angular/core';
import { BaseService } from '../../../shared/services';

@Injectable({
  providedIn: 'root',
})
export class DashboardOrganizationUploadReportsService extends BaseService<any> {
  constructor() {
    super('upload-reports');
  }
}
