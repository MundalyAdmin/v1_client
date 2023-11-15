import { Component } from '@angular/core';
import { BaseListComponent } from '../../../shared/base-component';
import { OrganizationWaitlist } from '../../../waitlist/organization-waitlist/organization-waitlist.model';
import { OrganizationWaitlistService } from '../../../waitlist/organization-waitlist/organization-waitlist.service';

@Component({
  selector: 'app-super-admin-organization-waitlist-list',
  templateUrl: './super-admin-organization-waitlist-list.component.html',
  styleUrls: ['./super-admin-organization-waitlist-list.component.scss'],
})
export class SuperAdminOrganizationWaitlistListComponent extends BaseListComponent<OrganizationWaitlist> {
  constructor(public organizationWaitlistService: OrganizationWaitlistService) {
    super(organizationWaitlistService);
  }

  // edit(organization: OrganizationWaitlist) {
  //   this.organizationWaitlistService.singleData = organization;
  // }

  // delete(organization: OrganizationWaitlist) {
  //   this.helper.notification.confirm(
  //     `Deleting ${organization.name}`,
  //     'Are you sure to delete this type?',
  //     () => {
  //       this.loading = true;
  //       this.organizationWaitlistService
  //         .delete(organization.id!)
  //         .subscribe({
  //           next: () => {
  //             this.loading = false;
  //             this.helper.notification.alertSuccess();
  //           },
  //           error: () => {
  //             this.loading = false;
  //           },
  //         });
  //     }
  //   );
  // }
}
