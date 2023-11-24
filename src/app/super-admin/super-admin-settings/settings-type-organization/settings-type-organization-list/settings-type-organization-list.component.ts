import { Component } from '@angular/core';
import { BaseListComponent } from '../../../../shared/base-component';
import { TypeOrganization } from '../../../../organization/type-organization/type-organization.model';
import { TypeOrganizationService } from '../../../../organization/type-organization/type-organization.service';

@Component({
  selector: 'app-settings-type-organization-list',
  templateUrl: './settings-type-organization-list.component.html',
  styleUrls: ['./settings-type-organization-list.component.scss'],
})
export class SettingsTypeOrganizationListComponent extends BaseListComponent<TypeOrganization> {
  constructor(public typeOrganizationService: TypeOrganizationService) {
    super(typeOrganizationService);
  }

  edit(typeOrganization: TypeOrganization) {
    this.typeOrganizationService.singleData = typeOrganization;
  }

  delete(typeOrganization: TypeOrganization) {
    this.helper.notification.confirm(
      `Deleting ${typeOrganization.name}`,
      'Are you sure to delete this type?',
      () => {
        this.loading = true;
        this.typeOrganizationService.delete(typeOrganization.id!).subscribe({
          next: () => {
            this.loading = false;
            this.helper.notification.alertSuccess();
          },
          error: () => {
            this.loading = false;
          },
        });
      }
    );
  }
}
