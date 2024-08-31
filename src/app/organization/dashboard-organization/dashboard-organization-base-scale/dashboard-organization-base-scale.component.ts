import { Component } from '@angular/core';
import { BaseSingleComponent } from '../../../shared/base-component';
import { BaseScaleScore } from '../../../scale/base-scale-score.model';
import { Organization } from '../../organization.model';
import { BaseScaleService } from '../../../scale/base-scale.service';
import { ScaleService } from '../../../scale/scale.service';
import { OrganizationService } from '../../organization.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusImpactVerificationEnum } from '../../../impact-verification/enums/status-impact-verification.enum';

@Component({
  selector: 'app-dashboard-organization-base-scale',
  template: '',
  styles: [''],
})
export class DashboardOrganizationBaseScaleComponent<
  T extends BaseScaleScore
> extends BaseSingleComponent<T> {
  organization: Organization | null = null;
  selectedCommunity: string | null = null;
  constructor(
    public baseScaleService: BaseScaleService<T>,
    public scaleService: ScaleService,
    public organizationService: OrganizationService,
    public override route: ActivatedRoute,
    public router: Router
  ) {
    super(baseScaleService);
  }

  StatusImpactVerificationEnum = StatusImpactVerificationEnum;

  override ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['community']) {
        this.selectedCommunity = params['community'];
      } else {
        this.selectedCommunity = null;
      }
      this.subscribeToOrganizationData();
    });
  }

  subscribeToOrganizationData() {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (
          organization &&
          organization.verification_status_from_current_organization?.id ===
            StatusImpactVerificationEnum.LAUNCHED
        ) {
          this.organization = organization;
          this.getByOrganizationId(organization.id!);
        }
      });
  }

  getByOrganizationId(organizationId: number) {
    this.loading = true;
    const params = this.selectedCommunity
      ? { location: this.selectedCommunity }
      : {};
    this.baseScaleService
      .getByOrganizationId(organizationId, {
        params,
      })
      .subscribe({
        next: () => {
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this.router.navigate(['./'], {
            relativeTo: this.route,
          });
        },
      });
  }
}
