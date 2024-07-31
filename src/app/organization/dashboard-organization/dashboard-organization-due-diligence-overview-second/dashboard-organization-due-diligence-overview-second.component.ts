import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-organization-due-diligence-overview-second',
  templateUrl:
    './dashboard-organization-due-diligence-overview-second.component.html',
  styleUrls: [
    './dashboard-organization-due-diligence-overview-second.component.scss',
  ],
})
export class DashboardOrganizationDueDiligenceOverviewSecondComponent {
  data: any;

  options: any;

  lineData: any;

  lineOptions: any;

  ageRange: { name: string; percentage: number; color?: string }[] = [];

  ethnicities: { name: string; percentage: number; color?: string }[] = [];

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const lineTextColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: [
        'High Risk',
        'Medium risk',
        'Moderate to high risk',
        'Low to moderate risk',
      ],
      datasets: [
        {
          data: [300, 50, 100, 200],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--blue-200'),
            documentStyle.getPropertyValue('--blue-900'),
            documentStyle.getPropertyValue('--blue-700'),
          ],
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
      cutout: '60%',
      plugins: {
        // legend: {
        //   labels: {
        //     color: textColor,
        //   },
        // },

        datalabels: {
          display: true,
          formatter: (value: any) => {
            return value + '%';
          },
        },
      },
    };

    this.lineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4,
        },
        {
          label: 'Second Dataset',
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
