import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Organization } from '../../../../../../organization/organization.model';
import { OrganizationService } from '../../../../../../organization/organization.service';
import { ImpactStory } from '../../../../../../scale/impact-story/impact-story.model';
import { ImpactStoryService } from '../../../../../../scale/impact-story/impact-story.service';
import { ScaleService } from '../../../../../../scale/scale.service';
import { BaseComponent } from '../../../../../../shared/base-component';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-organization-new-style-stories-list',
  templateUrl: './organization-new-style-stories-list.component.html',
  styleUrls: ['./organization-new-style-stories-list.component.scss'],
})
export class OrganizationNewStyleStoriesListComponent
  extends BaseComponent<ImpactStory>
  implements OnInit
{
  organization: Organization | null = null;
  verified = false;
  constructor(
    public impactStoryOrganizationService: ImpactStoryService,
    public override authService: AuthService,
    public scaleService: ScaleService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    super(impactStoryOrganizationService);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.subscriptions['currentLoggedInOrganization'] =
      this.authService.organization$.subscribe((organization) => {
        if (organization) {
          this.organization = organization;
          this.getDataByFunder(organization.id!);
        }
      });
  }

  getDataByFunder(funderId: number) {
    this.route.params.subscribe((params) => {
      if (params['id'] === 'verified') {
        this.getVerifiedByFunderId(funderId);
      } else if (params['id'] === 'unverified') {
        this.getUnverifiedByOrganization(funderId);
      } else {
        this.router.navigate(['..', 'unverified'], { relativeTo: this.route });
      }
    });
  }

  getVerifiedByFunderId(organizationId: number) {
    // this.loading = true;
    // this.impactStoryOrganizationService
    //   .getVerifiedByFunderId(organizationId)
    //   .subscribe({
    //     complete: () => {
    //       this.loading = false;
    //     },
    //   });
  }

  getUnverifiedByOrganization(organizationId: number) {
    // this.loading = true;
    // this.impactStoryOrganizationService
    //   .getUnverifiedByFunderId(organizationId)
    //   .subscribe({
    //     complete: () => {
    //       this.loading = false;
    //     },
    //   });
  }
}
