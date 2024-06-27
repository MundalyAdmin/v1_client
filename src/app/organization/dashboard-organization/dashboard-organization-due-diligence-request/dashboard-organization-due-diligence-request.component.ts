import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { Organization } from '../../organization.model';
import { OrganizationService } from '../../organization.service';
import { DashboardOrganizationDueDiligenceService } from './dashboard-organization-due-diligence.service';
import { ImpactVerificationService } from '../../../impact-verification/impact-verification.service';
import { TypeImpactVerificationEnum } from '../../../impact-verification/enums/type-impact-verification.enum';

@Component({
  selector: 'app-dashboard-organization-due-diligence-request',
  templateUrl: './dashboard-organization-due-diligence-request.component.html',
  styleUrls: ['./dashboard-organization-due-diligence-request.component.scss'],
})
export class DashboardOrganizationDueDiligenceRequestComponent
  extends BaseComponent<any>
  implements OnInit
{
  @Output() close$ = new EventEmitter();
  @Output() requested$ = new EventEmitter();
  selectedOrganization: Organization | null = null;

  constructor(
    public organizationService: OrganizationService,
    public impactVerificationService: ImpactVerificationService
  ) {
    super(impactVerificationService);
  }

  override ngOnInit(): void {
    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.selectedOrganization = organization;
        }
      });
  }

  create() {
    if (this.selectedOrganization) {
      this.loading = true;
      this.impactVerificationService
        .store({
          inquirer_id: this.authService.organization?.id,
          organization_id: this.selectedOrganization.id,
          inquirer_email: this.authService.user?.email,
          type_impact_verification_id:
            TypeImpactVerificationEnum.DUE_DILIGENCE_VERIFICATION,
        })
        .subscribe(() => {
          this.loading = false;
          this.close$.emit();
          this.requested$.emit();
          this.helper.notification.alertSuccess(
            'Request sent successfully',
            'The sales team will contact you shortly',
            3000
          );
        });
    }
  }
}
