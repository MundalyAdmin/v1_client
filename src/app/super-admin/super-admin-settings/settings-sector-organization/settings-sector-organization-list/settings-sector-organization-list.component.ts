import { Component } from '@angular/core';
import { BaseListComponent } from '../../../../shared/base-component';
import { SectorOrganization } from '../../../../organization/sector-organization/sector-organization.model';
import { SectorOrganizationService } from '../../../../organization/sector-organization/sector-organization.service';
import { Flowbite } from '../../../../shared/decorators/flowbite.decorator';

@Component({
  selector: 'app-settings-sector-organization-list',
  templateUrl: './settings-sector-organization-list.component.html',
  styleUrls: ['./settings-sector-organization-list.component.scss'],
})
@Flowbite()
export class SettingsSectorOrganizationListComponent extends BaseListComponent<SectorOrganization> {
  constructor(public sectorOrganizationService: SectorOrganizationService) {
    super(sectorOrganizationService);
  }

  edit(sectorOrganization: SectorOrganization) {
    console.log(sectorOrganization);
    this.sectorOrganizationService.singleData = sectorOrganization;
  }

  delete(sectorOrganization: SectorOrganization) {
    this.helper.notification.confirm(
      `Deleting ${sectorOrganization.name}`,
      'Are you sure to delete this type?',
      () => {
        this.loading = true;
        this.sectorOrganizationService
          .delete(sectorOrganization.id!)
          .subscribe({
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
