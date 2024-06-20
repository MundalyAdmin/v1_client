import { Component, Input } from '@angular/core';
import { SurveyAnswerCount } from './survey-answer-count.model';

@Component({
  selector: 'app-survey-answer',
  templateUrl: './survey-answer.component.html',
  styleUrls: ['./survey-answer.component.scss'],
})
export class SurveyAnswerComponent {
  @Input({ required: true }) answers!: SurveyAnswerCount[];
  @Input() chartType: 'bar' | 'pie' | 'doughnut' = 'bar';
  chartData: any;
  options: any;

  ngOnInit() {
    this.renderChart(this.answers);
  }

  renderChart(data: SurveyAnswerCount[]) {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.chartData = {
      labels: this.answers.map((answer) => answer.answer),
      datasets: [
        {
          label: 'Community responses',
          data: this.answers.map((answer) => +answer.count),
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgb(255, 159, 64)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
          ],
          borderWidth: 1,

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
}
