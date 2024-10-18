import { Component } from '@angular/core';
import { BaseCreateComponent } from 'src/app/shared/base-component';
import { OrganizationReport } from '../organization-report/organization-report.model';
import { OrganizationReportService } from '../organization-report/organization-report.service';
import { ImpactVerificationTypeInsightsService } from 'src/app/impact-verification/impact-verification-type-insights/impact-verification-type-insights.service';
import { Validators } from '@angular/forms';
import { ImpactVerification } from 'src/app/impact-verification/impact-verification.model';
import { ImpactVerificationService } from 'src/app/impact-verification/impact-verification.service';
import { OrganizationService } from '../../organization.service';
import { Organization } from '../../organization.model';
import { DashboardOrganizationService } from '../dashboard-organization.service';
import { ImpactVerificationSetup } from 'src/app/impact-verification/impact-verification-setup/impact-verification-setup.model';
import { ImpactVerificationSetupService } from 'src/app/impact-verification/impact-verification-setup/impact-verification-setup.service';

@Component({
  selector: 'app-dashboard-organization-reports-create',
  templateUrl: './dashboard-organization-reports-create.component.html',
  styleUrls: ['./dashboard-organization-reports-create.component.scss'],
})
export class DashboardOrganizationReportsCreateComponent extends BaseCreateComponent<OrganizationReport> {
  impactVerificationSetups: ImpactVerificationSetup[] = [];
  impactVerificationSetupLoading = false;
  organization: Organization | null = null;
  minDate!: Date;
  maxDate!: Date;

  constructor(
    public organizationReportService: OrganizationReportService,
    public impactVerificationSetupService: ImpactVerificationSetupService,
    private readonly organizationService: OrganizationService,
    private readonly dashboardOrganizationService: DashboardOrganizationService
  ) {
    super(organizationReportService);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.form = this.initForm();

    this.subscriptions['typeInsight'] =
      this.dashboardOrganizationService.typeInsight$.subscribe(
        (typeInsight) => {
          this.form.patchValue({
            type_insight_id: typeInsight,
          });
        }
      );

    this.subscriptions['organization'] =
      this.organizationService.singleData$.subscribe((organization) => {
        if (organization) {
          this.organization = organization || null;

          this.getOrganizationImpactVerificationSetups();

          this.form.patchValue({
            organization_id: this.organization?.id,
          });
        }
      });

    this.subscriptions['currentLoggedInOrganization2'] =
      this.authService.organization$.subscribe((organization) => {
        console.log(organization);
        this.form.patchValue({
          inquirer_id: organization?.id,
        });
      });
  }

  getOrganizationImpactVerificationSetups() {
    this.impactVerificationSetupLoading = true;
    this.impactVerificationSetupService
      .getByVerifiedOrganizationId(this.organization?.id!)
      .subscribe((impactVerificationSetups) => {
        this.impactVerificationSetups = impactVerificationSetups;
        this.impactVerificationSetupLoading = false;
      });
  }

  initForm() {
    const form = this.fb.group({
      name: [null, Validators.required],
      type_insight_id: [null, Validators.required],
      organization_id: [null, Validators.required],
      start_date_insight: [null, Validators.required],
      end_date_insight: [null, Validators.required],
      impact_verification_setup: [null, Validators.required],
      impact_verification_id: [null],
      inquirer_id: [null, Validators.required],
    });

    form.controls['start_date_insight'].valueChanges.subscribe((value) => {
      if (value) {
        this.minDate = value;
      }
    });

    form.controls['end_date_insight'].valueChanges.subscribe((value) => {
      if (value) {
        this.maxDate = value;
      }
    });

    return form;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.helper.notification.toastDanger(
        'Please fill in all required fields'
      );
      return;
    }

    this.loading = true;
    const data = {
      ...this.form.value,
      impact_verification_id: this.form.value.impact_verification_setup.id,
      impact_verification_setup: null,
    };
    this.organizationReportService.store(data).subscribe((reponse) => {
      console.log(reponse);
      window.location.href = reponse.data.checkoutSession.url;
      this.loading = false;
      this.initForm();
    });
  }
}
