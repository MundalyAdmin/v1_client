import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { BaseCreateComponent } from '../../../shared/base-component';
import { OrganizationRegistrationService } from '../../../auth/organization-registration/organization-registration.service';
import { FormGroup } from '@angular/forms';
import { ImpactVerificationSetupService } from '../../../impact-verification/impact-verification-setup/impact-verification-setup.service';

@Component({
  selector: 'app-dashboard-organization-impact-verification-setup-base',
  templateUrl:
    './dashboard-organization-impact-verification-setup-base.component.html',
  styleUrls: [
    './dashboard-organization-impact-verification-setup-base.component.scss',
  ],
})
export class DashboardOrganizationImpactVerificationSetupBaseComponent
  extends BaseCreateComponent<any>
  implements OnInit
{
  @Output() submitted = new EventEmitter();

  constructor(
    public impactVerificationSetup: ImpactVerificationSetupService,
    @Inject('string')
    public formName: 'setupForm' | 'participantsForm' | 'launchForm'
  ) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.subscriptions['form'] = this.impactVerificationSetup.form$.subscribe(
      (form) => {
        this.form = form.controls[this.formName] as FormGroup;
      }
    );
  }

  submit() {
    this.impactVerificationSetup.updateFormSection(this.formName, this.form);
    this.submitted.emit();
  }
}
