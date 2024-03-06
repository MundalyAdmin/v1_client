import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Organization } from '../../../../organization/organization.model';
import { BaseComponent } from '../../../../shared/base-component';
import { OrganizationService } from '../../../../organization/organization.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface OrganizationSearchResult {
  name: string;
  logo: string;
}

@Component({
  selector: 'app-public-business-check-community-reviews',
  templateUrl: './public-business-check-community-reviews.component.html',
  styleUrls: ['./public-business-check-community-reviews.component.scss'],
})
export class PublicBusinessCheckCommunityReviewsComponent
  extends BaseComponent<Partial<Organization>>
  implements OnInit, AfterViewInit
{
  @Input() resultsUrl: string = '/business/organizations/search';
  @ViewChild('autoComplete', { static: false })
  autoCompleteTemplateElement: any;

  showOverlay = false;

  organizationSearchResults: OrganizationSearchResult[] = [];

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
      organizationName: ['', [Validators.required]],
    });

    this.route.queryParams.subscribe((params) => {
      if (params['name']) {
        this.form.controls['organizationName'].patchValue(params['name']);
      }
    });
  }

  onSelect(event: any) {
    this.router.navigate(['/', 'community', 'organizations', event.value.id]);
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.helper.navigation.jumpToSection(fragment);
        this.autoCompleteTemplateElement.inputEL.nativeElement.focus();
      }
    });
  }

  submit() {
    if (this.form.valid) {
      this.router.navigate([this.resultsUrl], {
        queryParams: {
          name:
            this.form.value.organizationName.name ||
            this.form.value.organizationName,
        },
      });
    } else {
      this.helper.notification.alertDanger(
        "Please enter an organization's name"
      );
    }
  }

  onSearchInputBlur() {
    this.router.navigate(['./'], {
      relativeTo: this.route,
    });
    this.showOverlay = false;
  }

  searchOrganizationByName(event: any) {
    if (!event.query) {
      this.organizationSearchResults = [];
      return;
    }
    this.loading = true;
    this.organizationService.searchNames(event.query).subscribe((response) => {
      this.organizationSearchResults = response;
      this.loading = false;
    });
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
