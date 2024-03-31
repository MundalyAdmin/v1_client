import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  EventEmitter,
} from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import {
  ImpactInitiative,
  // ImpactInitiativeGoalData,
} from '../../initiatives.model';
import { ImpactInitiativeGoal } from '../impact-initiative-goal.model';
import { ImpactInitiativeGoalService } from '../impact-initiative-goal.service';
import { ApexOptions } from 'apexcharts';
import { ReplaySubject } from 'rxjs';
import { InitiativesService } from '../../initiatives.service';

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
    public impactInitiativeService: InitiativesService
  ) {
    super();
  }

  ngOnInit(): void {
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
