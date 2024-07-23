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
import { ImpactVerificationPricingTierService } from '../../../impact-verification/impact-verification-pricing-tier/impact-verification-pricing-tier.service';
import { ImpactVerificationPricingTier } from '../../../impact-verification/impact-verification-pricing-tier/impact-verification-pricing-tier.model';

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
  sliderValue: number = 0;

  dependanciesLoading = {
    ageRange: false,
    ethnicity: false,
    relationshipStatus: false,
    sex: false,
    communityReachLevel: false,
    pricingTier: false,
  };

  dependancies: { [key: string]: any } = {
    ageRange: [],
    ethnicity: [],
    relationshipStatus: [],
    sex: [],
    communityReachLevel: [],
    pricingTier: [],
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
    public communityReachLevelService: CommunityReachLevelService,
    public pricingTierService: ImpactVerificationPricingTierService
  ) {
    super(impactVerificationSetupService, 'participantsForm');
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.subscriptions['sex'] = this.sexService.data$.subscribe((data) => {
      this.dependancies['sex'] = data;
    });

    this.subscriptions['ethnicity'] = this.ethnicityService.data$.subscribe(
      (data) => {
        this.dependancies['ethnicity'] = data;
      }
    );

    this.subscriptions['relationshipStatus'] =
      this.relationshipStatusService.data$.subscribe((data) => {
        this.dependancies['relationshipStatus'] = data;
      });

    this.subscriptions['ageRange'] = this.ageRangeService.data$.subscribe(
      (data) => {
        this.dependancies['ageRange'] = data;
      }
    );

    this.subscriptions['communityReachLevel'] =
      this.communityReachLevelService.data$.subscribe((data) => {
        this.dependancies['communityReachLevel'] = data;
      });
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

  sliderPercent(index: number) {
    const percent = index * 11;
    return percent === 99 ? 100 : percent;
  }
}
