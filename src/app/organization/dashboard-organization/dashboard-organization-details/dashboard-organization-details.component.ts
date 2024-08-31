import { AfterViewInit, Component } from '@angular/core';
import { BaseSingleComponent } from '../../../shared/base-component';
import { Organization } from '../../organization.model';
import { OrganizationService } from '../../organization.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryOrganizationEnum } from '../../category-organization/category-organization.enum';
import { AuthService } from '../../../auth/auth.service';
import { DashboardOrganizationService } from '../dashboard-organization.service';
import { StatusImpactVerificationEnum } from '../../../impact-verification/enums/status-impact-verification.enum';

@Component({
  selector: 'app-dashboard-organization-details',
  templateUrl: './dashboard-organization-details.component.html',
  styleUrls: ['./dashboard-organization-details.component.scss'],
})
export class DashboardOrganizationDetailsComponent
  extends BaseSingleComponent<Organization>
  implements AfterViewInit
{
  showDueDiligenceModal = false;
  reportRequested = false;
  selectedCommunity: { id: number; location: string } | null = null;
  constructor(
    public organizationService: OrganizationService,
    public override route: ActivatedRoute,
    public router: Router,
    public dashboardService: DashboardOrganizationService
  ) {
    super(organizationService, route);
  }

  get StatusImpactVerificationEnum() {
    return StatusImpactVerificationEnum;
  }

  get currentLoggedOrganizationCategory() {
    return this.authService.organization?.type_organization
      ?.category_organization_id;
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.dashboardService.title =
      this.currentLoggedOrganizationCategory === CategoryOrganizationEnum.IMPACT
        ? 'Impact Partners'
        : 'Supply Chain Partners';

    this.route.params.subscribe((params) => {
      this.getSingle(params['id']);
    });
  }

  ngAfterViewInit() {}

  onCommunityChange(event: any) {
    this.selectedCommunity = event.value;
    this.router.navigate(['./'], {
      relativeTo: this.route,
      queryParams: { community: event.value?.location },
    });
  }

  getSingle(id: number) {
    this.loading = true;
    this.organizationService.show(id).subscribe((data) => {
      this.single = data;
      this.route.queryParams.subscribe((params) => {
        if (params['community']) {
          this.selectedCommunity =
            this.single?.verifications?.find(
              (verification) => verification.location === params['community']
            ) || null;
        }
      });
      this.loading = false;
    });
  }
}
