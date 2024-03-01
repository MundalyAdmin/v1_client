import { Component, Input, OnInit } from '@angular/core';
import { Organization } from '../../../../organization/organization.model';
import { BaseComponent } from '../../../../shared/base-component';
import { OrganizationService } from '../../../../organization/organization.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  @Input() resultsUrl: string = '/business/organizations/search';

  form!: FormGroup;
  constructor(
    public organizationService: OrganizationService,
    public router: Router,
    public fb: FormBuilder,
    public route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit() {
    this.form = this.fb.group({
      companyName: ['', [Validators.required]],
    });

    this.route.queryParams.subscribe((params) => {
      if (params['name']) {
        this.form.controls['companyName'].patchValue(params['name']);
      }
    });
  }

  submit() {
    if (this.form.valid) {
      this.router.navigate([this.resultsUrl], {
        queryParams: { name: this.form.value.companyName },
      });
    } else {
      this.helper.notification.alertDanger(
        "Please enter an organization's name"
      );
    }
  }

  // checkIfOrganizationExists(organizationUrl: string) {
  //   this.loading = true;
  //   this.organizationService
  //     .getIdByWebsiteUrl(organizationUrl)
  //     .subscribe((response) => {
  //       if (response) {
  //         this.router.navigate(['/organization', response.id]);
  //       } else {
  //         this.helper.notification.toastSuccess(
  //           'The organization is not registered yet, kindly join our waitlist if you are the owner.',
  //           5000
  //         );
  //         this.router.navigate(['/business/book-demo']);
  //       }
  //       this.loading = false;
  //     });
  // }
}
