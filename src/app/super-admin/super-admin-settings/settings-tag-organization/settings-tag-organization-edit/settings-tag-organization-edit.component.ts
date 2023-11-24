import { Component } from '@angular/core';
import { TagOrganization } from './../../../../organization/tag-organization/tag-organization.model';
import { BaseEditComponent } from '../../../../shared/base-component';
import { TagOrganizationService } from './../../../../organization/tag-organization/tag-organization.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-tag-organization-edit',
  templateUrl: './settings-tag-organization-edit.component.html',
  styleUrls: ['./settings-tag-organization-edit.component.scss'],
})
export class SettingsTagOrganizationEditComponent extends BaseEditComponent<TagOrganization> {
  constructor(public tagOrganizationService: TagOrganizationService) {
    super(tagOrganizationService);
  }

  ngOnInit() {
    this.subscriptions['tagOrganization'] =
      this.tagOrganizationService.singleData$.subscribe((tagOrganization) => {
        if (tagOrganization) {
          this.single = tagOrganization;
          this.initForm(tagOrganization);
        }
      });
  }

  initForm(tagOrganization: TagOrganization) {
    this.form = this.fb.group({
      name: [tagOrganization.name, Validators.required],
    });
  }

  edit(): void {
    this.loading = true;
    this.tagOrganizationService
      .update(this.single.id, this.form.value)
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
