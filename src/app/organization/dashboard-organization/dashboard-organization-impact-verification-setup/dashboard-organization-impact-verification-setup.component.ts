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
import { AgeRange } from '../../../age-range/age-range.model';
import { Sex } from '../../../sex/sex.model';
import { RelationshipStatus } from '../../../relationship-status/relationship-status.model';
import { Ethnicity } from '../../../ethnicity/ethnicity.model';
import { ImpactVerification } from '../../../impact-verification/impact-verification.model';
import { ImpactVerificationService } from '../../../impact-verification/impact-verification.service';
import { StatusImpactVerificationEnum } from '../../../impact-verification/enums/status-impact-verification.enum';

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
  totalPrice = 0;
  discountedPrice = 0;
  pageLoading = false;

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
      formName: 'setupForm',
    },
    {
      name: 'participants',
      position: 2,
      active: true,
      completed: false,
      formName: 'participantsForm',
    },

    {
      name: 'launch',
      position: 3,
      active: true,
      completed: false,
      formName: 'launchForm',
    },
    {
      name: 'survey',
      position: -1,
      active: true,
      completed: false,
      formName: 'buildSurveyForm',
    },
  ];
  shownPrice: number = 0;

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
    public impactVerificationService: ImpactVerificationService,
    public route: ActivatedRoute
  ) {
    super();
  }

  isCustomInsightSelected() {
    const selectedTypeInsights = this.form?.value['setupForm'][
      'typeInsights'
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
        tier.min_number_of_participants <= numberOfParticipants &&
        tier.max_number_of_participants >= numberOfParticipants
    );

    return matchingPricingTier ? +matchingPricingTier.price : 0;
  }

  initForm() {
    this.form = this.fb.group({
      setupForm: this.fb.group({
        location: [null, Validators.required],
        location_placeholder: [null, Validators.required],
        typeInsights: [[], Validators.required],
        impactVerificationId: [null, Validators.required],
        surveyName: [null],
        surveyLink: [null],
      }),
      participantsForm: this.fb.group({
        communityReachLevel: [null, Validators.required],
        numberOfParticipants: [100, Validators.required],
        impactStoriesEnabled: [false, Validators.required],
        numberOfParticipantsPlaceholder: [0, Validators.required],
        ageRange: [[]],
        sex: [[]],
        relationshipStatus: [[]],
        ethnicity: [[]],
      }),
      buildSurveyForm: this.fb.group({}),
      launchForm: this.fb.group({
        paymentMethod: [null, Validators.required],
      }),
    });

    this.impactVerificationSetupService.form = this.form;

    this.form.valueChanges.subscribe((value) => {
      // Get the total price of the verification
      const { totalPrice, discountedPrice } = this.getTotalPrice(
        value['setupForm']['typeInsights'],
        value['participantsForm']['communityReachLevel'],
        +value['participantsForm']['numberOfParticipants'],
        value['participantsForm']['impactStoriesEnabled']
      );

      this.totalPrice = totalPrice;
      this.discountedPrice = discountedPrice;
      this.shownPrice = totalPrice - discountedPrice;

      this.impactVerificationSetupService.totalPrice$.next(totalPrice);
      this.impactVerificationSetupService.discountedPrice$.next(
        discountedPrice
      );

      // Enforcing that either well-being or alignment is selected
      if (
        (!value['setupForm']['typeInsights']?.length ||
          (!value['setupForm']['typeInsights']
            .map((item: ImpactVerificationTypeInsights) => item?.id)
            .includes(ImpactVerificationTypeInsightsEnum.DUE_DILIGENCE) &&
            !value['setupForm']['typeInsights']
              .map((item: ImpactVerificationTypeInsights) => item?.id)
              .includes(ImpactVerificationTypeInsightsEnum.WELLBEING))) &&
        this.dependancies['typeInsights'].length
      ) {
        this.form.controls['setupForm'].patchValue(
          {
            typeInsights: [
              ...value['setupForm']['typeInsights'],
              this.dependancies['typeInsights'][0],
            ],
          },
          {
            emitEvent: false,
            onlySelf: true,
          }
        );
      }

      // Make sure to updated the validity of every steps
      this.steps.forEach((step) => {
        step.completed = this.form.controls[step.formName].valid;
      });
    });
  }

  getTotalPrice(
    typeInsights: ImpactVerificationTypeInsights[],
    reachLevel: CommunityReachLevel,
    numberOfParticipants: number,
    isImpactStoriesEnabled = false
  ) {
    let totalPrice = 0;
    let discountedPrice = 0;

    typeInsights.forEach(
      (insight: ImpactVerificationTypeInsights, index: number) => {
        const individualPrice = this.getIndividualInsightPrice(
          reachLevel,
          numberOfParticipants,
          insight.id!
        );

        if (index > 0) {
          discountedPrice += individualPrice * 0.5;
        }

        totalPrice += individualPrice;
      }
    );

    if (isImpactStoriesEnabled && totalPrice > 0) {
      totalPrice += this.getImpactStoriesCost(numberOfParticipants);
    }

    return { totalPrice, discountedPrice };
  }

  getImpactStoriesCost(numberOfParticipants: number) {
    const multiplier = numberOfParticipants / 100;

    return IMPACT_STORIES_COST_PER_100_PARTICIPANTS * multiplier;
  }

  override ngOnInit() {
    super.ngOnInit();
    this.initForm();

    this.getPricingTiers();
    this.getAgeRanges();
    this.getEthnicities();
    this.getSexes();
    this.getRelationshipStatus();
    this.getCommunityReachLevels();
    this.getTypeInsights();

    this.router.navigate(['./'], { relativeTo: this.route });

    // Set the step whenever the route changes
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.navigateToTheRightStepByUrl(this.router.url);
      });

    // Subscribe to the current impact verification
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.getCurrentImpactVerification(+params['id']);
      }
    });
  }

  getCurrentImpactVerification(impactVerificationId: number) {
    this.pageLoading = true;
    this.impactVerificationService
      .show(impactVerificationId)
      .subscribe((impactVerification: ImpactVerification) => {
        // Redirect to the dashboard if the user is not authorized to setup the impact verification
        if (
          impactVerification.status_impact_verification_id !==
          StatusImpactVerificationEnum.INQUIRER_CONFIRMATION
        ) {
          this.router.navigate(['/dashboard', 'verification-requests'], {
            relativeTo: this.route,
          });
        }

        // Update the form with the current impact verification
        this.form.controls['setupForm'].patchValue({
          impactVerificationId: impactVerification.id,
        });

        this.pageLoading = false;
      });
  }

  navigateToTheRightStepByUrl(url: string) {
    const urlSegments = url.split('/');

    const stepIndex =
      this.steps.findIndex(
        (step) => step.name === urlSegments[urlSegments.length - 1]
      ) || 0;

    this.deactivateAllSteps();

    this.steps[stepIndex].active = true;
  }

  deactivateAllSteps() {
    this.steps = this.steps.map((step) => {
      return { ...step, active: false };
    });
  }

  nextStep() {
    const activeStepIndex = this.steps.findIndex(
      (step) => step.active === true
    );

    this.deactivateAllSteps();

    const nextStep = this.steps.find((step) => {
      return step.position === this.steps[activeStepIndex]?.position! + 1;
    });

    this.router.navigate([nextStep!.name], {
      relativeTo: this.route,
    });
  }

  getTypeInsights(): void {
    this.dependanciesLoading.typeInsights = true;
    this.typeInsightsService.get().subscribe((typeInsights) => {
      this.dependancies['typeInsights'] = typeInsights;
      this.dependanciesLoading.typeInsights = false;
      if (!this.form.value['setupForm']['typeInsights'].length) {
        this.form.controls['setupForm'].patchValue({
          typeInsights: [typeInsights[0]],
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
    if (!this.form.valid) {
      this.helper.notification.alertDanger('Form invalid');
      return;
    }

    this.loading = true;
    const data = {
      location: this.form.controls['setupForm'].value['location'],
      survey_name: this.form.controls['setupForm'].value['surveyName'],
      survey_link: this.form.controls['setupForm'].value['surveyLink'],
      number_of_participants:
        this.form.controls['participantsForm'].value['numberOfParticipants'],
      impact_stories_enabled:
        this.form.controls['participantsForm'].value['impactStoriesEnabled'],
      type_insights: this.form.controls['setupForm'].value['typeInsights'].map(
        (type_insight: ImpactVerificationTypeInsights) => type_insight.id
      ),
      impact_verification_id:
        this.form.controls['setupForm'].value['impactVerificationId'],

      community_reach_level_id:
        this.form.controls['participantsForm'].value['communityReachLevel']?.id,
      age_ranges: this.form.controls['participantsForm'].value['ageRange']?.map(
        (item: AgeRange) => item.id
      ),
      sexes: this.form.controls['participantsForm'].value['sex']?.map(
        (item: Sex) => item.id
      ),
      relationship_status: this.form.controls['participantsForm']?.value[
        'relationshipStatus'
      ]?.map((item: RelationshipStatus) => item.id),
      ethnicities: this.form.controls['participantsForm'].value[
        'ethnicity'
      ]?.map((item: Ethnicity) => item.id),
      payment_method: this.form.controls['launchForm'].value['paymentMethod'],
    };

    this.impactVerificationSetupService.store(data).subscribe({
      next: (data) => {
        window.location.href = data.data;
        this.loading = false;
        this.helper.notification.alertSuccess();
        // this.initForm();
        // this.router.navigate(['dashboard']);
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
