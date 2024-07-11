import { Component } from '@angular/core';
import {
  BaseComponent,
  BaseCreateComponent,
} from '../../../shared/base-component';
import { ImpactVerificationSetupService } from '../../../impact-verification/impact-verification-setup/impact-verification-setup.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard-organization-impact-verification-setup',
  templateUrl:
    './dashboard-organization-impact-verification-setup.component.html',
  styleUrls: [
    './dashboard-organization-impact-verification-setup.component.scss',
  ],
})
export class DashboardOrganizationImpactVerificationSetupComponent extends BaseCreateComponent<any> {
  total: number | string = '';
  respondents = '';
  childUrl = '';

  constructor(
    public impactVerificationSetupService: ImpactVerificationSetupService
  ) {
    super();
    this.impactVerificationSetupService.total.subscribe((total) => {
      this.total = total;
    });
    this.impactVerificationSetupService.respondents.subscribe((val) => {
      this.respondents = val;
    });

    this.router.events.subscribe((evt: any) => {
      if (!(evt instanceof NavigationEnd)) return;
      this.childUrl = evt['url'];
    });
  }

  initForm() {
    this.form = this.fb.group({
      communitiesForm: this.fb.group({
        location: [null, Validators.required],
        location_placeholder: [null, Validators.required],
      }),
      participantsForm: this.fb.group({
        communityReachLevel: [null, Validators.required],
        numberOfParticipants: [0, Validators.required],
        impact_stories: [false, Validators.required],
        numberOfParticipantsPlaceholder: [0, Validators.required],
        ageRange: [[], Validators.required],
        sex: [[], Validators.required],
        relationshipStatus: [[], Validators.required],
        ethnicity: [[], Validators.required],
      }),
      launchForm: this.fb.group({}),
    });

    this.impactVerificationSetupService.form = this.form;
  }

  override ngOnInit() {
    super.ngOnInit();
    this.initForm();
    this.childUrl = this.router.url;
  }

  nextComponent() {
    if (this.childUrl === '/setupreport/participants')
      return '/setupreport/launch';
    return '/setupreport/participants';
  }
}
