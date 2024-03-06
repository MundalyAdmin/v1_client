import { Component } from '@angular/core';
import { SectorOrganization } from '../../../../organization/sector-organization/sector-organization.model';
import { BaseEditComponent } from '../../../../shared/base-component';
import { SectorOrganizationService } from '../../../../organization/sector-organization/sector-organization.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-sector-organization-edit',
  templateUrl: './settings-sector-organization-edit.component.html',
  styleUrls: ['./settings-sector-organization-edit.component.scss'],
})
export class SettingsSectorOrganizationEditComponent extends BaseEditComponent<SectorOrganization> {
  constructor(public sectorOrganizationService: SectorOrganizationService) {
    super(sectorOrganizationService);
  }

  ngOnInit() {
    this.subscriptions['sectorOrganization'] =
      this.sectorOrganizationService.singleData$.subscribe(
        (sectorOrganization) => {
          if (sectorOrganization) {
            this.single = sectorOrganization;
            this.initForm(sectorOrganization);
          }
        }
      );
  }

  initForm(sectorOrganization: SectorOrganization) {
    this.form = this.fb.group({
      name: [sectorOrganization.name, Validators.required],
      icon: [sectorOrganization.icon, Validators.required],
      about: [sectorOrganization.about, Validators.required],
    });
  }

  edit(): void {
    this.loading = true;
    this.sectorOrganizationService
      .update(this.single.id, this.form.value)
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
}
