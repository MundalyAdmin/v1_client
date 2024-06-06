import { Component, OnInit } from '@angular/core';
import { BaseCreateComponent } from '../../../../../shared/base-component';
import { ImpactStory } from '../../../../../scale/impact-story/impact-story.model';
import { ImpactStoryService } from '../../../../../scale/impact-story/impact-story.service';
import { OrganizationService } from '../../../../../organization/organization.service';
import { Validators } from '@angular/forms';
import { Organization } from '../../../../../organization/organization.model';

@Component({
  selector: 'app-super-admin-impact-story-create',
  templateUrl: './super-admin-impact-story-create.component.html',
  styleUrls: ['./super-admin-impact-story-create.component.scss'],
})
export class SuperAdminImpactStoryCreateComponent
  extends BaseCreateComponent<ImpactStory>
  implements OnInit
{
  organization: Organization | null = null;
  constructor(
    public impactStoryOrganizationService: ImpactStoryService,
    public organizationService: OrganizationService
  ) {
    super(impactStoryOrganizationService);
  }

  override ngOnInit() {
    this.initForm();
  }

  initForm(impactStory?: ImpactStory) {
    // const title = impactStory?.title || '';
    // const about = impactStory?.about || '';
    // const link = impactStory?.link || '';
    // this.form = this.fb.group({
    //   title: [title, Validators.required],
    //   about: [about, Validators.required],
    //   link: [link, Validators.required],
    //   organization_id: [null, Validators.required],
    // });
    // this.subscriptions['organization'] =
    //   this.organizationService.singleData$.subscribe((organization) => {
    //     if (organization) {
    //       this.formValuePatcher('organization_id', organization.id);
    //       this.organization = organization;
    //     }
    //   });
  }

  override create(): void {
    if (!this.form.valid) {
      this.helper.notification.alertDanger('Form invalid');
      return;
    }

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
