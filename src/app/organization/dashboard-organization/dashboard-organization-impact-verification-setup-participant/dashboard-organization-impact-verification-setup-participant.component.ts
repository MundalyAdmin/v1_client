import { Component } from '@angular/core';
import { ImpactVerificationSetupService } from '../../../impact-verification/impact-verification-setup/impact-verification-setup.service';
import { SexService } from '../../../sex/sex.service';
import { EthnicityService } from '../../../ethnicity/ethnicity.service';
import { RelationshipStatusService } from '../../../relationship-status/relationship-status.service';
import { AgeRangeService } from '../../../age-range/age-range.service';
import { BaseCreateComponent } from '../../../shared/base-component';
import { CommonModel } from '../../../shared/models/common.model';
import { DashboardOrganizationImpactVerificationSetupBaseComponent } from '../dashboard-organization-impact-verification-setup-base/dashboard-organization-impact-verification-setup-base.component';
import { CommunityReachLevelService } from '../../../impact-verification/community-reach-level/community-reach-level.service';
import { CommunityReachLevel } from '../../../impact-verification/community-reach-level/community-reach-level.model';

type Option = { label: string; value: string };

@Component({
  selector: 'app-dashboard-organization-impact-verification-setup-participant',
  templateUrl:
    './dashboard-organization-impact-verification-setup-participant.component.html',
  styleUrls: [
    './dashboard-organization-impact-verification-setup-participant.component.scss',
  ],
})
export class DashboardOrganizationImpactVerificationSetupParticipantComponent extends DashboardOrganizationImpactVerificationSetupBaseComponent {
  level: string = 'level1';
  sliderValue: number = 0;
  respondents: string = '100';
  impact: boolean = false;

  dependanciesLoading = {
    ageRange: false,
    ethnicity: false,
    relationshipStatus: false,
    sex: false,
    communityReachLevel: false,
  };

  dependancies: { [key: string]: any } = {
    ageRange: [],
    ethnicity: [],
    relationshipStatus: [],
    sex: [],
    communityReachLevel: [],
  };

  reachOptions: string[] = Array.from(Array(10).keys()).map((x) => {
    if (x === 0) return '100';
    if (x === 9) return '>2000';
    return (x * 250).toString();
  });

  constructor(
    public impactVerificationSetupService: ImpactVerificationSetupService,
    public sexService: SexService,
    public ethnicityService: EthnicityService,
    public relationshipStatusService: RelationshipStatusService,
    public ageRangeService: AgeRangeService,
    public communityReachLevelService: CommunityReachLevelService
  ) {
    super(impactVerificationSetupService, 'participantsForm');
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.getAgeRanges();
    this.getEthnicities();
    this.getSexes();
    this.getRelationshipStatus();
    this.getCommunityReachLevels();
  }

  isSelected(id: number, type: string) {
    const selectedOptions = this.form.controls[type].value;
    const totalOptions = this.dependancies[type].length;

    if (
      selectedOptions?.length === totalOptions ||
      selectedOptions?.length === 0
    ) {
      return false;
    }

    return selectedOptions?.some((option: CommonModel) => option?.id === id);
  }

  getCommunityReachLevels(): void {
    this.dependanciesLoading.communityReachLevel = true;
    this.communityReachLevelService.get().subscribe({
      next: (data) => {
        this.dependancies['communityReachLevel'] = data;
        this.dependanciesLoading.communityReachLevel = false;
        if (!this.form.value['communityReachLevel']) {
          this.form.patchValue({ communityReachLevel: data[0] });
        }
      },
    });
  }

  getSexes(): void {
    this.dependanciesLoading.sex = true;
    this.sexService.get().subscribe((sex) => {
      this.dependancies['sex'] = sex;
      this.dependanciesLoading.sex = false;
    });
  }

  getEthnicities(): void {
    this.dependanciesLoading.ethnicity = true;
    this.ethnicityService.get().subscribe((ethnicity) => {
      this.dependancies['ethnicity'] = ethnicity;
      this.dependanciesLoading.ethnicity = false;
    });
  }

  getRelationshipStatus(): void {
    this.dependanciesLoading.relationshipStatus = true;
    this.relationshipStatusService.get().subscribe((relationshipStatus) => {
      this.dependancies['relationshipStatus'] = relationshipStatus;
      this.dependanciesLoading.relationshipStatus = false;
    });
  }

  getAgeRanges(): void {
    this.dependanciesLoading.ageRange = true;
    this.ageRangeService.get().subscribe((ageRange) => {
      this.dependancies['ageRange'] = ageRange;
      this.dependanciesLoading.ageRange = false;
    });
  }

  onDemographicChange(event: any, type: string) {
    // Get the value from the event target
    const value = +event?.target.value;

    // Update the selected options based on the value
    if (value === -1) {
      this.form.patchValue({ [type]: [] });
    } else {
      if (this.isSelected(value, type)) {
        this.form.patchValue({
          [type]: this.form.controls[type].value?.filter(
            (item: any) => item.id !== value
          ),
        });
      } else {
        this.form.patchValue({
          [type]: [
            ...(this.form.controls[type].value || []),
            this.dependancies[type].find(
              (item: CommonModel) => item.id === value
            ),
          ],
        });

        // Reset selectedOptions if all age range options are selected
        if (
          this.form.controls[type].value.length ===
          this.dependancies[type].length
        ) {
          this.form.patchValue({ [type]: [] });
        }
      }
    }

    console.log(this.form.value);
  }

  selectLevel(level: CommunityReachLevel): void {
    this.form.patchValue({
      communityReachLevel: level,
    });
  }

  setReachOption(opt: string): void {
    const num = Number(opt);

    if (isNaN(num)) {
      this.form.patchValue({
        numberOfParticipantsPlaceholder: 99,
        numberOfParticipants: 2001,
      });
      return;
    }
    if (num < 250) {
      this.form.patchValue({
        numberOfParticipantsPlaceholder: 0,
        numberOfParticipants: 100,
      });
      return;
    }

    this.form.patchValue({
      numberOfParticipantsPlaceholder: (num / 250) * 11,
      numberOfParticipants: num,
    });
  }

  reachChanged(event: any) {
    const numberOfParticipantsPlaceholder = event.value;
    const numberOfParticipants = (+numberOfParticipantsPlaceholder / 11) * 250;

    this.form.patchValue({
      numberOfParticipants: numberOfParticipants,
      numberOfParticipantsPlaceholder: numberOfParticipantsPlaceholder,
    });
  }

  changeImpact() {
    this.impactVerificationSetupService.impact.next(!this.impact);
  }

  sliderPercent(index: number) {
    const percent = index * 11;
    return percent === 99 ? 100 : percent;
  }
}
