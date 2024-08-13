import { Component } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-dashboard-organization-wellbeing-overview-second',
  templateUrl:
    './dashboard-organization-wellbeing-overview-second.component.html',
  styleUrls: [
    './dashboard-organization-wellbeing-overview-second.component.scss',
  ],
})
export class DashboardOrganizationWellbeingOverviewSecondComponent {
  data: any;

  funders: any[] = [];

  options: any;

  lineData: any;

  lineOptions: any;

  ageRange: { name: string; percentage: number; color?: string }[] = [];

  ethnicities: { name: string; percentage: number; color?: string }[] = [];

  plugins: any = [];

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const lineTextColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['High', 'Moderate to High', 'Moderate', 'Low'],
      datasets: [
        {
          data: [300, 50, 100, 200],
          backgroundColor: ['#07046B', '#07046B99', '#07046B66', '#07046B33'],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--blue-100'),
            documentStyle.getPropertyValue('--blue-800'),
            documentStyle.getPropertyValue('--blue-600'),
          ],
        },
      ],
    };

    this.options = {
      cutout: '40%',
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
        datalabels: {
          color: 'white',
          backgroundColor: '#21CEB9',
          labels: {
            title: {
              font: {
                weight: 'bold',
              },
            },
          },
          formatter: (value: any, context: any) => {
            return `${
              context.chart.data.labels[context.dataIndex]
            }\n ${Math.floor((value / 450) * 100)}%`;
          },
        },
      },
    };

    this.plugins = [ChartDataLabels];

    this.lineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Male',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4,
        },
        {
          label: 'Female',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          tension: 0.4,
        },
      ],
    };

    this.lineOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: lineTextColor,
          },
        },
      },
      scales: {
        x: {
          display: false,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: 'transparent',
            drawBorder: false,
          },
        },
        y: {
          display: false,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: 'transparent',
            drawBorder: false,
          },
          gridLine: {
            drawBorder: false,
          },
        },
      },
    };

    this.ageRange = [
      {
        name: '<10',
        percentage: Math.floor(Math.random() * 100),
        color: documentStyle.getPropertyValue('--blue-500'),
      },
      {
        name: '10 - 30',
        percentage: Math.floor(Math.random() * 100),
        color: documentStyle.getPropertyValue('--yellow-500'),
      },
      {
        name: '30 - 50',
        percentage: Math.floor(Math.random() * 100),
        color: documentStyle.getPropertyValue('--blue-300'),
      },
      {
        name: '50 - 70',
        percentage: Math.floor(Math.random() * 100),
        color: documentStyle.getPropertyValue('--green-500'),
      },
      {
        name: '50 - 70',
        percentage: Math.floor(Math.random() * 100),
        color: documentStyle.getPropertyValue('--pink-500'),
      },
      {
        name: '50 - 70',
        percentage: Math.floor(Math.random() * 100),
        color: documentStyle.getPropertyValue('--red-500'),
      },
      {
        name: '50 - 70',
        percentage: Math.floor(Math.random() * 100),
        color: documentStyle.getPropertyValue('--purple-500'),
      },
    ];

    this.ethnicities = [
      {
        name: 'White',
        percentage: Math.floor(Math.random() * 100),
        color: documentStyle.getPropertyValue('--blue-500'),
      },
      {
        name: 'Asian',
        percentage: Math.floor(Math.random() * 100),
        color: documentStyle.getPropertyValue('--yellow-500'),
      },
      {
        name: 'Black / African American',
        percentage: Math.floor(Math.random() * 100),
        color: documentStyle.getPropertyValue('--blue-300'),
      },
      {
        name: 'American Indian',
        percentage: Math.floor(Math.random() * 100),
        color: documentStyle.getPropertyValue('--green-500'),
      },
      {
        name: 'Others',
        percentage: Math.floor(Math.random() * 100),
        color: documentStyle.getPropertyValue('--pink-500'),
      },
    ];
  }
}
