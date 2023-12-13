import { Component, OnInit } from '@angular/core';
import { BaseCreateComponent } from '../../../../../../shared/base-component';
import { ImpactStory } from '../../../../../../scale/impact-story/impact-story.model';
import { Organization } from '../../../../../../organization/organization.model';
import { ImpactStoryService } from '../../../../../../scale/impact-story/impact-story.service';
import { OrganizationService } from '../../../../../../organization/organization.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-organization-new-style-stories-create',
  templateUrl: './organization-new-style-stories-create.component.html',
  styleUrls: ['./organization-new-style-stories-create.component.scss'],
})
export class OrganizationNewStyleStoriesCreateComponent
  extends BaseCreateComponent<ImpactStory>
  implements OnInit
{
  organization: Organization | null = null;
  tempRating = 0;
  constructor(
    public impactStoryOrganizationService: ImpactStoryService,
    public organizationService: OrganizationService
  ) {
    super(impactStoryOrganizationService);
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(impactStory?: ImpactStory) {
    const title = impactStory?.title || '';
    const about = impactStory?.about || '';
    const rating = impactStory?.rating || '';
    const user_id = 1;
    this.form = this.fb.group({
      title: [title, Validators.required],
      about: [about, Validators.required],
      rating: [rating, Validators.required],
      organization_id: [null, Validators.required],
      user_id: [user_id, Validators.required],
    });
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.formValuePatcher('organization_id', organization.id);
          this.organization = organization;
        }
      });
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
        this.created.emit();
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
