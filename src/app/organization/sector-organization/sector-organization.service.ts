import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { SectorOrganization } from './sector-organization.model';

@Injectable({
  providedIn: 'root',
})
export class SectorOrganizationService extends BaseService<SectorOrganization> {
  constructor() {
    super('sector-organizations');
  }
}
