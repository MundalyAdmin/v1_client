import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ImpactInitiativeGoal } from '../../impact-initiative-goal/impact-initiative-goal.model';

@Component({
  selector: 'app-create-goal',
  templateUrl: './create-goal.component.html',
  styleUrls: ['./create-goal.component.scss'],
})
export class CreateGoalComponent {
  @Input() intiativeName!: string;
  @Input() cancelCreateGoal!: () => void;
  @Input() addInitiativeGoal?: (goal: ImpactInitiativeGoal) => void;
  @Input() updateInitiativeGoal?: (goal: ImpactInitiativeGoal) => void;
  @Input() goal?: ImpactInitiativeGoal;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    if (this.goal) {
      this.createInitiativeGoalForm.setValue({
        goal_name: this.goal.name,
        goal_metric: this.goal.metric_name,
        goal_metric_type: this.goal.type_metric_impact_initiative_goal.name,
        goal_target: this.goal.metric_target || 0,
      });
    }
  }

  createInitiativeGoalForm = this.formBuilder.group({
    goal_name: '',
    goal_metric_type: '',
    goal_metric: '',
    goal_target: 0,
  });

  submitCreateInitiativeGoal() {
    if (this.goal) {
      this.submitUpdateInitiativeGoal();
      return;
    }

    // this.addInitiativeGoal?.(this.getFormData());
  }

  getFormData() {
    return {
      name: this.createInitiativeGoalForm.value.goal_name!,
      metric: this.createInitiativeGoalForm.value.goal_metric!,
      metricType: this.createInitiativeGoalForm.value.goal_metric_type! as
        | 'Total'
        | 'Average',
      target: this.createInitiativeGoalForm.value.goal_target!,
      data: [],
    };
  }

  submitUpdateInitiativeGoal() {
    // this.updateInitiativeGoal?.(this.getFormData());
  }
}
