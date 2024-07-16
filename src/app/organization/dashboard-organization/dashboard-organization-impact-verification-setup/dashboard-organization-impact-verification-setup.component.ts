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
import { ImpactVerificationTypeInsightsService } from '../../../impact-verification/impact-verification-type-insights/impact-verification-type-insights.service';
import { ImpactVerificationTypeInsights } from '../../../impact-verification/impact-verification-type-insights/impact-verification-type-insights.model';
import { ImpactVerificationTypeInsightsEnum } from '../../../impact-verification/impact-verification-type-insights/impact-verification-type-insights.enum';
import { filter } from 'rxjs';

const IMPACT_STORIES_COST_PER_100_PARTICIPANTS = 15;

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
    typeInsights: false,
  };

  dependancies: { [key: string]: any } = {
    ageRange: [],
    ethnicity: [],
    relationshipStatus: [],
    sex: [],
    communityReachLevel: [],
    pricingTier: [],
    typeInsights: [],
  };

  steps = [
    {
      name: 'setup',
      position: 1,
      active: true,
      completed: false,
      formName: 'communitiesForm',
    },
    {
      name: 'participants',
      position: 2,
      active: true,
      completed: false,
      formName: 'participantsForm',
    },
    {
      name: 'survey',
      position: 3,
      active: true,
      completed: false,
      formName: 'buildSurveyForm',
    },
    {
      name: 'launch',
      position: 4,
      active: true,
      completed: false,
      formName: 'launchForm',
    },
  ];

  get activeStep() {
    return this.steps.find((step) => step.active === true);
  }

  constructor(
    public impactVerificationSetupService: ImpactVerificationSetupService,
    public sexService: SexService,
    public ethnicityService: EthnicityService,
    public relationshipStatusService: RelationshipStatusService,
    public ageRangeService: AgeRangeService,
    public communityReachLevelService: CommunityReachLevelService,
    public pricingTierService: ImpactVerificationPricingTierService,
    public typeInsightsService: ImpactVerificationTypeInsightsService,
    public route: ActivatedRoute
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

  isCustomInsightSelected() {
    const selectedTypeInsights = this.form?.value['communitiesForm'][
      'type_insights'
    ] as ImpactVerificationTypeInsights[];
    const customInsightId = ImpactVerificationTypeInsightsEnum.CUSTOM_INSIGHTS;

    return selectedTypeInsights.some(
      (typeInsight) => typeInsight.id === customInsightId
    );
  }

  getIndividualInsightPrice(
    reachLevel: CommunityReachLevel,
    numberOfParticipants: number,
    typeInsight: ImpactVerificationTypeInsightsEnum
  ): number {
    const matchingPricingTier = this.dependancies['pricingTier'].find(
      (tier: ImpactVerificationPricingTier) =>
        tier.community_reach_level_id === reachLevel.id &&
        tier.impact_verification_type_insight_id === typeInsight &&
        (typeInsight === ImpactVerificationTypeInsightsEnum.CUSTOM_INSIGHTS
          ? tier.min_number_of_participants <= numberOfParticipants &&
            tier.max_number_of_participants >= numberOfParticipants
          : true)
    );

    return matchingPricingTier ? +matchingPricingTier.price : 0;
  }

  initForm() {
    this.form = this.fb.group({
      communitiesForm: this.fb.group({
        location: [null, Validators.required],
        location_placeholder: [null, Validators.required],
        type_insights: [[], Validators.required],
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
      buildSurveyForm: this.fb.group({}),
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
      // Get the total price of the verification
      this.totalPrice = this.getTotalPrice(
        value['communitiesForm']['type_insights'],
        value['participantsForm']['communityReachLevel'],
        +value['participantsForm']['numberOfParticipants'],
        value['participantsForm']['impact_stories']
      );

      // Enforcing that either well-being or due diligence is selected
      if (
        (!value['communitiesForm']['type_insights']?.length ||
          (!value['communitiesForm']['type_insights']
            .map((item: ImpactVerificationTypeInsights) => item?.id)
            .includes(ImpactVerificationTypeInsightsEnum.DUE_DILIGENCE) &&
            !value['communitiesForm']['type_insights']
              .map((item: ImpactVerificationTypeInsights) => item?.id)
              .includes(ImpactVerificationTypeInsightsEnum.WELLBEING))) &&
        this.dependancies['typeInsights'].length
      ) {
        this.form.controls['communitiesForm'].patchValue({
          type_insights: [
            ...value['communitiesForm']['type_insights'],
            this.dependancies['typeInsights'][0],
          ],
        });
      }

      // Limit the number of particpant to 100 if custom insights is not selected
      if (
        !value['communitiesForm']['type_insights'].some(
          (item: ImpactVerificationTypeInsights) =>
            item.id === ImpactVerificationTypeInsightsEnum.CUSTOM_INSIGHTS
        )
      ) {
        // Reset the number of participants to 100
        this.form.patchValue(
          {
            participantsForm: {
              numberOfParticipants: 100,
              numberOfParticipantsPlaceholder: 0,
            },
          },
          { onlySelf: true, emitEvent: false }
        );

        // Disable the number of participants input
        this.form.controls['participantsForm']
          .get('numberOfParticipantsPlaceholder')
          ?.disable({ onlySelf: true, emitEvent: false });

        this.form.controls['participantsForm']
          .get('numberOfParticipants')
          ?.updateValueAndValidity({ onlySelf: true, emitEvent: false });
      } else {
        // Enable the number of participants input
        this.form.controls['participantsForm']
          .get('numberOfParticipantsPlaceholder')
          ?.enable({ onlySelf: true, emitEvent: false });

        this.form.controls['participantsForm']
          .get('numberOfParticipants')
          ?.updateValueAndValidity({ onlySelf: true, emitEvent: false });
      }

      // Make sure to updated the validity of every steps
      Object.keys(this.form.controls).forEach((controlKey) => {
        this.steps.forEach((step) => {
          step.completed = this.form.controls[controlKey].valid;
        });
      });
    });
  }

  getTotalPrice(
    typeInsights: ImpactVerificationTypeInsights[],
    reachLevel: CommunityReachLevel,
    numberOfParticipants: number,
    isImpactStoriesEnabled = false
  ): number {
    let totalPrice = 0;

    typeInsights.forEach((insight: ImpactVerificationTypeInsights) => {
      totalPrice += this.getIndividualInsightPrice(
        reachLevel,
        numberOfParticipants,
        insight.id!
      );
    });

    if (isImpactStoriesEnabled) {
      totalPrice += this.getImpactStoriesCost(numberOfParticipants);
    }

    return totalPrice;
  }

  getImpactStoriesCost(numberOfParticipants: number) {
    const multiplier = numberOfParticipants / 100;

    return IMPACT_STORIES_COST_PER_100_PARTICIPANTS * multiplier;
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
    this.getTypeInsights();

    // Set the step whenever the route changes
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const urlSegments = this.router.url.split('/');

        const stepIndex =
          this.steps.findIndex(
            (step) => step.name === urlSegments[urlSegments.length - 1]
          ) || 0;

        this.steps[stepIndex].active = true;
      });
  }

  nextStep() {
    const activeStepIndex = this.steps.findIndex(
      (step) => step.active === true
    );

    console.log(this.steps[activeStepIndex]);

    this.steps = this.steps.map((step) => {
      return { ...step, active: false };
    });

    const nextStep = this.steps.find((step) => {
      // console.log(step.position, this.steps[activeStepIndex]?.position! + 1);
      // console.log(step.position === this.steps[activeStepIndex]?.position! + 1);
      if (
        this.steps[activeStepIndex]!.position === 2 &&
        !this.isCustomInsightSelected()
      ) {
        console.log(step.position, this.steps[activeStepIndex]?.position! + 2);
        return step.position === this.steps[activeStepIndex]?.position! + 2;
      }
      return step.position === this.steps[activeStepIndex]?.position! + 1;
      // }
    });

    console.log(nextStep);

    this.router.navigate([nextStep!.name], {
      relativeTo: this.route,
    });
  }

  getTypeInsights(): void {
    this.dependanciesLoading.typeInsights = true;
    this.typeInsightsService.get().subscribe((typeInsights) => {
      this.dependancies['typeInsights'] = typeInsights;
      this.dependanciesLoading.typeInsights = false;
      if (!this.form.value['communitiesForm']['type_insights'].length) {
        this.form.controls['communitiesForm'].patchValue({
          type_insights: [typeInsights[0]],
        });
      }
    });
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
