import { Component, OnInit } from '@angular/core';
import { BaseCreateComponent } from '../../../../shared/base-component';
import { ImpactPartner } from '../impact-partner.model';
import { ImpactPartnerService } from '../impact-partner.service';
import { Validators } from '@angular/forms';
import { AuthService } from '../../../../auth/auth.service';
import { OrganizationService } from '../../../organization.service';
import { Organization } from '../../../organization.model';

interface OrganizationSearchResult {
  name: string;
  logo: string;
}

@Component({
  selector: 'app-impact-partner-create',
  templateUrl: './impact-partner-create.component.html',
  styleUrls: ['./impact-partner-create.component.scss'],
})
export class ImpactPartnerCreateComponent
  extends BaseCreateComponent<ImpactPartner>
  implements OnInit
{
  organizationSearchResults: OrganizationSearchResult[] = [];
  showCreateForm = false;
  selectedImplementer: Organization | null = null;
  constructor(
    public impactPartnerService: ImpactPartnerService,
    public organizationService: OrganizationService
  ) {
    super(impactPartnerService);
  }

  override ngOnInit() {
    this.initForm();
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
      funder_id: [1, Validators.required],
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

  searchOrganizationByName(event: any) {
    if (!event.query) {
      this.organizationSearchResults = [];
      return;
    }
    this.loading = true;
    this.organizationService.searchNames(event.query).subscribe((response) => {
      this.organizationSearchResults = response;
      this.loading = false;
    });
  }

  override create() {
    if (!this.form.valid) {
      this.helper.notification.toastDanger('Invalid Form');
      this.loading = false;
      return;
    }

    this.loading = true;
    const data = this.showCreateForm
      ? {
          funder_id: this.formValue('funder_id'),
          implementer_admin_email: this.formValue('implementer_admin_email'),
          implementer: {
            name: this.form.get('implementer_name')?.value,
            website: this.form.get('implementer_name')?.value,
          },
        }
      : {
          funder_id: this.formValue('funder_id'),
          implementer_id: this.formValue('implementer_id'),
        };

    this.impactPartnerService.store(data).subscribe(() => {
      this.loading = false;
      this.initForm();
      this.showCreateForm = false;
      this.created.emit();
    });
  }
}
