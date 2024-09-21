import { Component, OnInit } from '@angular/core';
import { ImpactStory } from 'src/app/scale/impact-story/impact-story.model';
import { BaseComponent } from 'src/app/shared/base-component';
import { Organization } from '../../organization.model';
import { ImpactStoryService } from 'src/app/scale/impact-story/impact-story.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ScaleService } from 'src/app/scale/scale.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImpactVerificationTypeInsightsEnum } from 'src/app/impact-verification/impact-verification-type-insights/impact-verification-type-insights.enum';
import { DashboardOrganizationService } from '../dashboard-organization.service';

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
    private readonly dashboardOrganizationService: DashboardOrganizationService,
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
          this.dashboardOrganizationService.typeInsight$.subscribe(
            (typeInsight) => {
              this.getByFunderAndTypeInsight(organization.id!, typeInsight);
            }
          );
        }
      });
  }

  getByFunderAndTypeInsight(
    funderId: number,
    typeInsight: ImpactVerificationTypeInsightsEnum
  ) {
    this.route.params.subscribe((params) => {
      if (params['id'] === 'verified') {
        this.getDataByFunderAndTypeInsight(funderId, typeInsight, 'verified');
      } else if (params['id'] === 'unverified') {
        this.getDataByFunderAndTypeInsight(funderId, typeInsight, 'unverified');
      } else {
        this.router.navigate(['..', 'unverified'], { relativeTo: this.route });
      }
    });
  }

  getDataByFunderAndTypeInsight(
    funderId: number,
    typeInsight: ImpactVerificationTypeInsightsEnum,
    state: 'verified' | 'unverified'
  ) {
    this.loading = true;
    this.impactStoryOrganizationService
      .getByFunderAndTypeInsight(funderId, typeInsight, state)
      .subscribe({
        next: () => {
          this.loading = false;
        },
      });
  }
}
