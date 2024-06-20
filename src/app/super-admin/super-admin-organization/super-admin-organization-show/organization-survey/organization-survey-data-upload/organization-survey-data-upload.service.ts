import { Injectable } from '@angular/core';
import { BaseService } from '../../../../../shared/services';

@Injectable({
  providedIn: 'root',
})
export class OrganizationSurveyDataUploadService extends BaseService<any> {
  constructor() {
    super('upload-community-data');
  }
}
