import { Component, OnInit } from '@angular/core';
import { TagOrganization } from '../../../../organization/tag-organization/tag-organization.model';
import { BaseCreateComponent } from '../../../../shared/base-component';
import { TagOrganizationService } from '../../../../organization/tag-organization/tag-organization.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-settings-tag-organization-create',
  templateUrl: './settings-tag-organization-create.component.html',
  styleUrls: ['./settings-tag-organization-create.component.scss'],
})
export class SettingsTagOrganizationCreateComponent
  extends BaseCreateComponent<TagOrganization>
  implements OnInit
{
  constructor(public tagOrganizationService: TagOrganizationService) {
    super(tagOrganizationService);
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }

  override create(callback?: Function | undefined): void {
    this.loading = true;
    this.tagOrganizationService.store(this.form.value).subscribe({
      next: () => {
        this.loading = false;
        this.helper.notification.alertSuccess();
        this.form.reset();
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
