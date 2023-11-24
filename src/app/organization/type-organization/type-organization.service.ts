import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { TypeOrganization } from './type-organization.model';

@Injectable({
  providedIn: 'root',
})
export class TypeOrganizationService extends BaseService<TypeOrganization> {
  constructor() {
    super('type-organizations');
  }
}
