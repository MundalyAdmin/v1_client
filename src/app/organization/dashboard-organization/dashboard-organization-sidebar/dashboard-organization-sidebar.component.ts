import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ImpactVerificationTypeInsightsEnum } from 'src/app/impact-verification/impact-verification-type-insights/impact-verification-type-insights.enum';
import { ImpactVerificationService } from '../../../impact-verification/impact-verification.service';
import { ImpactInitiative } from '../../../scale/impact-initiative/impact-initiative.model';
import { ImpactInitiativeService } from '../../../scale/impact-initiative/impact-initiative.service';
import { BaseComponent } from '../../../shared/base-component';
import { Storage } from '../../../shared/helpers/storage/storage';
import { User } from '../../../user/user.model';
import { Organization } from '../../organization.model';
import { OrganizationService } from '../../organization.service';
import { TypeOrganizationEnum } from '../../type-organization/type-organization.enum';
import { DashboardOrganizationService } from '../dashboard-organization.service';

@Component({
  selector: 'app-dashboard-organization-sidebar',
  templateUrl: './dashboard-organization-sidebar.component.html',
  styleUrls: ['./dashboard-organization-sidebar.component.scss'],
})
export class DashboardOrganizationSidebarComponent extends BaseComponent<any> {
  verificationRequests: number = 0;
  organization: Organization | null = null;
  selectedImpactPartner: Organization | null = null;
  selectedImpactInitiative: ImpactInitiative | null = null;
  menuUrlPrefix: string = '';
  typeOrganizationId: number | null = null;
  user: User | null = null;
  typeSubmenu: ImpactVerificationTypeInsightsEnum | null = null;
  @Output() showSetupLogoAndCoverModal$ = new EventEmitter();

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public storage: Storage,
    public organizationService: OrganizationService,
    public impactInitiativeService: ImpactInitiativeService,
    public impactVerificationService: ImpactVerificationService,
    public dashboardOrganizationService: DashboardOrganizationService
  ) {
    super();
  }

  get ImpactVerificationTypeInsightsEnum() {
    return ImpactVerificationTypeInsightsEnum;
  }

  get categoryOrganization() {
    return (
      this.organization?.type_organization?.category_organization_id || null
    );
  }

  hideSidebar() {
    this.selectedImpactInitiative = null;
    this.selectedImpactPartner = null;
  }
  override ngOnInit(): void {
    super.ngOnInit();
    this.user = this.authService.user;

    this.authService.organization$.subscribe((organization) => {
      this.organization = organization;
      this.typeOrganizationId = this.organization?.type_organization_id || null;

      this.countVerificationRequests(organization?.id!);

      this.impactVerificationService.notification$.subscribe((res) => {
        this.countVerificationRequests(organization?.id!);
      });

      this.subscribeToOrganization();
    });

    this.typeSubmenu = this.getTypeSubmenu();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.typeSubmenu = this.getTypeSubmenu();
      });
  }

  getTypeSubmenu() {
    const splittedUrl = this.router.url.split('/');
    if (splittedUrl.includes('alignment')) {
      this.dashboardOrganizationService.typeInsightId =
        ImpactVerificationTypeInsightsEnum.DUE_DILIGENCE;
      return ImpactVerificationTypeInsightsEnum.DUE_DILIGENCE;
    } else if (splittedUrl.includes('wellbeing')) {
      this.dashboardOrganizationService.typeInsightId =
        ImpactVerificationTypeInsightsEnum.WELLBEING;
      return ImpactVerificationTypeInsightsEnum.WELLBEING;
    }

    return null;
  }

  countVerificationRequests(organizationId: number) {
    if (
      this.currentLoggedInOrganization?.type_organization_id ===
        TypeOrganizationEnum.IMPACT_FUNDER ||
      this.currentLoggedInOrganization?.type_organization_id ===
        TypeOrganizationEnum.CORPORATION
    ) {
      this.countRequestedVerificationRequests(organizationId);
      return;
    }
    this.countReceivedVerificationRequests(organizationId);
  }

  countRequestedVerificationRequests(organizationId: number) {
    this.impactVerificationService
      .countRequestedByOrganizationId(organizationId)
      .subscribe((res) => {
        this.verificationRequests = +res.count;
      });
  }

  countReceivedVerificationRequests(organizationId: number) {
    this.impactVerificationService
      .countReceivedByOrganizationId(organizationId)
      .subscribe((res) => {
        this.verificationRequests = +res.count;
      });
  }

  subscribeToOrganization() {
    this.subscriptions['selectedImpactPartner'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.selectedImpactPartner = organization;
          this.menuUrlPrefix = `organizations/${this.selectedImpactPartner?.id}`;
        }
      });
  }
}
