import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { OrganizationPartnerInvitation } from '../organization-partner-invitation.model';
import { OrganizationPartnerInvitationService } from '../organization-partner-invitation.service';
import { AuthService } from '../../../auth/auth.service';
import { OrganizationPartnerInvitationStatusEnum } from '../organization-partner-invitation-status.enum';

@Component({
  selector: 'app-organization-partner-invitation-list',
  templateUrl: './organization-partner-invitation-list.component.html',
  styleUrls: ['./organization-partner-invitation-list.component.scss'],
})
export class OrganizationPartnerInvitationListComponent extends BaseComponent<OrganizationPartnerInvitation> {
  @Input({ required: true }) typeFetch: 'sender' | 'receiver' = 'sender';

  get OrganizationInvitationStatusEnum() {
    return OrganizationPartnerInvitationStatusEnum;
  }

  constructor(
    public organizationPartnerInvitationService: OrganizationPartnerInvitationService
  ) {
    super();
  }

  override ngOnInit(): void {
    this.subscriptions['organization'] =
      this.authService.organization$.subscribe((organization) => {
        if (organization) {
          if (this.typeFetch === 'sender') {
            this.getBySenderId(organization.id!);
          } else {
            this.getByReceiverId(organization.id!);
          }
        }
      });
  }

  getBySenderId(senderId: number) {
    this.loading = true;
    this.organizationPartnerInvitationService
      .getBySenderId(senderId)
      .subscribe((data) => {
        this.data = data.map((item) => ({
          ...item,
          partner: item.receiver,
        }));
        this.loading = false;
      });
  }

  getByReceiverId(receiverId: number) {
    this.loading = true;
    this.organizationPartnerInvitationService
      .getByReceiverId(receiverId)
      .subscribe((data) => {
        this.data = data.map((item) => ({
          ...item,
          partner: item.sender,
        }));
        this.loading = false;
      });
  }

  updateStatus(
    invitation: OrganizationPartnerInvitation,
    status: OrganizationPartnerInvitationStatusEnum
  ) {
    const message =
      status === OrganizationPartnerInvitationStatusEnum.ACCEPTED
        ? `Are you sure you want to accept this invitation from ${invitation.sender?.name}`
        : `Are you sure you want to reject this invitation from ${invitation.sender?.name}`;
    this.helper.notification.confirm('Invitation', message, () => {
      this.loading = true;
      this.organizationPartnerInvitationService
        .updateStatus(invitation.id!, status)
        .subscribe((data) => {
          this.helper.notification.alertSuccess();
          this.data = this.helper.arrayObject.delete(this.data, invitation.id!);
          this.loading = false;
        });
    });
  }
}
