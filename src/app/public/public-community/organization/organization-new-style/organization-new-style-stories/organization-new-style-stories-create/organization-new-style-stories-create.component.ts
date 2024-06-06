import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { BaseCreateComponent } from '../../../../../../shared/base-component';
import { ImpactStory } from '../../../../../../scale/impact-story/impact-story.model';
import { Organization } from '../../../../../../organization/organization.model';
import { ImpactStoryService } from '../../../../../../scale/impact-story/impact-story.service';
import { OrganizationService } from '../../../../../../organization/organization.service';
import { Validators } from '@angular/forms';
import { AuthService } from '../../../../../../auth/auth.service';
import { Storage } from '../../../../../../shared/helpers/storage/storage';

@Component({
  selector: 'app-organization-new-style-stories-create',
  templateUrl: './organization-new-style-stories-create.component.html',
  styleUrls: ['./organization-new-style-stories-create.component.scss'],
})
export class OrganizationNewStyleStoriesCreateComponent
  extends BaseCreateComponent<ImpactStory>
  implements OnInit, AfterViewInit
{
  organization: Organization | null = null;
  tempRating = 0;
  constructor(
    public impactStoryOrganizationService: ImpactStoryService,
    public organizationService: OrganizationService,
    public authService: AuthService,
    public storage: Storage
  ) {
    super(impactStoryOrganizationService);
  }

  override ngOnInit() {
    const storageSaved = this.storage.get('review') as ImpactStory;
    if (storageSaved) {
      this.initForm(storageSaved);
    } else {
      this.initForm();
    }
  }

  ngAfterViewInit() {
    if (this.storage.get('review')) {
      setTimeout(() => {
        this.edited.emit();
        this.storage.delete('review');
      }, 200);
    }
  }

  initForm(impactStory?: ImpactStory) {
    const title = impactStory?.title || '';
    const about = impactStory?.about || '';
    const rating = impactStory?.rating || '';
    const user_id = this.authService.user?.id || null;
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

  continueWithGoogle(): void {
    this.storage.set(
      'redirect',
      `/organizations/${this.organization!.id}/stories`
    );
    this.storage.set('review', { ...this.form.value });

    this.authService.continueWithGoogle();
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
        this.storage.delete('review');
        this.created.emit();
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
