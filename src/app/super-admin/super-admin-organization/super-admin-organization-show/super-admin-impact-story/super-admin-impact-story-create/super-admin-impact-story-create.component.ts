import { Component, OnInit } from '@angular/core';
import { BaseCreateComponent } from '../../../../../shared/base-component';
import { ImpactStoryOrganization } from '../../../../../organization/impact-story-organization/impact-story-organization.model';
import { ImpactStoryOrganizationService } from '../../../../../organization/impact-story-organization/impact-story-organization.service';
import { OrganizationService } from '../../../../../organization/organization.service';
import { Validators } from '@angular/forms';
import { Organization } from '../../../../../organization/organization.model';

@Component({
  selector: 'app-super-admin-impact-story-create',
  templateUrl: './super-admin-impact-story-create.component.html',
  styleUrls: ['./super-admin-impact-story-create.component.scss'],
})
export class SuperAdminImpactStoryCreateComponent
  extends BaseCreateComponent<ImpactStoryOrganization>
  implements OnInit
{
  organization: Organization | null = null;
  constructor(
    public impactStoryOrganizationService: ImpactStoryOrganizationService,
    public organizationService: OrganizationService
  ) {
    super(impactStoryOrganizationService);
  }

  ngOnInit() {
    this.initForm();

    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.formValuePatcher('organization_id', organization.id);
          this.organization = organization;
        }
      });
  }

  initForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      about: ['', Validators.required],
      link: ['', Validators.required],
      organization_id: [null, Validators.required],
    });
  }

  override create(callback?: Function | undefined): void {
    this.loading = true;
    this.fillFormData(this.form.value);
    this.impactStoryOrganizationService.store(this.formData).subscribe({
      next: () => {
        this.loading = false;
        this.helper.notification.alertSuccess();
        this.form.reset();
        this.formValuePatcher('organization_id', this.organization?.id);
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
