import { Component } from '@angular/core';
import {
  BaseComponent,
  BaseCreateComponent,
} from '../../../shared/base-component';
import { ImpactVerificationSetupService } from '../../../impact-verification/impact-verification-setup/impact-verification-setup.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { CommunityReachLevel } from '../../../impact-verification/community-reach-level/community-reach-level.model';
import { ImpactVerificationPricingTier } from '../../../impact-verification/impact-verification-pricing-tier/impact-verification-pricing-tier.model';
import { SexService } from '../../../sex/sex.service';
import { EthnicityService } from '../../../ethnicity/ethnicity.service';
import { RelationshipStatusService } from '../../../relationship-status/relationship-status.service';
import { AgeRangeService } from '../../../age-range/age-range.service';
import { ImpactVerificationPricingTierService } from '../../../impact-verification/impact-verification-pricing-tier/impact-verification-pricing-tier.service';
import { CommunityReachLevelService } from '../../../impact-verification/community-reach-level/community-reach-level.service';

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
  totalPrice = 0;

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

  constructor(
    public impactVerificationSetupService: ImpactVerificationSetupService,
    public sexService: SexService,
    public ethnicityService: EthnicityService,
    public relationshipStatusService: RelationshipStatusService,
    public ageRangeService: AgeRangeService,
    public communityReachLevelService: CommunityReachLevelService,
    public pricingTierService: ImpactVerificationPricingTierService
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

  getPrice(
    communityReachLevel: CommunityReachLevel,
    numberOfParticipants: number,
    impactStoriesEnabled: boolean = false
  ) {
    const price = this.dependancies['pricingTier'].find(
      (item: ImpactVerificationPricingTier) =>
        communityReachLevel?.id === item?.community_reach_level_id &&
        item?.min_number_of_participants <= numberOfParticipants &&
        item?.max_number_of_participants >= numberOfParticipants
    )?.price;

    console.log(price);

    return price;
  }

  initForm() {
    this.form = this.fb.group({
      communitiesForm: this.fb.group({
        location: [null, Validators.required],
        location_placeholder: [null, Validators.required],
      }),
      participantsForm: this.fb.group({
        communityReachLevel: [null, Validators.required],
        numberOfParticipants: [100, Validators.required],
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

    this.getPricingTiers();
    this.getCommunityReachLevels();
    this.getAgeRanges();
    this.getEthnicities();
    this.getSexes();
    this.getRelationshipStatus();

    this.form.valueChanges.subscribe((value) => {
      console.log(value);
      this.totalPrice = this.getPrice(
        value['participantsForm']['communityReachLevel'],
        value['participantsForm']['numberOfParticipants']
      );
    });
  }

  override ngOnInit() {
    super.ngOnInit();
    this.initForm();
    this.childUrl = this.router.url;

    this.getPricingTiers();
    this.getAgeRanges();
    this.getEthnicities();
    this.getSexes();
    this.getRelationshipStatus();
    this.getCommunityReachLevels();
  }

  nextComponent() {
    if (this.childUrl === '/setupreport/participants')
      return '/setupreport/launch';
    return '/setupreport/participants';
  }

  getPricingTiers(): void {
    this.dependanciesLoading.pricingTier = true;
    this.pricingTierService.get().subscribe((pricingTiers) => {
      this.dependancies['pricingTier'] = pricingTiers;
      this.dependanciesLoading.pricingTier = false;
    });
  }

  getCommunityReachLevels(): void {
    this.dependanciesLoading.communityReachLevel = true;
    this.communityReachLevelService.get().subscribe({
      next: (data) => {
        this.dependancies['communityReachLevel'] = data;
        this.dependanciesLoading.communityReachLevel = false;
        if (!this.form.value['communityReachLevel']) {
          this.form.controls['participantsForm'].patchValue({
            communityReachLevel: data[0],
          });
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

  submit() {
    this.impactVerificationSetupService.payment().subscribe((data) => {
      window.location.href = data;
    });
  }
}
