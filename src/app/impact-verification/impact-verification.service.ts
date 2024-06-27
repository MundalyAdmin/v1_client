import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { ImpactVerification } from './impact-verification.model';
import { tap } from 'rxjs';
import { OrganizationService } from '../organization/organization.service';

@Injectable({
  providedIn: 'root',
})
export class ImpactVerificationService extends BaseService<ImpactVerification> {
  constructor(public organizationService: OrganizationService) {
    super('impact-verifications');
  }

  override store(elements: any) {
    return this.factory.post(this.endPoint, elements).pipe(
      tap({
        next: (response) => {
          this.lastItemCreated = response.data;
          this.unshiftItemInData(response.data);

          if (this.organizationService.singleData) {
            this.organizationService.singleData[
              'verification_status_from_current_organization'
            ] = response.data.status_impact_verification;

            this.organizationService.emitSingleData();
          }
        },
        error: (error) => {
          this.errorResponseHandler(error);
        },
      })
    );
  }
}
