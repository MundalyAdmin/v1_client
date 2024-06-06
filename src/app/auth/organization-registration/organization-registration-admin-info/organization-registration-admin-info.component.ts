import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseCreateComponent } from '../../../shared/base-component';
import { OrganizationRegistrationService } from '../organization-registration.service';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-organization-registration-admin-info',
  templateUrl: './organization-registration-admin-info.component.html',
  styleUrls: ['./organization-registration-admin-info.component.scss'],
})
export class OrganizationRegistrationAdminInfoComponent
  extends BaseCreateComponent<any>
  implements OnInit
{
  @Output() submitted = new EventEmitter();
  constructor(
    public organizationRegistrationService: OrganizationRegistrationService
  ) {
    super();
  }

  override ngOnInit(): void {
    this.subscriptions['form'] =
      this.organizationRegistrationService.form$.subscribe((form) => {
        this.form = form.controls['adminInfo'] as FormGroup;
      });
  }

  submit() {
    this.fillFormData(this.form.value);
    this.organizationRegistrationService.updateFormSection(
      'adminInfo',
      this.form
    );

    this.organizationRegistrationService.fillFormData(
      this.form.value,
      'adminInfo'
    );
    this.submitted.emit();
  }
}
