import { Component, OnInit } from '@angular/core';
import { Organization } from '../../../../organization/organization.model';
import { BaseComponent } from '../../../../shared/base-component';
import { OrganizationService } from '../../../../organization/organization.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-public-business-check-community-reviews',
  templateUrl: './public-business-check-community-reviews.component.html',
  styleUrls: ['./public-business-check-community-reviews.component.scss'],
})
export class PublicBusinessCheckCommunityReviewsComponent
  extends BaseComponent<Partial<Organization>>
  implements OnInit
{
  form!: FormGroup;
  constructor(
    public organizationService: OrganizationService,
    public router: Router,
    public fb: FormBuilder
  ) {
    super();
  }

  ngOnInit() {
    this.form = this.fb.group({
      websiteUrl: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
          ),
        ],
      ],
    });
  }

  submit() {
    if (this.form.valid) {
      this.checkIfOrganizationExists(this.form.controls['websiteUrl'].value);
    } else {
      this.helper.notification.alertDanger('Please enter a valid website url');
    }
  }

  checkIfOrganizationExists(organizationUrl: string) {
    this.loading = true;
    this.organizationService
      .getIdByWebsiteUrl(organizationUrl)
      .subscribe((response) => {
        if (response) {
          this.router.navigate(['/organization', response.id]);
        } else {
          this.helper.notification.toastSuccess(
            'The organization is not registered yet, kindly join our waitlist if you are the owner.',
            5000
          );
          this.router.navigate(['/for-business/book-demo']);
        }
        this.loading = false;
      });
  }
}
