import { Component, Input, OnInit } from '@angular/core';
import { BaseComponent } from '../../../shared/base-component';
import { ImpactInitiativeGoal } from '../../impact-initiative-goal/impact-initiative-goal.model';
import { ImpactInitiativeGoalService } from '../../impact-initiative-goal/impact-initiative-goal.service';
import { InitiativesService } from '../../initiatives.service';
import { ImpactInitiativeProgressData } from '../impact-initiative-progress-data.model';
import { ImpactInitiativeProgressDataService } from '../impact-initiative-progress-data.service';

@Component({
  selector: 'app-impact-initiative-progress-data-show',
  templateUrl: './impact-initiative-progress-data-show.component.html',
  styleUrls: ['./impact-initiative-progress-data-show.component.scss'],
})
export class ImpactInitiativeProgressDataShowComponent
  extends BaseComponent<ImpactInitiativeProgressData>
  implements OnInit
{
  @Input({ required: true }) impactInitiativeGoal!: ImpactInitiativeGoal;
  chartData: any;

  options: any;

  constructor(
    public impactInitiativeProgressDataService: ImpactInitiativeProgressDataService,
    public impactInitiativeGoalService: ImpactInitiativeGoalService,
    public impactInitiativeService: InitiativesService
  ) {
    super(impactInitiativeProgressDataService);
  }

  override ngOnInit(): void {
    this.getByImpactInitiativeGoalId(this.impactInitiativeGoal.id!);

    this.subscriptions['newImpactInitiativeProgressData'] =
      this.impactInitiativeProgressDataService.lastItemCreated$.subscribe(
        (data) => {
          if (data.impact_initiative_goal_id === this.impactInitiativeGoal.id) {
            this.data.push(data);
            this.data.sort((a, b) => (a.date! > b.date! ? 1 : -1));
            this.renderChart(this.data);
          }
        }
      );
  }

  addData() {
    this.impactInitiativeGoalService.singleData = this.impactInitiativeGoal;
    this.impactInitiativeService.openDrawer(
      'create-impact-initiative-progress-data',
      'Add data'
    );
  }

  renderChart(data: ImpactInitiativeProgressData[]) {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.chartData = {
      labels: data.map((x) => new Date(x.date!).toDateString()),
      datasets: [
        {
          label: 'Progress',
          data: data.map((x) => x.data),
          fill: true,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4,
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };
  }

  getByImpactInitiativeGoalId(impactInitiativeGoalId: number) {
    this.loading = true;
    this.impactInitiativeProgressDataService
      .getByImpactInitiativeGoalId(impactInitiativeGoalId)
      .subscribe((data) => {
        this.data = data;
        this.renderChart(data);
        this.loading = false;
      });
  }
}
