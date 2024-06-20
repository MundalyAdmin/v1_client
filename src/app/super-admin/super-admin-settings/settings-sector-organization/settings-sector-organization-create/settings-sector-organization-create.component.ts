import { Component, OnInit } from '@angular/core';
import { BaseCreateComponent } from '../../../../shared/base-component';
import { SectorOrganization } from '../../../../organization/sector-organization/sector-organization.model';
import { SectorOrganizationService } from '../../../../organization/sector-organization/sector-organization.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-sector-organization-create',
  templateUrl: './settings-sector-organization-create.component.html',
  styleUrls: ['./settings-sector-organization-create.component.scss'],
})
export class SettingsSectorOrganizationCreateComponent
  extends BaseCreateComponent<SectorOrganization>
  implements OnInit
{
  constructor(public sectorOrganizationService: SectorOrganizationService) {
    super(sectorOrganizationService);
  }

  override ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      icon: ['', Validators.required],
      about: ['', Validators.required],
    });
  }

  override create(): void {
    this.loading = true;
    this.sectorOrganizationService.store(this.form.value).subscribe({
      next: () => {
        this.loading = false;
        this.helper.notification.alertSuccess();
        this.form.reset();
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
