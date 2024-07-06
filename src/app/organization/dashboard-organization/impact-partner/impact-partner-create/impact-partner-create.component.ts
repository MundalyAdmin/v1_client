import { Component, OnInit } from '@angular/core';
import { BaseCreateComponent } from '../../../../shared/base-component';
import { ImpactPartner } from '../impact-partner.model';
import { ImpactPartnerService } from '../impact-partner.service';
import { Validators } from '@angular/forms';
import { AuthService } from '../../../../auth/auth.service';
import { OrganizationService } from '../../../organization.service';
import { Organization } from '../../../organization.model';
import { OrganizationPartnerInvitationService } from '../../../organization-partner-invitation/organization-partner-invitation.service';

@Component({
  selector: 'app-impact-partner-create',
  templateUrl: './impact-partner-create.component.html',
  styleUrls: ['./impact-partner-create.component.scss'],
})
export class ImpactPartnerCreateComponent
  extends BaseCreateComponent<ImpactPartner>
  implements OnInit
{
  organizationSearchResults: Organization[] = [];
  showCreateForm = false;
  selectedImplementer: Organization | null = null;
  constructor(
    public impactPartnerService: ImpactPartnerService,
    public organizationService: OrganizationService,
    public organizationPartnerInvitationService: OrganizationPartnerInvitationService
  ) {
    super(impactPartnerService);
  }

  override ngOnInit() {
    this.initForm();

    this.subscriptions['currentLoggedOrganization'] =
      this.authService.organization$.subscribe((organization) => {
        if (organization) {
          this.form.controls['funder_id'].patchValue(organization.id);
          this.currentLoggedInOrganization = organization;
        }
      });
  }

  onSelect(event: any) {
    this.form.controls['implementer_id'].patchValue(event.value.id);
    this.selectedImplementer = event.value;
  }

  initForm() {
    this.form = this.fb.group({
      implementer_name: [null],
      implementer_website: [null],
      implementer_admin_email: [null],
      implementer_id: [null, Validators.required],
      funder_id: [null, Validators.required],
    });
  }

  displayCreateForm() {
    this.showCreateForm = true;
    this.form.controls['implementer_name'].setValidators([Validators.required]);
    this.form.controls['implementer_website'].setValidators([
      Validators.required,
    ]);
    this.form.controls['implementer_admin_email'].setValidators([
      Validators.required,
    ]);
    this.form.controls['implementer_id'].removeValidators([
      Validators.required,
    ]);
    this.form.controls['implementer_id'].updateValueAndValidity();
    this.form.controls['implementer_website'].updateValueAndValidity();
    this.form.controls['implementer_admin_email'].updateValueAndValidity();
    this.form.controls['implementer_name'].updateValueAndValidity();
  }

  hideCreateForm() {
    this.showCreateForm = false;
    this.form.controls['implementer_name'].clearValidators();
    this.form.controls['implementer_website'].clearValidators();
    this.form.controls['implementer_admin_email'].clearValidators();
    this.form.controls['implementer_id'].setValidators([Validators.required]);
    this.form.controls['implementer_id'].updateValueAndValidity();
    this.form.controls['implementer_website'].updateValueAndValidity();
    this.form.controls['implementer_admin_email'].updateValueAndValidity();
    this.form.controls['implementer_name'].updateValueAndValidity();
  }

  searchExcludingPartners(event: any) {
    if (!event.query) {
      this.organizationSearchResults = [];
      return;
    }
    this.loading = true;
    this.organizationService
      .searchExcludingPartners(
        this.currentLoggedInOrganization?.id!,
        event.query
      )
      .subscribe((response) => {
        this.organizationSearchResults = response;
        this.loading = false;
      });
  }

  override create() {
    if (!this.form.valid) {
      this.helper.notification.toastDanger('Invalid Form');
      console.log(this.form.value);
      this.loading = false;
      return;
    }

    this.loading = true;
    const funderId = this.formValue('funder_id');
    const senderId = this.formValue('funder_id');
    const implementerAdminEmail = this.formValue('implementer_admin_email');
    const implementerName = this.form.get('implementer_name')?.value;
    const implementerWebsite = this.form.get('implementer_name')?.value;
    const implementerId = this.formValue('implementer_id');

    const data = this.showCreateForm
      ? {
          funder_id: funderId,
          sender_id: senderId,
          implementer_admin_email: implementerAdminEmail,
          implementer: {
            name: implementerName,
            website: implementerWebsite,
          },
        }
      : {
          funder_id: funderId,
          implementer_id: implementerId,
          sender_id: senderId,
          receiver_id: implementerId,
        };

    this.organizationPartnerInvitationService.store(data).subscribe(() => {
      this.loading = false;
      this.helper.notification.toastSuccess('Invitation sent successfully');
      this.initForm();
      this.formValuePatcher('funder_id', this.currentLoggedInOrganization?.id!);
      this.selectedImplementer = null;
      this.hideCreateForm();
      this.created.emit();
    });
  }
}
