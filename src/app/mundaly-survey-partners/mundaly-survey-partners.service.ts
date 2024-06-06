import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { MundalySurveyPartner } from './mundaly-survey-partner.model';

@Injectable({
  providedIn: 'root',
})
export class MundalySurveyPartnersService extends BaseService<MundalySurveyPartner> {
  constructor() {
    super('mundaly-survey-partners');
  }
}
