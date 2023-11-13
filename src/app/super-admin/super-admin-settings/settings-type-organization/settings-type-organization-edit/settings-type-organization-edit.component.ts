import { Component } from '@angular/core';
import { BaseEditComponent } from '../../../../shared/base-component';
import { TypeOrganization } from '../../../../organization/type-organization/type-organization.model';
import { TypeOrganizationService } from '../../../../organization/type-organization/type-organization.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-type-organization-edit',
  templateUrl: './settings-type-organization-edit.component.html',
  styleUrls: ['./settings-type-organization-edit.component.scss'],
})
export class SettingsTypeOrganizationEditComponent extends BaseEditComponent<TypeOrganization> {
  constructor(public typeOrganizationService: TypeOrganizationService) {
    super(typeOrganizationService);
  }

  ngOnInit() {
    this.subscriptions['typeOrganization'] =
      this.typeOrganizationService.singleData$.subscribe((typeOrganization) => {
        if (typeOrganization) {
          this.single = typeOrganization;
          this.initForm(typeOrganization);
        }
      });
  }

  initForm(typeOrganization: TypeOrganization) {
    this.form = this.fb.group({
      name: [typeOrganization.name, Validators.required],
    });
    console.log(this.form.value);
  }

  edit(): void {
    this.loading = true;
    this.typeOrganizationService
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
