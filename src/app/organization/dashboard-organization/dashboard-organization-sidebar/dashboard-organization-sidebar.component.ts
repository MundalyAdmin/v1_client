import { Component, EventEmitter, Output } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { Organization } from '../../organization.model';
import { AuthService } from '../../../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../../user/user.model';
import { Storage } from '../../../shared/helpers/storage/storage';
import { OrganizationService } from '../../organization.service';
import { CategoryOrganizationEnum } from '../../category-organization/category-organization.enum';
import { ImpactInitiativeService } from '../../../scale/impact-initiative/impact-initiative.service';
import { ImpactInitiative } from '../../../scale/impact-initiative/impact-initiative.model';
import { TypeOrganizationEnum } from '../../type-organization/type-organization.enum';
import { ImpactVerificationService } from '../../../impact-verification/impact-verification.service';

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
  @Output() showSetupLogoAndCoverModal$ = new EventEmitter();

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public storage: Storage,
    public organizationService: OrganizationService,
    public impactInitiativeService: ImpactInitiativeService,
    public impactVerificationService: ImpactVerificationService
  ) {
    super();
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
    this.user = this.authService.user;

    this.authService.organization$.subscribe((organization) => {
      this.organization = organization;
      this.typeOrganizationId = this.organization?.type_organization_id || null;

      this.countVerificationRequests(organization?.id!);

      this.impactVerificationService.notification$.subscribe((res) => {
        this.countVerificationRequests(organization?.id!);
      });

      if (
        this.organization?.type_organization_id ===
          TypeOrganizationEnum.IMPACT_IMPLEMENTER ||
        this.organization?.type_organization_id ===
          TypeOrganizationEnum.SUPPLIER
      ) {
        this.subscribeToImpactInitiative();
      } else if (
        this.organization?.type_organization_id ===
          TypeOrganizationEnum.CORPORATION ||
        this.organization?.type_organization_id ===
          TypeOrganizationEnum.IMPACT_FUNDER
      ) {
        this.subscribeToOrganization();
      }
    });
  }

  countVerificationRequests(organizationId: number) {
    this.impactVerificationService
      .countByOrganizationId(organizationId)
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

  subscribeToImpactInitiative() {
    this.subscriptions['impactInitiative'] =
      this.impactInitiativeService.singleData$.subscribe((impactInitiative) => {
        if (impactInitiative) {
          this.selectedImpactInitiative = impactInitiative;
          this.menuUrlPrefix = `initiatives/${this.selectedImpactInitiative?.id}`;
        }
      });
  }
}
