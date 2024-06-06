import { Component, OnInit } from '@angular/core';
import { BaseCreateComponent } from '../../../../shared/base-component';
import { TypeOrganization } from '../../../../organization/type-organization/type-organization.model';
import { TypeOrganizationService } from '../../../../organization/type-organization/type-organization.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-type-organization-create',
  templateUrl: './settings-type-organization-create.component.html',
  styleUrls: ['./settings-type-organization-create.component.scss'],
})
export class SettingsTypeOrganizationCreateComponent
  extends BaseCreateComponent<TypeOrganization>
  implements OnInit
{
  constructor(public typeOrganizationService: TypeOrganizationService) {
    super(typeOrganizationService);
  }

  override ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  override create(callback?: Function | undefined): void {
    this.loading = true;
    this.typeOrganizationService.store(this.form.value).subscribe({
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
