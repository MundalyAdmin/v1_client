import { Component, OnInit } from '@angular/core';
import { ImpactStory } from 'src/app/scale/impact-story/impact-story.model';
import { BaseComponent } from 'src/app/shared/base-component';
import { Organization } from '../../organization.model';
import { ImpactStoryService } from 'src/app/scale/impact-story/impact-story.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ScaleService } from 'src/app/scale/scale.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-organization-impact-stories-list',
  templateUrl: './dashboard-organization-impact-stories-list.component.html',
  styleUrls: ['./dashboard-organization-impact-stories-list.component.scss'],
})
export class DashboardOrganizationImpactStoriesListComponent
  extends BaseComponent<ImpactStory>
  implements OnInit
{
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
    this.loading = true;
    this.impactStoryOrganizationService
      .getVerifiedByFunderId(organizationId)
      .subscribe({
        complete: () => {
          this.loading = false;
        },
      });
  }

  getUnverifiedByOrganization(organizationId: number) {
    this.loading = true;
    this.impactStoryOrganizationService
      .getUnverifiedByFunderId(organizationId)
      .subscribe({
        complete: () => {
          this.loading = false;
        },
      });
  }
}
