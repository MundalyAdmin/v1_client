import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { BaseCreateComponent } from '../../../../shared/base-component';
import { OrganizationRegistrationService } from '../../../../auth/organization-registration/organization-registration.service';

@Component({
  selector: '',
  template: '',
  styleUrls: [],
})
export abstract class OrganizationDashboardCompleteRegistrationBaseComponent
  extends BaseCreateComponent<any>
  implements OnInit
{
  @Output() submitted = new EventEmitter();

  constructor(
    public organizationRegistrationService: OrganizationRegistrationService,
    @Inject('string')
    public formName:
      | 'updatePasswordForm'
      | 'organizationInfoForm'
      | 'organizationDetailsForm'
  ) {
    super();
  }

  override ngOnInit(): void {
    this.subscriptions['form'] =
      this.organizationRegistrationService.form$.subscribe((form) => {
        this.form = form.controls[this.formName] as FormGroup;
      });
  }

  submit() {
    this.organizationRegistrationService.updateFormSection(
      this.formName,
      this.form
    );
    this.submitted.emit();
  }
}
