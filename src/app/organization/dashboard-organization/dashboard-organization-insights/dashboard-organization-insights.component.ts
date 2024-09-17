import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../../../shared/base-component';
import { OrganizationService } from '../../organization.service';
import { StatusImpactVerificationEnum } from '../../../impact-verification/enums/status-impact-verification.enum';

@Component({
  selector: 'app-dashboard-organization-insights',
  templateUrl: './dashboard-organization-insights.component.html',
  styleUrls: ['./dashboard-organization-insights.component.scss'],
})
export class DashboardOrganizationInsightsComponent extends BaseComponent<any> {
  dateForm!: FormGroup;
  minDate!: Date;
  maxDate!: Date;
  StatusImpactVerificationEnum = StatusImpactVerificationEnum;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public organizationService: OrganizationService
  ) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.initForm();

    this.route.queryParams.subscribe((params) => {
      if (params['startDate']) {
        this.dateForm.controls['startDate'].setValue(
          new Date(params['startDate'])
        );
      }

      if (params['endDate']) {
        this.dateForm.controls['endDate'].setValue(new Date(params['endDate']));
      }
    });
  }

  clearDates() {
    this.dateForm.reset();
    this.router.navigate(['./'], {
      relativeTo: this.route,
      queryParams: {
        startDate: null,
        endDate: null,
      },
      queryParamsHandling: 'merge',
    });
  }

  initForm() {
    this.dateForm = this.fb.group({
      startDate: [null],
      endDate: [null],
    });

    this.dateForm.valueChanges.subscribe((value) => {
      this.updateDate();
    });

    this.dateForm.controls['startDate'].valueChanges.subscribe((value) => {
      this.minDate = value;
    });

    this.dateForm.controls['endDate'].valueChanges.subscribe((value) => {
      this.maxDate = value;
    });
  }

  updateDate() {
    this.router.navigate(['./'], {
      relativeTo: this.route,
      queryParams: {
        startDate: this.dateForm.value?.startDate?.toISOString().split('T')[0],
        endDate: this.dateForm.value?.endDate?.toISOString().split('T')[0],
      },
      queryParamsHandling: 'merge',
    });
  }
}
