import { Component, Input } from '@angular/core';
import { ImpactInitiativeGoal } from '../impact-initiative-goal.model';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseCreateComponent } from '../../../shared/base-component';
import { ImpactInitiativeGoalService } from '../impact-initiative-goal.service';
import { ImpactInitiative } from '../../initiatives.model';
import { InitiativesService } from '../../initiatives.service';
import { TypeMetricImpactInitiativeGoal } from './../../components/type-metric-impact-initiative-goal/type-metric-impact-initiative-goal.model';
import { TypeMetricImpactInitiativeGoalService } from '../../components/type-metric-impact-initiative-goal/type-metric-impact-initiative-goal.service';

@Component({
  selector: 'app-impact-initiative-goal-create',
  templateUrl: './impact-initiative-goal-create.component.html',
  styleUrls: ['./impact-initiative-goal-create.component.scss'],
})
export class ImpactInitiativeGoalCreateComponent extends BaseCreateComponent<ImpactInitiativeGoal> {
  @Input() intiativeName!: string;
  @Input() cancelCreateGoal!: () => void;
  @Input() addInitiativeGoal?: (goal: ImpactInitiativeGoal) => void;
  @Input() updateInitiativeGoal?: (goal: ImpactInitiativeGoal) => void;
  @Input() goal?: ImpactInitiativeGoal;

  loadingTypeMetricImpactInitiativeGoal: boolean = false;

  impactInitiative: ImpactInitiative | null = null;

  constructor(
    public impactInitiativeGoalService: ImpactInitiativeGoalService,
    public impactInitiativeService: InitiativesService,
    public typeMetricImpactInitiativeGoalService: TypeMetricImpactInitiativeGoalService
  ) {
    super(impactInitiativeGoalService);
  }

  ngOnInit() {
    this.subscriptions['impact-initiative'] =
      this.impactInitiativeService.singleData$.subscribe((impactInitiative) => {
        if (impactInitiative) {
          this.initForm(impactInitiative);
          this.impactInitiative = impactInitiative;
        }
      });

    this.getTypeMetrics();
  }

  getTypeMetrics() {
    this.loading = true;
    this.typeMetricImpactInitiativeGoalService.get().subscribe({
      next: (response) => {
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  initForm(impactInitiative: ImpactInitiative) {
    this.form = this.fb.group({
      name: [null, Validators.required],
      metric_name: [null, Validators.required],
      metric_dimension: [{ value: null, disabled: true }, Validators.required],
      type_metric_impact_initiative_goal: [null, Validators.required],
      type_metric_impact_initiative_goal_id: [null],
      metric_target: [null, Validators.required],
      has_starting_value: [false, Validators.required],
      starting_value: [null],
      impact_initiative_id: [impactInitiative.id, Validators.required],
      impact_initiative_name: [
        { value: impactInitiative.name, disabled: true },
      ],
    });

    this.form.controls['metric_name'].valueChanges.subscribe((value) => {
      // @ts-ignore
      this.formValuePatcher('metric_dimension', value);
    });
  }

  override create() {
    if (this.form.valid) {
      this.loading = true;

      const data = {
        ...this.form.value,
        type_metric_impact_initiative_goal: null,
        type_metric_impact_initiative_goal_id: this.formValue(
          'type_metric_impact_initiative_goal'
        )?.id,
        has_starting_value: null,
        starting_value: this.form.get('has_starting_value')?.value
          ? this.formValue('starting_value')
          : null,
      };

      this.impactInitiativeGoalService.store(data).subscribe({
        next: () => {
          this.loading = false;
          if (this.impactInitiative) this.initForm(this.impactInitiative);

          this.impactInitiativeService.closeDrawer();

          this.helper.notification.toastSuccess();
          this.created.emit;
        },
      });
    } else {
      this.helper.notification.alertDanger('Form invalid');
    }
  }

  // getFormData() {
  //   return {
  //     name: this.createInitiativeGoalForm.value.goal_name!,
  //     metric: this.createInitiativeGoalForm.value.goal_metric!,
  //     metricType: this.createInitiativeGoalForm.value.goal_metric_type! as
  //       | 'Total'
  //       | 'Average',
  //     target: this.createInitiativeGoalForm.value.goal_target!,
  //     data: [],
  //   };
  // }

  submitUpdateInitiativeGoal() {
    console.log(this.form.value);
    // this.updateInitiativeGoal?.(this.getFormData());
  }
}
