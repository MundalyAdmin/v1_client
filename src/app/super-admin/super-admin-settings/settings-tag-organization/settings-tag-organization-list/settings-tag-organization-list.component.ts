import { Component } from '@angular/core';
import { BaseListComponent } from '../../../../shared/base-component';
import { TagOrganization } from '../../../../organization/tag-organization/tag-organization.model';
import { TagOrganizationService } from '../../../../organization/tag-organization/tag-organization.service';
import { Flowbite } from './../../../../shared/decorators/flowbite.decorator';

@Component({
  selector: 'app-settings-tag-organization-list',
  templateUrl: './settings-tag-organization-list.component.html',
  styleUrls: ['./settings-tag-organization-list.component.scss'],
})
@Flowbite()
export class SettingsTagOrganizationListComponent extends BaseListComponent<TagOrganization> {
  constructor(public tagOrganizationService: TagOrganizationService) {
    super(tagOrganizationService);
  }

  edit(tagOrganization: TagOrganization) {
    this.tagOrganizationService.singleData = tagOrganization;
  }

  delete(tagOrganization: TagOrganization) {
    this.helper.notification.confirm(
      `Deleting ${tagOrganization.name}`,
      'Are you sure to delete this tag?',
      () => {
        this.loading = true;
        this.tagOrganizationService.delete(tagOrganization.id!).subscribe({
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
