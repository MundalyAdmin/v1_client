import {
  ChangeDetectorRef,
  Component,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
import {
  InitiativeImpact,
  InitiativeImpactGoal,
  InitiativeImpactGoalData,
} from './initiatives.model';
import * as ApexCharts from 'apexcharts';
import { Modal, ModalOptions, ModalInterface } from 'flowbite';
import { InitiativesService } from './initiatives.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-initiatives',
  templateUrl: './initiatives.component.html',
  styleUrls: ['./initiatives.component.scss'],
})
export class InitiativesComponent implements OnInit {
  constructor(
    private initiativeService: InitiativesService,
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.addInitiativeGoal = this.addInitiativeGoal.bind(this);
    this.addInitiativeGoalData = this.addInitiativeGoalData.bind(this);
    this.closeRightDrawer = this.closeRightDrawer.bind(this);
    this.updateInitiativeGoal = this.updateInitiativeGoal.bind(this);
    this.initiativeService.getInitiatives().subscribe((val) => {
      this.initiatives = val;
    });
  }

  createInitiativeForm = this.formBuilder.group({
    name: '',
    startDate: new Date(),
    endDate: new Date(),
    demographyCheckbox: false,
    initiativeCity: '',
    initiativeCountry: '',
    initiativeStartAge: '',
    initiativeEndAge: '',
    initiativeEthnicity: '',
    initiativeSex: '',
  });

  showRightDrawer: boolean = false;
  initiatives: InitiativeImpact[] = [];

  selectedInitiativeIndex: number = -1;
  selectedInitiativeGoalIndex: number = -1;

  rightDrawerCompoent: 'create-goal' | 'update-goal' | 'add-data' =
    'create-goal';

  charts: { [key: string]: ApexCharts[] } = {};
  modal?: ModalInterface;

  ngAfterViewInit() {
    this.setupModal();
    this.renderCharts();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('simple changes', changes);
  }

  openRightDrawer(
    component: 'create-goal' | 'update-goal' | 'add-data',
    initiativeIndex: number,
    goalIndex: number = -1
  ) {
    this.selectedInitiativeIndex = initiativeIndex;
    this.selectedInitiativeGoalIndex = goalIndex;

    this.showRightDrawer = true;
    this.rightDrawerCompoent = component;
    Object.values(this.charts)
      .flat()
      .forEach((chart) => {
        chart.updateOptions({
          chart: {
            width: '560px',
          },
        });
      });
  }

  closeRightDrawer() {
    this.showRightDrawer = false;
    Object.values(this.charts)
      .flat()
      .forEach((chart) => {
        chart.updateOptions({
          chart: {
            width: '925px',
          },
        });
      });
  }

  showModal() {
    this.modal?.show();
  }

  closeModal() {
    this.modal?.hide();
    document.querySelector('body > div[modal-backdrop]')?.remove();
  }

  renderCharts() {
    this.initiatives.forEach((initiative, i) => {
      initiative.goals?.forEach((goal, j) => {
        const chart = new ApexCharts(
          document.getElementById(`initiative-chart-${i}${j}`),
          this.createChartOption(goal)
        );
        if (!this.charts[i]) {
          this.charts[i] = [];
        }
        this.charts[i].push(chart);
        chart.render();
      });
    });
  }

  createInitiative(): void {
    this.initiativeService
      .addInitiative({
        name: this.createInitiativeForm.value.name!,
        goals: [],
        startDate: this.createInitiativeForm.value.startDate!,
        endDate: this.createInitiativeForm.value.endDate!,
        sex: this.createInitiativeForm.value.initiativeSex! as
          | 'Male'
          | 'Female'
          | 'All',
        country: this.createInitiativeForm.value.initiativeCountry!,
        city: this.createInitiativeForm.value.initiativeCity!,
        ageRangeStart: Number(
          this.createInitiativeForm.value.initiativeStartAge!
        ),
        ageRangeEnd: Number(this.createInitiativeForm.value.initiativeEndAge!),
        ethnicity: this.createInitiativeForm.value.initiativeEthnicity!,
      })
      .subscribe((initiatives) => {
        this.initiatives = initiatives;
      });
    this.createInitiativeForm.reset();
    this.closeModal();
  }

  addInitiativeGoal(goal: InitiativeImpactGoal) {
    if (!this.initiatives[this.selectedInitiativeIndex].goals) {
      this.initiatives[this.selectedInitiativeIndex].goals = [];
    }
    this.initiatives[this.selectedInitiativeIndex].goals?.push(goal);
    this.initiativeService.update(
      this.selectedInitiativeIndex,
      this.initiatives[this.selectedInitiativeIndex]
    );
    this.closeRightDrawer();
    setTimeout(() => {
      const chart = new ApexCharts(
        document.getElementById(
          `initiative-chart-${this.selectedInitiativeIndex}${
            this.initiatives[this.selectedInitiativeIndex].goals.length - 1
          }`
        ),
        this.createChartOption(goal)
      );
      if (!this.charts[this.selectedInitiativeIndex]) {
        this.charts[this.selectedInitiativeIndex] = [];
      }
      this.charts[this.selectedInitiativeIndex].push(chart);
      chart.render();
    }, 100);
  }

  addInitiativeGoalData(data: InitiativeImpactGoalData) {
    this.initiatives[this.selectedInitiativeIndex].goals[
      this.selectedInitiativeGoalIndex
    ].data.push(data);
    this.initiativeService.update(
      this.selectedInitiativeIndex,
      this.initiatives[this.selectedInitiativeIndex]
    );
    this.closeRightDrawer();
    this.charts[this.selectedInitiativeIndex][
      this.selectedInitiativeGoalIndex
    ].updateOptions(
      this.createChartOption(
        this.initiatives[this.selectedInitiativeIndex].goals[
          this.selectedInitiativeGoalIndex
        ]
      )
    );
  }

  updateInitiativeGoal(goal: InitiativeImpactGoal) {
    const oldGoal =
      this.initiatives[this.selectedInitiativeIndex].goals[
        this.selectedInitiativeGoalIndex
      ];
    if (!oldGoal) {
      return;
    }
    // goal.data = oldGoal.data

    this.initiatives[this.selectedInitiativeIndex].goals[
      this.selectedInitiativeGoalIndex
    ].name = goal.name;
    this.initiatives[this.selectedInitiativeIndex].goals[
      this.selectedInitiativeGoalIndex
    ].metric = goal.metric;
    this.initiatives[this.selectedInitiativeIndex].goals[
      this.selectedInitiativeGoalIndex
    ].metricType = goal.metricType;
    this.initiatives[this.selectedInitiativeIndex].goals[
      this.selectedInitiativeGoalIndex
    ].target = goal.target;

    this.initiativeService.update(
      this.selectedInitiativeIndex,
      this.initiatives[this.selectedInitiativeIndex]
    );
    this.closeRightDrawer();
    this.charts[this.selectedInitiativeIndex][
      this.selectedInitiativeGoalIndex
    ].updateOptions(
      this.createChartOption(
        this.initiatives[this.selectedInitiativeIndex].goals[
          this.selectedInitiativeGoalIndex
        ]
      )
    );
  }

  sum(goal: InitiativeImpactGoal) {
    return goal.data.reduce((a, b) => a + b.data, 0);
  }

  setupModal() {
    const modalElement: HTMLElement = document.querySelector(
      '#create-initiative-modal'
    )!;
    const options: ModalOptions = {
      placement: 'bottom-right',
      backdrop: 'dynamic',
      backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
      closable: true,
      onHide: () => {
        console.log('modal is hidden');
      },
      onShow: () => {
        console.log('modal is shown');
      },
      onToggle: () => {
        console.log('modal has been toggled');
      },
    };

    this.modal = new Modal(modalElement, options);
  }

  createChartOption(goal: InitiativeImpactGoal): ApexOptions {
    const data: InitiativeImpactGoalData[] = goal.data;
    return {
      chart: {
        height: '100%',
        width: '100%',
        type: 'line',
        fontFamily: 'Inter, sans-serif',
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        width: 6,
        curve: 'smooth',
      },
      grid: {
        show: true,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -26,
        },
      },
      series: [
        {
          name: goal.metric,
          data: data.map((x) => x.data),
          color: '#1A56DB',
        },
      ],
      legend: {
        show: false,
      },
      xaxis: {
        categories: data.map((x) => new Date(x.date).toDateString()),
        labels: {
          show: true,
          style: {
            fontFamily: 'Inter, sans-serif',
            cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400',
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
    };
  }
}
