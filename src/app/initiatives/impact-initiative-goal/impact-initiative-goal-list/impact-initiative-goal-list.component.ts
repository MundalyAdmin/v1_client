import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { ImpactInitiativeProgressDataService } from '../../impact-initiative-progress-data/impact-initiative-progress-data.service';
import { InitiativesService } from '../../initiatives.service';
import { ImpactInitiativeGoal } from '../impact-initiative-goal.model';
import { ImpactInitiativeGoalService } from '../impact-initiative-goal.service';
import { ImpactInitiativeProgressData } from '../../impact-initiative-progress-data/impact-initiative-progress-data.model';
import { ImpactInitiative } from '../../../scale/impact-initiative/impact-initiative.model';

@Component({
  selector: 'app-impact-initiative-goal-list',
  templateUrl: './impact-initiative-goal-list.component.html',
  styleUrls: ['./impact-initiative-goal-list.component.scss'],
})
export class ImpactInitiativeGoalListComponent
  extends BaseComponent<ImpactInitiativeGoal>
  implements OnInit
{
  @Input() impactInitiative: ImpactInitiative | null = null;

  constructor(
    public impactInitiativeGoalService: ImpactInitiativeGoalService,
    public impactInitiativeService: InitiativesService,
    public impactInitiativeProgressDataService: ImpactInitiativeProgressDataService
  ) {
    super();
  }

  override ngOnInit(): void {
    if (this.impactInitiative) {
      this.getByImpactInitiative(this.impactInitiative.id!);
    }

    this.subscriptions['newImpactInitiativeGoal'] =
      this.impactInitiativeGoalService.lastItemCreated$.subscribe(
        (impactInitiativeGoal) => {
          if (
            impactInitiativeGoal.impact_initiative_id ===
            this.impactInitiative?.id
          ) {
            this.data.unshift({
              ...impactInitiativeGoal,
              impact_initiative: this.impactInitiative!,
            });
          }
        }
      );

    this.subscriptions['newProgressData'] =
      this.impactInitiativeProgressDataService.lastItemCreated$.subscribe(
        (progressData) => {
          this.updateProgressData(progressData);
        }
      );
  }

  updateProgressData(data: ImpactInitiativeProgressData) {
    const indexGoal = this.data.findIndex(
      (goal) => goal.id === data.impact_initiative_goal_id
    );
    if (indexGoal >= 0) {
      const newProgress = this.data[indexGoal].total_progress + data.data!;
      this.data[indexGoal] = {
        ...this.data[indexGoal],
        total_progress: newProgress,
        total_progress_percentage:
          (newProgress / this.data[indexGoal].metric_target) * 100,
      };
    }
  }

  getByImpactInitiative(impactInitiativeId: number) {
    this.loading = true;
    this.impactInitiativeGoalService
      .getByImpactInitiativeId(impactInitiativeId)
      .subscribe({
        next: (goals) => {
          this.data = goals.map((goal) => {
            return {
              ...goal,
              impact_initiative: this.impactInitiative!,
            };
          });
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        },
      });
  }

  addData(impactInitiativeGoal: ImpactInitiativeGoal) {
    this.impactInitiativeGoalService.singleData = {
      ...impactInitiativeGoal,
    };
    this.impactInitiativeService.openDrawer(
      'create-impact-initiative-progress-data',
      'Add data'
    );
  }
}
