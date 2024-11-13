import { TypeCommunityMemberEnum } from './impact-verification-upload-community-details/type-community-member.enum';
import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services';
import { ImpactVerification } from './impact-verification.model';
import { BehaviorSubject, catchError, map, tap } from 'rxjs';
import { OrganizationService } from '../organization/organization.service';
import { ApiResponse } from '../shared/models/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class ImpactVerificationService extends BaseService<ImpactVerification> {
  typeCommunityMember$ = new BehaviorSubject<TypeCommunityMemberEnum>(
    TypeCommunityMemberEnum.COMMUNITY_MEMBER
  );

  constructor(public organizationService: OrganizationService) {
    super('impact-verifications');
  }

  set typeCommunityMember(value: TypeCommunityMemberEnum) {
    this.typeCommunityMember$.next(value);
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
        map(
          (response: ApiResponse<ImpactVerification>) =>
            response.data as ImpactVerification[]
        )
      );
  }

  uploadCommunityMembersDetails(elements: any) {
    return this.factory
      .post(`${this.endPoint}/community-details`, elements)
      .pipe(
        tap((response) => {
          const data = response.data;
          switch (elements.type_impact_verification_community_details_id) {
            case TypeCommunityMemberEnum.COMMUNITY_MEMBER:
              data.is_community_members_uploaded = true;
              break;
            case TypeCommunityMemberEnum.STAFF_MEMBER:
              data.is_staff_members_uploaded = true;
              break;
          }
          this.updateItemInData(response.data.id, data);
          this.notification$.next({});
        }),
        catchError((error) => {
          this.errorResponseHandler(error);
          throw error;
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
