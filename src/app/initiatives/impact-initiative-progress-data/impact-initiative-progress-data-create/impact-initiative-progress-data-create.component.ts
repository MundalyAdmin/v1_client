import { Component, Input, OnInit } from '@angular/core';
import { BaseCreateComponent } from '../../../shared/base-component';
import { ImpactInitiativeProgressData } from '../impact-initiative-progress-data.model';
import { ImpactInitiativeProgressDataService } from '../impact-initiative-progress-data.service';
import { ImpactInitiativeGoal } from '../../impact-initiative-goal/impact-initiative-goal.model';
import { Validators } from '@angular/forms';
import { ImpactInitiativeService } from '../../../scale/impact-initiative/impact-initiative.service';
import { InitiativesService } from '../../initiatives.service';
import { ImpactInitiativeGoalService } from '../../impact-initiative-goal/impact-initiative-goal.service';

@Component({
  selector: 'app-impact-initiative-progress-data-create',
  templateUrl: './impact-initiative-progress-data-create.component.html',
  styleUrls: ['./impact-initiative-progress-data-create.component.scss'],
})
export class ImpactInitiativeProgressDataCreateComponent
  extends BaseCreateComponent<ImpactInitiativeProgressData>
  implements OnInit
{
  impactInitiativeGoal: ImpactInitiativeGoal | null = null;
  constructor(
    public impactInitiativeProgressDataService: ImpactInitiativeProgressDataService,
    public impactInitiativeGoalService: ImpactInitiativeGoalService,
    public impactInitiativeService: InitiativesService
  ) {
    super();
  }

  override ngOnInit() {
    this.subscriptions['impact-inititiative-gaol'] =
      this.impactInitiativeGoalService.singleData$.subscribe((goal) => {
        this.impactInitiativeGoal = goal!;
        this.initForm();
      });
  }

  initForm() {
    this.form = this.fb.group({
      impact_initiative_name: [
        {
          value: this.impactInitiativeGoal?.impact_initiative?.name,
          disabled: true,
        },
        Validators.required,
      ],
      impact_initiative_goal_name: [
        { value: this.impactInitiativeGoal?.name, disabled: true },
        Validators.required,
      ],
      impact_initiative_goal_id: [
        this.impactInitiativeGoal?.id,
        Validators.required,
      ],

      name: [null, Validators.required],

      description: [null, Validators.required],

      data: [null, Validators.required],

      date: [Date.now(), Validators.required],
    });
  }

  override create() {
    this.loading = true;
    this.impactInitiativeProgressDataService.store(this.form.value).subscribe({
      next: () => {
        this.loading = false;
        this.helper.notification.alertSuccess();
        this.initForm();
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  cancel() {
    this.impactInitiativeService.closeDrawer();
  }
}
