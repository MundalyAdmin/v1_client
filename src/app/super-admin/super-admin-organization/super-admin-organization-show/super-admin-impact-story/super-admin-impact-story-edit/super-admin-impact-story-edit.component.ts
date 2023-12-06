import { Component } from '@angular/core';
import { SuperAdminImpactStoryCreateComponent } from '../super-admin-impact-story-create/super-admin-impact-story-create.component';
import { ImpactStoryService } from '../../../../../scale/impact-story/impact-story.service';
import { OrganizationService } from '../../../../../organization/organization.service';
import { ImpactStory } from '../../../../../scale/impact-story/impact-story.model';

@Component({
  selector: 'app-super-admin-impact-story-edit',
  templateUrl: './super-admin-impact-story-edit.component.html',
  styleUrls: ['./super-admin-impact-story-edit.component.scss'],
})
export class SuperAdminImpactStoryEditComponent extends SuperAdminImpactStoryCreateComponent {
  impactStory: ImpactStory | null = null;
  constructor(
    public override impactStoryOrganizationService: ImpactStoryService,
    public override organizationService: OrganizationService
  ) {
    super(impactStoryOrganizationService, organizationService);
  }

  override ngOnInit() {
    this.subscriptions['impact-story'] =
      this.impactStoryOrganizationService.singleData$.subscribe((story) => {
        if (story) {
          this.impactStory = story;
          this.initForm(story);
        }
      });
  }

  edit() {
    if (!this.form.valid) {
      this.helper.notification.alertDanger('Form invalid');
      return;
    }

    this.loading = true;
    this.fillFormData(this.form.value);
    this.impactStoryOrganizationService
      .update(this.impactStory?.id!, this.formData)
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
