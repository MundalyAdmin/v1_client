import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { ImpactVerification } from './impact-verification.model';
import { map, tap } from 'rxjs';
import { OrganizationService } from '../organization/organization.service';
import { ApiResponse } from '../shared/models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class ImpactVerificationService extends BaseService<ImpactVerification> {
  constructor(public organizationService: OrganizationService) {
    super('impact-verifications');
  }

  updateStatus(id: number, statusId: number) {
    return this.factory
      .patch(`${this.endPoint}/${id}/status`, {
        status_impact_verification_id: statusId,
      })
      .pipe(
        tap({
          next: (response) => {
            this.lastItemEdited$ = response.data;
            this.updateItemInData(id, response.data);
            this.notification$.next({});
          },
          error: (error) => {
            this.errorResponseHandler(error);
          },
        })
      );
  }

  relauch(id: number) {
    return this.factory.put(`${this.endPoint}/${id}/relaunch`, {}).pipe(
      tap({
        next: (response) => {
          this.updateItemInData(id, response.data);
          this.notification$.next({});
        },
        error: (error) => {
          this.errorResponseHandler(error);
        },
      })
    );
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

  getByInquirerId(inquirerId: number) {
    return this.factory.get(`${this.endPoint}/inquirer/${inquirerId}`).pipe(
      tap((response: ApiResponse<ImpactVerification>) => {
        this.data = response.data as ImpactVerification[];

        this.paginationInfo = {
          total: response.total,
          itemsPerPage: response.per_page,
          currentPage: response.current_page,
        };
      }),
      map((response: ApiResponse<ImpactVerification>) => response.data)
    );
  }

  getByVerifiedOrganizationId(verifiedOrganizationId: number) {
    return this.factory
      .get(`${this.endPoint}/verified-organizations/${verifiedOrganizationId}`)
      .pipe(
        tap((response: ApiResponse<ImpactVerification>) => {
          this.data = response.data as ImpactVerification[];

          this.paginationInfo = {
            total: response.total,
            itemsPerPage: response.per_page,
            currentPage: response.current_page,
          };
        }),
        map((response: ApiResponse<ImpactVerification>) => response.data)
      );
  }

  uploadCommunityMembersDetails(elements: any) {
    return this.factory
      .post(`${this.endPoint}/community-details`, elements)
      .pipe(
        tap({
          next: (response) => {
            this.updateItemInData(response.data.id, response.data);
            this.notification$.next({});
          },
          error: (error) => {
            this.errorResponseHandler(error);
          },
        })
      );
  }

  countReceivedByOrganizationId(organization: number) {
    return this.factory
      .get(`${this.endPoint}/organizations/${organization}/received/count`)
      .pipe(
        map(
          (response: ApiResponse<{ count: number }>) =>
            response.data as { count: number }
        )
      );
  }

  countRequestedByOrganizationId(organization: number) {
    return this.factory
      .get(`${this.endPoint}/organizations/${organization}/requested/count`)
      .pipe(
        map(
          (response: ApiResponse<{ count: number }>) =>
            response.data as { count: number }
        )
      );
  }
}
