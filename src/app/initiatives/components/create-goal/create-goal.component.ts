import { Component, Input } from '@angular/core';
import { InitiativeImpactGoal } from '../../initiatives.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-goal',
  templateUrl: './create-goal.component.html',
  styleUrls: ['./create-goal.component.scss']
})
export class CreateGoalComponent {
  @Input() intiativeName!: string;
  @Input() cancelCreateGoal!: () => void
  @Input() addInitiativeGoal?: (goal: InitiativeImpactGoal) => void
  @Input() updateInitiativeGoal?: (goal: InitiativeImpactGoal) => void
  @Input() goal?: InitiativeImpactGoal

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    if (this.goal) {
      this.createInitiativeGoalForm.setValue(
        {
          goal_name: this.goal.name,
          goal_metric: this.goal.metric,
          goal_metric_type: this.goal.metricType,
          goal_target: this.goal.target || 0
        }
      )
    }

  }

  createInitiativeGoalForm = this.formBuilder.group({
    goal_name: "",
    goal_metric_type: "",
    goal_metric: "",
    goal_target: 0
  });


  submitCreateInitiativeGoal() {
    if (this.goal) {
      this.submitUpdateInitiativeGoal();
      return;
    }

    this.addInitiativeGoal?.(this.getFormData())
  }

  getFormData() {
    return ({
      name: this.createInitiativeGoalForm.value.goal_name!,
      metric: this.createInitiativeGoalForm.value.goal_metric!,
      metricType: this.createInitiativeGoalForm.value.goal_metric_type! as ("Total" | "Average"),
      target: this.createInitiativeGoalForm.value.goal_target!,
      data: []
    })
  }

  submitUpdateInitiativeGoal() {
    this.updateInitiativeGoal?.(this.getFormData())
  }

}
