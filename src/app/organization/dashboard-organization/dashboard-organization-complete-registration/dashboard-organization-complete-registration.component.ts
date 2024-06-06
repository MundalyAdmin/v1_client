import { Component, OnInit } from '@angular/core';
import { BaseCreateComponent } from '../../../shared/base-component';
import { AuthService } from '../../../auth/auth.service';
import { Validators } from '@angular/forms';
import { OrganizationService } from '../../organization.service';
import { Organization } from '../../organization.model';

@Component({
  selector: 'app-dashboard-organization-complete-registration',
  templateUrl: './dashboard-organization-complete-registration.component.html',
  styleUrls: ['./dashboard-organization-complete-registration.component.scss'],
})
export class DashboardOrganizationCompleteRegistrationComponent
  extends BaseCreateComponent<any>
  implements OnInit
{
  // Allow us to display the logo when the user uploads it
  logoLiveUrl: string | null = null;

  // Allow us to display the cover when the user uploads it
  coverLiveUrl: string | null = null;

  organization: Organization | null = null;

  constructor(
    public authService: AuthService,
    public organizationService: OrganizationService
  ) {
    super();
  }

  override ngOnInit(): void {
    this.subscriptions['authenticatedOrganization'] =
      this.authService.organization$.subscribe((organization) => {
        this.organization = organization;
        this.initForm(organization);
      });
  }

  deleteImage(name: string) {
    if (name === 'file_logo') {
      this.logoLiveUrl = null;
      this.formValuePatcher('file_logo', null);
    } else if (name === 'file_cover') {
      this.coverLiveUrl = null;
      this.formValuePatcher('file_cover', null);
    }

    this.formData.delete(name);
  }

  initForm(organization: Organization | null) {
    this.form = this.fb.group({
      organizationId: [organization?.id, Validators.required],
      file_logo: [organization?.logo, Validators.required],
      file_cover: [organization?.cover, Validators.required],
    });

    this.logoLiveUrl = organization?.logo || null;
    this.coverLiveUrl = organization?.cover || null;
  }

  override onFileChanged(event: any, name?: string) {
    let image = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onload = () => {
      if (name === 'file_logo') {
        this.logoLiveUrl = reader.result as string;
        this.formValuePatcher('file_logo', this.logoLiveUrl);
        this.formData.set('file_logo', image);
      } else if (name === 'file_cover') {
        this.coverLiveUrl = reader.result as string;
        this.formValuePatcher('file_cover', this.coverLiveUrl);
        this.formData.set('file_cover', image);
      }
    };
  }

  submit() {
    if (this.form.valid) {
      this.loading = true;
      this.formData.set('organizationId', this.formValue('organizationId'));
      this.organizationService.setupLogoAndCover(this.formData).subscribe({
        next: () => {
          this.helper.notification.alertSuccess();
          this.formData = new FormData();

          this.created.emit();
        },
        complete: () => {
          this.loading = false;
        },
      });
    }
  }
}
