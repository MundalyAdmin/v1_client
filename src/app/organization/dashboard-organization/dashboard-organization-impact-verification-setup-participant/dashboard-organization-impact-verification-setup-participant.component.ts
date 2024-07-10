import { Component } from '@angular/core';
import { ImpactVerificationSetupService } from '../../../impact-verification/impact-verification-setup/impact-verification-setup.service';

@Component({
  selector: 'app-dashboard-organization-impact-verification-setup-participant',
  templateUrl:
    './dashboard-organization-impact-verification-setup-participant.component.html',
  styleUrls: [
    './dashboard-organization-impact-verification-setup-participant.component.scss',
  ],
})
export class DashboardOrganizationImpactVerificationSetupParticipantComponent {
  level: string = 'level1';
  value: number = 0;
  respondents: string = '100';
  impact: boolean = false;

  reachOptions: string[] = Array.from(Array(10).keys()).map((x) => {
    if (x === 0) return '100';
    if (x === 9) return '>2000';
    return (x * 250).toString();
  });

  ageRange: { [key: string]: boolean } = {};

  ethnicities: { [key: string]: boolean } = {};

  sexes: { [key: string]: boolean } = {};

  relationshipStatus: { [key: string]: boolean } = {};

  constructor(
    public impactVerificationSetupService: ImpactVerificationSetupService
  ) {
    impactVerificationSetupService.level.subscribe((val) => (this.level = val));
    impactVerificationSetupService.respondents.subscribe(
      (val) => (this.respondents = val)
    );
    impactVerificationSetupService.impact.subscribe(
      (val) => (this.impact = val)
    );
    impactVerificationSetupService.ageRange.subscribe(
      (val) => (this.ageRange = val)
    );
    impactVerificationSetupService.ethnicities.subscribe(
      (val) => (this.ethnicities = val)
    );
    impactVerificationSetupService.sexes.subscribe((val) => (this.sexes = val));
    impactVerificationSetupService.relationshipStatus.subscribe(
      (val) => (this.relationshipStatus = val)
    );
  }

  selectLevel(level: string): void {
    this.impactVerificationSetupService.level.next(level);
  }

  setReachOption(opt: string): void {
    const num = Number(opt);
    this.impactVerificationSetupService.respondents.next(opt);
    if (isNaN(num)) {
      this.value = 99;
      return;
    }
    console.log(num);
    if (num < 250) {
      this.value = 0;
      return;
    }
    this.value = (num / 250) * 11;
  }

  reachChanged(num: number) {
    this.impactVerificationSetupService.respondents.next(
      this.reachOptions[num / 11]
    );
  }

  changeImpact() {
    this.impactVerificationSetupService.impact.next(!this.impact);
  }

  selectAgeRange(key: string) {
    const newVal = !this.ageRange[key];
    if (key === 'All' && newVal) {
      this.impactVerificationSetupService.ageRange.next({
        ...Object.fromEntries(
          Object.keys(this.ageRange).map((k) => [k, false])
        ),
        [key]: newVal,
      });
      return;
    }

    this.impactVerificationSetupService.ageRange.next({
      ...this.ageRange,
      [key]: newVal,
      All: false,
    });
  }

  selectEthnicity(key: string) {
    const newVal = !this.ethnicities[key];

    if (key === 'All' && newVal) {
      this.impactVerificationSetupService.ethnicities.next({
        ...Object.fromEntries(
          Object.keys(this.ethnicities).map((k) => [k, false])
        ),
        [key]: newVal,
      });
      return;
    }

    this.impactVerificationSetupService.ethnicities.next({
      ...this.ethnicities,
      [key]: newVal,
      All: false,
    });
  }

  selectSex(key: string) {
    const newVal = !this.sexes[key];

    if (key === 'All' && newVal) {
      this.impactVerificationSetupService.sexes.next({
        ...Object.fromEntries(Object.keys(this.sexes).map((k) => [k, false])),
        [key]: newVal,
      });
      return;
    }

    this.impactVerificationSetupService.sexes.next({
      ...this.sexes,
      [key]: newVal,
      All: false,
    });
  }

  selectRelationshipStatus(key: string) {
    const newVal = !this.relationshipStatus[key];

    if (key === 'All' && newVal) {
      this.impactVerificationSetupService.relationshipStatus.next({
        ...Object.fromEntries(
          Object.keys(this.relationshipStatus).map((k) => [k, false])
        ),
        [key]: newVal,
      });
      return;
    }

    this.impactVerificationSetupService.relationshipStatus.next({
      ...this.relationshipStatus,
      [key]: newVal,
      All: false,
    });
  }

  sliderPercent(index: number) {
    const percent = index * 11;
    return percent === 99 ? 100 : percent;
  }
}
