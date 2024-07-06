import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services';
import { OrganizationPartnerInvitation } from './organization-partner-invitation.model';
import { map, tap } from 'rxjs';
import { ApiResponse } from '../../shared/models/ApiResponse';
import { OrganizationPartnerInvitationStatusEnum } from './organization-partner-invitation-status.enum';

@Injectable({
  providedIn: 'root',
})
export class OrganizationPartnerInvitationService extends BaseService<OrganizationPartnerInvitation> {
  constructor() {
    super('organizations/partner-invitations');
  }

  getBySenderId(senderId: number) {
    return this.factory.get(`${this.endPoint}/sender/${senderId}`).pipe(
      tap((response: ApiResponse<OrganizationPartnerInvitation>) => {
        // this.data = response.data as OrganizationPartnerInvitation[];

        this.paginationInfo = {
          total: response.total,
          itemsPerPage: response.per_page,
          currentPage: response.current_page,
        };
      }),
      map(
        (response: ApiResponse<OrganizationPartnerInvitation>) =>
          response.data as OrganizationPartnerInvitation[]
      )
    );
  }

  getByReceiverId(receiverId: number) {
    return this.factory.get(`${this.endPoint}/receiver/${receiverId}`).pipe(
      tap((response: ApiResponse<OrganizationPartnerInvitation>) => {
        // this.data = response.data as OrganizationPartnerInvitation[];

        this.paginationInfo = {
          total: response.total,
          itemsPerPage: response.per_page,
          currentPage: response.current_page,
        };
      }),
      map(
        (response: ApiResponse<OrganizationPartnerInvitation>) =>
          response.data as OrganizationPartnerInvitation[]
      )
    );
  }

  updateStatus(
    organizationPartnerInvitationId: number,
    status: OrganizationPartnerInvitationStatusEnum
  ) {
    return this.factory
      .patch(`${this.endPoint}/${organizationPartnerInvitationId}/status`, {
        organization_partner_invitation_status_id: status,
      })
      .pipe(
        tap((response: ApiResponse<OrganizationPartnerInvitation>) => {
          this.deleteItemInData(organizationPartnerInvitationId);
        })
      );
  }
}
